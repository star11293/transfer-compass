from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

with open(os.path.join(os.path.dirname(__file__), 'transfer_data_combined.json'), 'r') as f:
    DATA = json.load(f)


@app.route('/api/schools', methods=['GET'])
def get_schools():
    schools = []
    for code, info in DATA['schools'].items():
        schools.append({'code': code, 'name': info['name'], 'course_count': len(info['courses'])})
    return jsonify(schools)


@app.route('/api/courses/<school_code>', methods=['GET'])
def get_courses(school_code):
    school = DATA['schools'].get(school_code.upper())
    if not school:
        return jsonify({'error': 'School not found'}), 404
    courses = []
    for course_id, info in school['courses'].items():
        courses.append({
            'id': course_id, 'title': info['title'], 'credits': info['credits'],
            'umd_equivalent': info['umd_equivalent'], 'status': info['status'],
            'gen_ed': info.get('gen_ed', ''), 'notes': info.get('notes', '')
        })
    return jsonify({'school': school['name'], 'courses': courses})


@app.route('/api/evaluate', methods=['POST'])
def evaluate_transcript():
    data = request.json
    school_code = data.get('school', '').upper()
    selected_courses = data.get('courses', [])
    school = DATA['schools'].get(school_code)
    if not school:
        return jsonify({'error': 'School not found'}), 404

    results, satisfied_requirements = [], []
    total_credits = transferred_credits = direct_count = elective_count = 0

    for course_id in selected_courses:
        course = school['courses'].get(course_id)
        if not course:
            continue
        total_credits += course['credits']
        results.append({
            'course_id': course_id, 'title': course['title'], 'credits': course['credits'],
            'status': course['status'], 'umd_equivalent': course['umd_equivalent'],
            'gen_ed': course.get('gen_ed', ''), 'notes': course.get('notes', '')
        })
        if course['status'] == 'direct':
            direct_count += 1
            transferred_credits += course['credits']
            if course['umd_equivalent']:
                satisfied_requirements.append(course['umd_equivalent'])
        elif course['status'] == 'elective':
            elective_count += 1
            transferred_credits += course['credits']

    cs_reqs = DATA.get('umd_cs_requirements', {}).get('core', []) + DATA.get('umd_cs_requirements', {}).get('math', [])
    missing = [r for r in cs_reqs if r['course'] not in satisfied_requirements]

    return jsonify({
        'results': results,
        'summary': {
            'total_courses': len(results), 'total_credits': total_credits,
            'transferred_credits': transferred_credits, 'direct_equivalencies': direct_count,
            'elective_credits': elective_count, 'requirements_satisfied': len(satisfied_requirements),
            'requirements_missing': len(missing)
        },
        'satisfied': satisfied_requirements, 'missing': missing
    })


@app.route('/api/predict', methods=['POST'])
def predict_equivalency():
    data = request.json
    course_name = data.get('course_name', '')
    course_description = data.get('course_description', '')
    school_name = data.get('school_name', '')
    if not course_name or not course_description:
        return jsonify({'error': 'Course name and description required'}), 400

    api_key = os.environ.get('OPENAI_API_KEY', '')
    if not api_key:
        return jsonify({
            'prediction': {'equivalent_course': 'CMSC 131', 'equivalent_title': 'Object-Oriented Programming I',
                           'confidence': 'Medium', 'reason': 'Demo mode - set OPENAI_API_KEY for real predictions'},
            'disclaimer': 'AI-generated estimate. Not official transfer credit.', 'mode': 'demo'
        })

    cs_reqs = DATA.get('umd_cs_requirements', {}).get('core', []) + DATA.get('umd_cs_requirements', {}).get('math', [])
    umd_list = "\n".join([f"- {c['course']}: {c['title']}" for c in cs_reqs])
    prompt = f"You are an academic advisor. A student took '{course_name}' at {school_name or 'another institution'}. Description: {course_description}. UMD courses:\n{umd_list}\nFind the best match. Respond ONLY as JSON: {{\"equivalent_course\":\"CODE\",\"equivalent_title\":\"TITLE\",\"confidence\":\"High/Medium/Low\",\"reason\":\"explanation\"}}"

    try:
        import requests as req
        response = req.post('https://api.openai.com/v1/chat/completions',
            headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'},
            json={'model': 'gpt-4o-mini', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 300, 'temperature': 0.3})
        content = response.json()['choices'][0]['message']['content'].strip()
        if content.startswith('```'):
            content = content.split('\n', 1)[1].rsplit('```', 1)[0]
        return jsonify({'prediction': json.loads(content), 'disclaimer': 'AI-generated estimate. Not official transfer credit.'})
    except Exception as e:
        return jsonify({'error': f'AI prediction failed: {str(e)}'}), 500


@app.route('/api/requirements/<major>', methods=['GET'])
def get_requirements(major):
    if major.lower() == 'cs':
        return jsonify(DATA.get('umd_cs_requirements', {}))
    return jsonify({'error': 'Major not found. Currently only CS is supported.'}), 404


if __name__ == '__main__':
    app.run(debug=True, port=5000)
