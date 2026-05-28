# Transfer Compass 🧭

**See how your community college courses transfer to UMD;instantly.**

Built at Bitcamp 2026 (UMD Hackathon).

## The Problem
Transfer students in Maryland have to check their credits one course at a time on UMD's website. There's no way to see the full picture — what transfers, what doesn't, and what you're still missing for your major.

## The Solution
Input all your community college courses at once and instantly see:
- ✅ **Direct transfers** (green) — maps to a specific UMD course
- 🟡 **Elective credit** (yellow) — accepted but as general elective
- ❌ **Not accepted** (red) — doesn't transfer
- 📊 **Gap analysis** — what requirements you still need for your target major
- 🤖 **AI predictor** — for courses not in the database, paste a description and get an estimated match

## Supported Schools
- Community College of Baltimore County (CCBC)
- Montgomery College (MC)
- Anne Arundel Community College (AACC)
- Howard Community College (HCC)
- Prince George's Community College (PGCC)

## Tech Stack
- **Frontend:** React + Tailwind
- **Backend:** Python (Flask)
- **AI:** OpenAI API (GPT-4o-mini)
- **Data:** Pre-scraped transfer equivalency data (JSON)

## Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Server runs on http://localhost:5000

### Frontend
```bash
npx create-react-app frontend
# Copy TransferCompass.jsx into src/
# Import and render in App.js
cd frontend
npm start
```

### AI Feature
Set your OpenAI API key:
```bash
export OPENAI_API_KEY=your-key-here
```
Without it, the AI predictor runs in demo mode with keyword matching.

## Adding More Data

### Manual method (recommended)
1. Go to https://app.transfercredit.umd.edu
2. Click "Access Master List"  
3. Search for a school
4. Copy the data into `backend/transfer_data.json`

### Scraper
```bash
pip install requests beautifulsoup4
python scraper.py
```
Note: The scraper may need adjustment based on the website's form structure.

## Project Structure
```
transfer-compass/
├── backend/
│   ├── app.py              # Flask API
│   ├── transfer_data.json  # Course equivalency data
│   └── requirements.txt
├── frontend/
│   └── src/
│       └── TransferCompass.jsx  # Main React component
├── scraper.py              # Data scraper script
└── README.md
```

## API Endpoints
- `GET /api/schools` — List available schools
- `GET /api/courses/<school_code>` — Get courses for a school
- `POST /api/evaluate` — Evaluate a transcript
- `POST /api/predict` — AI equivalency prediction
- `GET /api/requirements/cs` — Get CS major requirements

## Hackathon Game Plan

### Pre-hackathon (do this week)
- [x] Set up project structure
- [x] Create seed data JSON
- [ ] Try running scraper for more data
- [ ] Manually add any missing courses to JSON
- [ ] Test the frontend component

### Friday night (hours 0-4)
- [ ] Get everyone's environment set up
- [ ] Run the backend, verify API works
- [ ] Get frontend rendering
- [ ] Assign roles

### Saturday (hours 4-24) 
- [ ] Frontend: Polish dashboard UI
- [ ] Backend: Add more schools/courses
- [ ] AI: Connect OpenAI API, test predictions
- [ ] Integration: Connect frontend to backend API

### Sunday morning (hours 24-36)
- [ ] Bug fixes and polish
- [ ] Prepare demo
- [ ] Write Devpost submission
- [ ] Practice 3-minute pitch

## Team Roles
1. **Frontend** — Dashboard UI, course selection, results display
2. **Backend + Data** — Flask API, JSON data, add more schools
3. **AI Feature** — OpenAI integration, prediction endpoint
4. **Polish + Pitch** — UI animations, demo flow, presentation

## License
MIT
