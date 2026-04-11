import { useState } from "react";

const TRANSFER_DATA = {"schools":{"CCBC":{"name":"Community College of Baltimore County","courses":{"ACCT101":{"title":"Principles of Accounting I","credits":3,"umd_equivalent":"BMGT 220","status":"direct","gen_ed":"","notes":""},"ACCT102":{"title":"Principles of Accounting II","credits":3,"umd_equivalent":"BMGT 221","status":"direct","gen_ed":"","notes":""},"ACDV101":{"title":"Transitioning to College","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Lower-level elective. Counts toward MTAP 30-credit minimum."},"BIOL100":{"title":"Exploring Biology","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"DSNS","notes":"Satisfies DSNS gen ed"},"BIOL101":{"title":"General Biology I","credits":4,"umd_equivalent":"BSCI 105","status":"direct","gen_ed":"DSNL","notes":"Satisfies DSNL gen ed"},"BIOL108":{"title":"General Biology II","credits":4,"umd_equivalent":"BSCI 106","status":"direct","gen_ed":"DSNL","notes":""},"BIOL110":{"title":"Biology I: Molecules/Cell","credits":4,"umd_equivalent":"BSCI 170","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also equivalent to BSCI 171"},"BIOL111":{"title":"Biology II: Organism/Ecology","credits":4,"umd_equivalent":"BSCI 160","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also equivalent to BSCI 161"},"BIOL201":{"title":"Human Anatomy & Physiology I","credits":4,"umd_equivalent":"BSCI 201","status":"direct","gen_ed":"DSNL","notes":""},"BIOL220":{"title":"Human Anatomy & Physiology I","credits":4,"umd_equivalent":"BSCI 201","status":"direct","gen_ed":"DSNL","notes":""},"BIOL221":{"title":"Anatomy & Physiology II","credits":4,"umd_equivalent":"BSCI 202","status":"direct","gen_ed":"","notes":""},"BIOL230":{"title":"Microbiology","credits":4,"umd_equivalent":"BSCI 223","status":"direct","gen_ed":"DSNL, SCIS","notes":""},"BIOL251":{"title":"Principles of Genetics","credits":4,"umd_equivalent":"BSCI 222","status":"direct","gen_ed":"","notes":""},"BIOL256":{"title":"Nutrition","credits":3,"umd_equivalent":"NFSC 100","status":"direct","gen_ed":"DSNS","notes":""},"CHEM105":{"title":"College Chemistry I","credits":4,"umd_equivalent":"CHEM 131","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also equivalent to CHEM 132"},"CHEM121":{"title":"General Chemistry I","credits":4,"umd_equivalent":"CHEM 131","status":"direct","gen_ed":"DSNL","notes":""},"CHEM123":{"title":"General Chemistry II","credits":4,"umd_equivalent":"CHEM 271","status":"direct","gen_ed":"DSNL","notes":""},"CHEM131":{"title":"General Chemistry I","credits":4,"umd_equivalent":"CHEM 131","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also equivalent to CHEM 132"},"CHEM133":{"title":"General Chemistry II","credits":4,"umd_equivalent":"CHEM 271","status":"direct","gen_ed":"","notes":""},"CHEM200":{"title":"Organic Chemistry I","credits":4,"umd_equivalent":"CHEM 231","status":"direct","gen_ed":"","notes":""},"CHEM202":{"title":"Organic Chemistry II","credits":4,"umd_equivalent":"CHEM 241","status":"direct","gen_ed":"","notes":""},"CMNS101":{"title":"Fundamentals of Communication","credits":3,"umd_equivalent":"COMM 107","status":"direct","gen_ed":"FSOC","notes":"Satisfies FSOC gen ed"},"CMSC180":{"title":"C Programming","credits":3,"umd_equivalent":"CMSC 106","status":"direct","gen_ed":"","notes":""},"CMSC201":{"title":"Computer Science I","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Accepted as L1 lower-level elective. Does NOT map to CMSC 131."},"CMSC202":{"title":"Computer Science II","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Accepted as L1 lower-level elective. Does NOT map to CMSC 132."},"CMSC243":{"title":"Discrete Mathematics","credits":3,"umd_equivalent":"CMSC 250","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 250"},"CSIT101":{"title":"Technology & Information Systems","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"DSXX","notes":"Satisfies a gen ed distributive studies requirement"},"CSIT111":{"title":"Fundamentals of Logic & Design","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"DSXX","notes":"Satisfies a gen ed distributive studies requirement"},"CSIT120":{"title":"Diversity in Technology & Society","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"DSHS, DVUP","notes":"Satisfies DSHS and diversity gen ed"},"CSIT121":{"title":"Web Standards","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Lower-level elective"},"CSIT210":{"title":"Intro to Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Lower-level elective"},"CSIT211":{"title":"Advanced Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Lower-level elective"},"CSIT214":{"title":"C++ Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"Lower-level elective"},"CSIT216":{"title":"Python Programming","credits":3,"umd_equivalent":"INST 126","status":"direct","gen_ed":"","notes":""},"ECON201":{"title":"Intro to Macroeconomics","credits":3,"umd_equivalent":"ECON 201","status":"direct","gen_ed":"DSHS","notes":"Satisfies DSHS gen ed"},"ECON202":{"title":"Intro to Microeconomics","credits":3,"umd_equivalent":"ECON 200","status":"direct","gen_ed":"DSHS","notes":"Satisfies DSHS gen ed"},"ENGL101":{"title":"College Composition I","credits":3,"umd_equivalent":"ENGL 101","status":"direct","gen_ed":"FSAW","notes":"Satisfies FSAW gen ed. Note: for recent terms accepted as gen ed only, check term dates."},"ENGL102":{"title":"College Composition II","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"DSSP","notes":"Satisfies DSSP gen ed (recent terms). Check term dates for exact equivalency."},"ENGL106":{"title":"English Grammar","credits":3,"umd_equivalent":"ENGL 281","status":"direct","gen_ed":"","notes":""},"ENGL201":{"title":"British Literature I","credits":3,"umd_equivalent":"ENGL 211","status":"direct","gen_ed":"DSHU","notes":"Satisfies DSHU gen ed"},"ENGL202":{"title":"British Literature II","credits":3,"umd_equivalent":"ENGL 212","status":"direct","gen_ed":"DSHU","notes":""},"ENGL203":{"title":"American Literature I","credits":3,"umd_equivalent":"ENGL 221","status":"direct","gen_ed":"","notes":""},"ENGL204":{"title":"American Literature II","credits":3,"umd_equivalent":"ENGL 222","status":"direct","gen_ed":"DSHU","notes":""},"ENGL205":{"title":"World Literature I","credits":3,"umd_equivalent":"ENGL 201","status":"direct","gen_ed":"DSHU, DVUP","notes":""},"ENGL213":{"title":"Technical Writing","credits":3,"umd_equivalent":"ENGL 291","status":"direct","gen_ed":"FSAW","notes":""},"ENSC101":{"title":"Intro to Engineering Design","credits":3,"umd_equivalent":"ENES 100","status":"direct","gen_ed":"DSSP","notes":""},"ENSC111":{"title":"Mechanics I (Statics)","credits":3,"umd_equivalent":"ENES 102","status":"direct","gen_ed":"","notes":""},"ENSC211":{"title":"Mechanics II (Dynamics)","credits":3,"umd_equivalent":"ENES 221","status":"direct","gen_ed":"","notes":""},"ENSC221":{"title":"Mechanics of Materials","credits":3,"umd_equivalent":"ENES 220","status":"direct","gen_ed":"","notes":""},"ENSC251":{"title":"Circuit Analysis","credits":3,"umd_equivalent":"ENEE 204","status":"direct","gen_ed":"","notes":""},"ENVS101":{"title":"Intro to Environmental Science","credits":4,"umd_equivalent":"ENSP 101","status":"direct","gen_ed":"DSNL","notes":""},"ERSC121":{"title":"Physical Geology","credits":4,"umd_equivalent":"GEOL 100","status":"direct","gen_ed":"DSNL","notes":""},"ERSC131":{"title":"Meteorology","credits":3,"umd_equivalent":"AOSC 200","status":"direct","gen_ed":"DSNL or DSNS, SCIS","notes":""},"GEOG101":{"title":"Intro to Physical Geography","credits":3,"umd_equivalent":"GEOG 201","status":"direct","gen_ed":"DSNS","notes":""},"GEOG102":{"title":"Cultural Geography","credits":3,"umd_equivalent":"GEOG 202","status":"direct","gen_ed":"DSHS, DVCC","notes":""},"HIST101":{"title":"Western Civilization I","credits":3,"umd_equivalent":"HIST 111","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"HIST102":{"title":"Western Civilization II","credits":3,"umd_equivalent":"HIST 113","status":"direct","gen_ed":"DSHS","notes":""},"HIST111":{"title":"History of U.S. I","credits":3,"umd_equivalent":"HIST 200","status":"direct","gen_ed":"DSHS or DSHU","notes":""},"HIST112":{"title":"History of U.S. II","credits":3,"umd_equivalent":"HIST 201","status":"direct","gen_ed":"DSHS or DSHU, DVUP","notes":""},"HIST116":{"title":"African American History","credits":3,"umd_equivalent":"HIST 255","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"HIST155":{"title":"History of Modern Asia","credits":3,"umd_equivalent":"HIST 285","status":"direct","gen_ed":"DSHS","notes":""},"HLTH101":{"title":"Health & Wellness","credits":3,"umd_equivalent":"HLTH 140","status":"direct","gen_ed":"DSXX","notes":""},"HLTH132":{"title":"Basic Nutrition","credits":3,"umd_equivalent":"NFSC 100","status":"direct","gen_ed":"DSNS","notes":""},"MATH111":{"title":"Ideas in Mathematics","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"FSMA","notes":"Satisfies FSMA gen ed"},"MATH125":{"title":"Finite Mathematics","credits":3,"umd_equivalent":"MATH 110","status":"direct","gen_ed":"FSMA","notes":""},"MATH131":{"title":"Concepts of Math I","credits":3,"umd_equivalent":"MATH 212","status":"direct","gen_ed":"FSMA","notes":"For education majors"},"MATH153":{"title":"Intro to Statistical Methods","credits":3,"umd_equivalent":"STAT 100","status":"direct","gen_ed":"FSAR, FSMA","notes":""},"MATH163":{"title":"Pre-Calculus I","credits":4,"umd_equivalent":null,"status":"elective","gen_ed":"FSMA","notes":"Satisfies FSMA gen ed"},"MATH165":{"title":"Pre-Calculus II","credits":4,"umd_equivalent":null,"status":"elective","gen_ed":"FSMA","notes":"Satisfies FSMA gen ed"},"MATH230":{"title":"Calculus with Applications","credits":3,"umd_equivalent":"MATH 120","status":"direct","gen_ed":"FSAR, FSMA","notes":"Business calculus"},"MATH243":{"title":"Discrete Mathematics","credits":3,"umd_equivalent":"CMSC 250","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 250"},"MATH251":{"title":"Calculus I","credits":4,"umd_equivalent":"MATH 140","status":"direct","gen_ed":"FSAR, FSMA","notes":"Satisfies FSAR and FSMA gen ed"},"MATH252":{"title":"Calculus II","credits":4,"umd_equivalent":"MATH 141","status":"direct","gen_ed":"FSMA","notes":""},"MATH253":{"title":"Calculus III","credits":4,"umd_equivalent":"MATH 241","status":"direct","gen_ed":"FSMA","notes":""},"MATH257":{"title":"Linear Algebra","credits":3,"umd_equivalent":"MATH 240","status":"direct","gen_ed":"FSMA","notes":""},"MATH259":{"title":"Differential Equations","credits":3,"umd_equivalent":"MATH 246","status":"direct","gen_ed":"FSMA","notes":""},"PHIL101":{"title":"Intro to Philosophy","credits":3,"umd_equivalent":"PHIL 100","status":"direct","gen_ed":"DSHU","notes":""},"PHIL140":{"title":"Ethics","credits":3,"umd_equivalent":"PHIL 140","status":"direct","gen_ed":"DSHU","notes":""},"PHIL170":{"title":"Logic","credits":3,"umd_equivalent":"PHIL 170","status":"direct","gen_ed":"FSAR","notes":""},"PHYS101":{"title":"Fundamentals of Physics I","credits":4,"umd_equivalent":"PHYS 121","status":"direct","gen_ed":"DSNL","notes":"Algebra-based physics"},"PHYS102":{"title":"Fundamentals of Physics II","credits":4,"umd_equivalent":"PHYS 122","status":"direct","gen_ed":"DSNL","notes":"Algebra-based physics"},"PHYS151":{"title":"General Physics I","credits":4,"umd_equivalent":"PHYS 161","status":"direct","gen_ed":"DSNL","notes":"Calculus-based physics. Also equivalent to PHYS 261."},"PHYS251":{"title":"General Physics II","credits":4,"umd_equivalent":"PHYS 260","status":"direct","gen_ed":"DSNL","notes":"Also equivalent to PHYS 271"},"PHYS252":{"title":"General Physics III","credits":4,"umd_equivalent":"PHYS 270","status":"direct","gen_ed":"DSNL","notes":""},"POLS101":{"title":"American Government","credits":3,"umd_equivalent":"GVPT 170","status":"direct","gen_ed":"DSHS","notes":""},"POLS131":{"title":"Comparative Government","credits":3,"umd_equivalent":"GVPT 280","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"POLS141":{"title":"Intro to International Relations","credits":3,"umd_equivalent":"GVPT 200","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"PSYC101":{"title":"General Psychology","credits":3,"umd_equivalent":"PSYC 100","status":"direct","gen_ed":"DSHS or DSNS","notes":"Satisfies DSHS or DSNS gen ed"},"PSYC103":{"title":"Human Growth & Development","credits":3,"umd_equivalent":"EDHD 320","status":"direct","gen_ed":"DSHS","notes":""},"PSYC201":{"title":"Abnormal Psychology","credits":3,"umd_equivalent":"PSYC 353","status":"direct","gen_ed":"","notes":""},"PSYC207":{"title":"Social Psychology","credits":3,"umd_equivalent":"PSYC 221","status":"direct","gen_ed":"DSHS or DSSP","notes":""},"SOCL101":{"title":"Intro to Sociology","credits":3,"umd_equivalent":"SOCY 100","status":"direct","gen_ed":"DSHS","notes":""},"SOCL102":{"title":"Social Problems","credits":3,"umd_equivalent":"SOCY 105","status":"direct","gen_ed":"DSHS","notes":""},"SOCL141":{"title":"Racial/Cultural Minorities","credits":3,"umd_equivalent":"SOCY 241","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"THTR101":{"title":"Intro to Theatre","credits":3,"umd_equivalent":"THET 110","status":"direct","gen_ed":"DSHU","notes":""},"MNGT101":{"title":"Intro to Business","credits":3,"umd_equivalent":"BMGT 110","status":"direct","gen_ed":"","notes":""},"MNGT140":{"title":"Business Law I","credits":3,"umd_equivalent":"BMGT 380","status":"direct","gen_ed":"","notes":"For older terms only, check dates"},"ASTM101":{"title":"Astronomy","credits":3,"umd_equivalent":"ASTR 100","status":"direct","gen_ed":"DSNL","notes":"Requires ASTM102 lab for DSNL"},"ARTD110":{"title":"Two Dimensional Design","credits":3,"umd_equivalent":"ARTT 100","status":"direct","gen_ed":"DSSP","notes":""},"ARTD111":{"title":"Drawing I","credits":3,"umd_equivalent":"ARTT 110","status":"direct","gen_ed":"DSSP","notes":""},"ARTD105":{"title":"History of Art I","credits":3,"umd_equivalent":"ARTH 200","status":"direct","gen_ed":"DSHU, DVUP","notes":""},"ARTD106":{"title":"History of Art II","credits":3,"umd_equivalent":"ARTH 201","status":"direct","gen_ed":"DSHU, DVUP","notes":""},"MUSC101":{"title":"Music Fundamentals","credits":3,"umd_equivalent":"MUSC 140","status":"direct","gen_ed":"DSSP","notes":""},"MUSC102":{"title":"Music Appreciation","credits":3,"umd_equivalent":"MUSC 130","status":"direct","gen_ed":"DSHU","notes":""},"DANC135":{"title":"Dance Appreciation","credits":3,"umd_equivalent":"DANC 200","status":"direct","gen_ed":"DSSP, DVUP","notes":""},"COMM101":{"title":"Fundamentals of Speech","credits":3,"umd_equivalent":"COMM 107","status":"direct","gen_ed":"FSOC","notes":"Old course code. See CMNS101 for current."},"ECON111":{"title":"Personal Finance","credits":3,"umd_equivalent":"FMSC 123","status":"direct","gen_ed":"","notes":""},"CRJU101":{"title":"Intro to Criminal Justice","credits":3,"umd_equivalent":"CCJS 100","status":"direct","gen_ed":"DSHS","notes":""},"EDTR107":{"title":"Intro to Special Education","credits":3,"umd_equivalent":"EDSP 470","status":"direct","gen_ed":"DVUP","notes":""},"WMST101":{"title":"Intro to Women's Studies","credits":3,"umd_equivalent":"WMST 200","status":"direct","gen_ed":"DSHS, DVUP","notes":""}}},"MC":{"name":"Montgomery College","courses":{"CMSC203":{"title":"Computer Science I","credits":4,"umd_equivalent":"CMSC 131","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 131. Fall 2018+."},"CMSC204":{"title":"Computer Science II","credits":4,"umd_equivalent":"CMSC 132","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 132. Spring 2019+."},"CMSC207":{"title":"Discrete Structures","credits":3,"umd_equivalent":"CMSC 250","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 250."},"CMSC216":{"title":"Intro to Computer Systems","credits":4,"umd_equivalent":"CMSC 216","status":"direct","gen_ed":"","notes":"Direct equivalency to CMSC 216. Spring 2020+."},"CMSC206":{"title":"Python Programming","credits":3,"umd_equivalent":"INST 126","status":"direct","gen_ed":"","notes":"Fall 2019+."},"CMSC140":{"title":"Intro to Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"L1 elective only."},"CMSC141":{"title":"Intermediate Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"L1 elective only."},"CMSC201":{"title":"Java Programming Language","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"L1 elective only."},"CMSC100":{"title":"Fund Computer Programming","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"","notes":"L1 elective only."},"MATH181":{"title":"Calculus I","credits":4,"umd_equivalent":"MATH 140","status":"direct","gen_ed":"FSAR, FSMA","notes":""},"MATH182":{"title":"Calculus II","credits":4,"umd_equivalent":"MATH 141","status":"direct","gen_ed":"FSMA","notes":""},"MATH280":{"title":"Multivariable Calculus","credits":4,"umd_equivalent":"MATH 241","status":"direct","gen_ed":"","notes":""},"MATH282":{"title":"Differential Equations","credits":3,"umd_equivalent":"MATH 246","status":"direct","gen_ed":"","notes":""},"MATH284":{"title":"Linear Algebra","credits":3,"umd_equivalent":"MATH 240","status":"direct","gen_ed":"","notes":""},"MATH117":{"title":"Elements of Statistics","credits":3,"umd_equivalent":"STAT 100","status":"direct","gen_ed":"FSAR, FSMA","notes":""},"MATH165":{"title":"Precalculus","credits":4,"umd_equivalent":"MATH 115","status":"direct","gen_ed":"FSMA","notes":""},"MATH150":{"title":"Elem Applied Calculus I","credits":3,"umd_equivalent":"MATH 120","status":"direct","gen_ed":"FSAR, FSMA","notes":"Business calculus. Spring 2017+."},"MATH120":{"title":"Survey of College Math","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"FSMA","notes":"Satisfies FSMA gen ed."},"MATH130":{"title":"Elem Math I: Number Systems","credits":3,"umd_equivalent":"MATH 212","status":"direct","gen_ed":"FSMA","notes":"For education majors."},"MATH131":{"title":"Elem Math II: Geom & Alg","credits":3,"umd_equivalent":"MATH 213","status":"direct","gen_ed":"","notes":""},"MATH207":{"title":"Intro to Discrete Structures","credits":3,"umd_equivalent":"CMSC 250","status":"direct","gen_ed":"","notes":"Fall 2018+. Same as CMSC207."},"ENES100":{"title":"Intro Engineering Design","credits":3,"umd_equivalent":"ENES 100","status":"direct","gen_ed":"DSSP","notes":""},"ENES102":{"title":"Statics","credits":3,"umd_equivalent":"ENES 102","status":"direct","gen_ed":"","notes":""},"ENES220":{"title":"Mechanics of Materials","credits":3,"umd_equivalent":"ENES 220","status":"direct","gen_ed":"","notes":""},"ENES221":{"title":"Dynamics","credits":3,"umd_equivalent":"ENES 221","status":"direct","gen_ed":"","notes":""},"ENES232":{"title":"Thermodynamics","credits":3,"umd_equivalent":"ENES 232","status":"direct","gen_ed":"","notes":""},"ENEE140":{"title":"Intro Prog Concepts Engr","credits":3,"umd_equivalent":"ENEE 140","status":"direct","gen_ed":"","notes":""},"ENEE244":{"title":"Digital Logic Design","credits":3,"umd_equivalent":"ENEE 244","status":"direct","gen_ed":"","notes":""},"ENEE207":{"title":"Electric Circuits","credits":3,"umd_equivalent":"ENEE 205","status":"direct","gen_ed":"","notes":""},"ENGL102":{"title":"Critical Reading Writing Research","credits":3,"umd_equivalent":"ENGL 101","status":"direct","gen_ed":"FSAW","notes":"Fall 2015+. Maps to ENGL 101/FSAW."},"ENGL103":{"title":"Critical Reading Writing Res Workshop","credits":3,"umd_equivalent":null,"status":"elective","gen_ed":"FSAW","notes":"Satisfies FSAW gen ed."},"ENGL110":{"title":"Principles English Grammar","credits":3,"umd_equivalent":"ENGL 281","status":"direct","gen_ed":"","notes":""},"ENGL201":{"title":"Intro World Literature I","credits":3,"umd_equivalent":"ENGL 201","status":"direct","gen_ed":"DSHU, DVUP","notes":""},"ENGL202":{"title":"Intro World Literature II","credits":3,"umd_equivalent":"ENGL 202","status":"direct","gen_ed":"DSHU, DVUP","notes":""},"ENGL211":{"title":"Survey American Lit I","credits":3,"umd_equivalent":"ENGL 221","status":"direct","gen_ed":"","notes":""},"ENGL212":{"title":"Survey American Lit II","credits":3,"umd_equivalent":"ENGL 222","status":"direct","gen_ed":"DSHU","notes":""},"ENGL213":{"title":"Survey British Lit I","credits":3,"umd_equivalent":"ENGL 211","status":"direct","gen_ed":"DSHU","notes":""},"ENGL214":{"title":"Survey British Lit II","credits":3,"umd_equivalent":"ENGL 212","status":"direct","gen_ed":"DSHU","notes":""},"BIOL150":{"title":"Principles of Biology I","credits":4,"umd_equivalent":"BSCI 170","status":"direct","gen_ed":"DSNL or DSNS","notes":"Fall 2016+. Also maps to BSCI 171."},"BIOL151":{"title":"Principles of Biology II","credits":4,"umd_equivalent":"BSCI 160","status":"direct","gen_ed":"DSNL or DSNS","notes":"Fall 2016+."},"BIOL210":{"title":"Microbiology","credits":4,"umd_equivalent":"BSCI 223","status":"direct","gen_ed":"DSNL, SCIS","notes":""},"BIOL212":{"title":"Human Anat & Phys I","credits":4,"umd_equivalent":"BSCI 201","status":"direct","gen_ed":"DSNL","notes":""},"BIOL213":{"title":"Human Anat & Phys II","credits":4,"umd_equivalent":"BSCI 202","status":"direct","gen_ed":"DSNL","notes":""},"BIOL222":{"title":"Principles of Genetics","credits":4,"umd_equivalent":"BSCI 222","status":"direct","gen_ed":"","notes":""},"BIOL226":{"title":"Nutrition","credits":3,"umd_equivalent":"NFSC 100","status":"direct","gen_ed":"DSNS","notes":""},"CHEM131":{"title":"Principles Chemistry I","credits":4,"umd_equivalent":"CHEM 131","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also maps to CHEM 132."},"CHEM132":{"title":"Principles Chemistry II","credits":4,"umd_equivalent":"CHEM 271","status":"direct","gen_ed":"DSNL","notes":""},"CHEM135":{"title":"General Chemistry Engrs","credits":4,"umd_equivalent":"CHEM 135","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also maps to CHEM 136."},"CHEM203":{"title":"Organic Chemistry I","credits":4,"umd_equivalent":"CHEM 231","status":"direct","gen_ed":"","notes":"Also maps to CHEM 232."},"CHEM204":{"title":"Organic Chemistry II","credits":4,"umd_equivalent":"CHEM 241","status":"direct","gen_ed":"","notes":"Also maps to CHEM 242."},"PHYS161":{"title":"Gen Physics I: Mech & Heat","credits":4,"umd_equivalent":"PHYS 161","status":"direct","gen_ed":"DSNL or DSNS","notes":"Calculus-based."},"PHYS262":{"title":"Electricity and Magnetism","credits":4,"umd_equivalent":"PHYS 260","status":"direct","gen_ed":"DSNL","notes":"Also maps to PHYS 261."},"PHYS263":{"title":"Waves Optics Mod Physics","credits":4,"umd_equivalent":"PHYS 270","status":"direct","gen_ed":"DSNL","notes":"Also maps to PHYS 271."},"PHYS203":{"title":"General Physics I (non-engr)","credits":4,"umd_equivalent":"PHYS 121","status":"direct","gen_ed":"DSNL","notes":"Algebra-based."},"PHYS204":{"title":"General Physics II (non-engr)","credits":4,"umd_equivalent":"PHYS 122","status":"direct","gen_ed":"DSNL","notes":"Algebra-based."},"ECON201":{"title":"Principles Economics (Macro)","credits":3,"umd_equivalent":"ECON 201","status":"direct","gen_ed":"DSHS","notes":""},"ECON202":{"title":"Principles Economics II (Micro)","credits":3,"umd_equivalent":"ECON 200","status":"direct","gen_ed":"DSHS","notes":""},"PSYC100":{"title":"General Psychology","credits":3,"umd_equivalent":"PSYC 100","status":"direct","gen_ed":"DSHS or DSNS","notes":"Fall 2023+. Previously PSYC102."},"HIST200":{"title":"US History Colonial-1865","credits":3,"umd_equivalent":"HIST 200","status":"direct","gen_ed":"DSHS or DSHU","notes":""},"HIST201":{"title":"US History 1865-Present","credits":3,"umd_equivalent":"HIST 201","status":"direct","gen_ed":"DSHS or DSHU, DVUP","notes":""},"POLI101":{"title":"American Government","credits":3,"umd_equivalent":"GVPT 170","status":"direct","gen_ed":"DSHS","notes":""},"POLI203":{"title":"International Relations","credits":3,"umd_equivalent":"GVPT 200","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"POLI211":{"title":"Comparative Politics/Government","credits":3,"umd_equivalent":"GVPT 280","status":"direct","gen_ed":"DSHS, DVUP","notes":""},"SOCY100":{"title":"Intro to Sociology","credits":3,"umd_equivalent":"SOCY 100","status":"direct","gen_ed":"DSHS","notes":""},"SOCY105":{"title":"Social Problems & Issues","credits":3,"umd_equivalent":"SOCY 105","status":"direct","gen_ed":"DSHS","notes":""},"COMM108":{"title":"Found Human Communication","credits":3,"umd_equivalent":"COMM 107","status":"direct","gen_ed":"FSOC","notes":"Spring 2019+."},"PHIL101":{"title":"Intro Philosophy","credits":3,"umd_equivalent":"PHIL 100","status":"direct","gen_ed":"DSHU","notes":""},"PHIL140":{"title":"Intro Study of Ethics","credits":3,"umd_equivalent":"PHIL 140","status":"direct","gen_ed":"DSHU","notes":""},"PHIL190":{"title":"Elem Logic & Semantics","credits":3,"umd_equivalent":"PHIL 170","status":"direct","gen_ed":"FSAR","notes":""},"BSAD101":{"title":"Intro to Business","credits":3,"umd_equivalent":"BMGT 110","status":"direct","gen_ed":"","notes":""},"BSAD210":{"title":"Statistics for Bus & Econ","credits":3,"umd_equivalent":"BMGT 230","status":"direct","gen_ed":"FSAR","notes":""},"GEOL101":{"title":"Physical Geology","credits":4,"umd_equivalent":"GEOL 100","status":"direct","gen_ed":"DSNL or DSNS","notes":"Also maps to GEOL 110."},"ASTR101":{"title":"Intro Astronomy","credits":3,"umd_equivalent":"ASTR 101","status":"direct","gen_ed":"DSNL","notes":""}}}}};

const CS_REQUIREMENTS = [
  {code:"CMSC 131",title:"Object-Oriented Programming I",credits:4},
  {code:"CMSC 132",title:"Object-Oriented Programming II",credits:4},
  {code:"CMSC 216",title:"Intro to Computer Systems",credits:4},
  {code:"CMSC 250",title:"Discrete Structures",credits:4},
  {code:"CMSC 330",title:"Organization of Programming Languages",credits:3},
  {code:"CMSC 351",title:"Algorithms",credits:3},
  {code:"MATH 140",title:"Calculus I",credits:4},
  {code:"MATH 141",title:"Calculus II",credits:4},
  {code:"MATH 240",title:"Linear Algebra",credits:4},
  {code:"MATH 241",title:"Calculus III",credits:4},
  {code:"STAT 400",title:"Probability & Statistics I",credits:3},
  {code:"ENGL 101",title:"Academic Writing",credits:3},
  {code:"COMM 107",title:"Oral Communication",credits:3},
];

const StatusBadge = ({status}) => {
  const config = {
    direct: {bg:"#dcfce7",text:"#166534",border:"#86efac",label:"Direct Transfer"},
    elective: {bg:"#fef9c3",text:"#854d0e",border:"#fde047",label:"Elective Credit"},
    not_accepted: {bg:"#fee2e2",text:"#991b1b",border:"#fca5a5",label:"Not Accepted"},
  };
  const c = config[status] || config.elective;
  return (
    <span style={{
      padding:"3px 10px",fontSize:12,fontWeight:600,borderRadius:20,
      backgroundColor:c.bg,color:c.text,border:`1px solid ${c.border}`,
      display:"inline-block",letterSpacing:"0.02em"
    }}>{c.label}</span>
  );
};

const ProgressBar = ({value, max, color="#e11d48"}) => {
  const pct = max > 0 ? Math.round((value/max)*100) : 0;
  return (
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <div style={{flex:1,height:10,backgroundColor:"#f1f5f9",borderRadius:8,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,height:"100%",backgroundColor:color,borderRadius:8,transition:"width 0.6s ease"}}/>
      </div>
      <span style={{fontSize:13,fontWeight:700,color:"#334155",minWidth:40,textAlign:"right"}}>{pct}%</span>
    </div>
  );
};

export default function TransferCompass() {
  const [step, setStep] = useState(0);
  const [school, setSchool] = useState("");
  const [selected, setSelected] = useState([]);
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [aiInput, setAiInput] = useState({name:"",description:"",school:""});
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  const schoolList = Object.entries(TRANSFER_DATA.schools).map(([code,s])=>({code,name:s.name,count:Object.keys(s.courses).length}));
  const courses = school ? TRANSFER_DATA.schools[school]?.courses || {} : {};

  const filteredCourses = Object.entries(courses).filter(([id, c]) => {
    const matchesSearch = !search || id.toLowerCase().includes(search.toLowerCase()) || c.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus === "all" || c.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleCourse = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(c=>c!==id) : [...prev,id]);
  };

  const evaluate = () => {
    const schoolData = TRANSFER_DATA.schools[school];
    if (!schoolData) return;
    const evaluated = selected.map(id => {
      const c = schoolData.courses[id];
      return {...c, course_id: id};
    });
    const satisfied = evaluated.filter(c=>c.status==="direct"&&c.umd_equivalent).map(c=>c.umd_equivalent);
    const missing = CS_REQUIREMENTS.filter(r=>!satisfied.includes(r.code));
    const directCount = evaluated.filter(c=>c.status==="direct").length;
    const electiveCount = evaluated.filter(c=>c.status==="elective").length;
    const totalCredits = evaluated.reduce((s,c)=>s+c.credits,0);
    setResults({
      courses: evaluated, satisfied, missing,
      summary: { total: evaluated.length, direct: directCount, elective: electiveCount,
        credits: totalCredits, satisfiedCount: satisfied.length, missingCount: missing.length }
    });
    setStep(2);
  };

  const mockAiPredict = () => {
    setAiLoading(true);
    setTimeout(() => {
      const desc = aiInput.description.toLowerCase();
      let match = {equivalent_course:"L1",equivalent_title:"Lower-level Elective",confidence:"Low",reason:"Could not find a strong match based on the description provided."};
      if (desc.includes("data structure") || desc.includes("object-oriented") || desc.includes("linked list"))
        match = {equivalent_course:"CMSC 132",equivalent_title:"Object-Oriented Programming II",confidence:"High",reason:"Course covers data structures, OOP, and algorithm fundamentals similar to CMSC 132."};
      else if (desc.includes("programming") || desc.includes("java") || desc.includes("python") || desc.includes("intro to comp"))
        match = {equivalent_course:"CMSC 131",equivalent_title:"Object-Oriented Programming I",confidence:"Medium",reason:"Introductory programming course covering fundamentals similar to CMSC 131."};
      else if (desc.includes("calculus") || desc.includes("derivative") || desc.includes("integral"))
        match = desc.includes("ii") || desc.includes("2") || desc.includes("series")
          ? {equivalent_course:"MATH 141",equivalent_title:"Calculus II",confidence:"High",reason:"Covers integration techniques and series similar to MATH 141."}
          : {equivalent_course:"MATH 140",equivalent_title:"Calculus I",confidence:"High",reason:"Covers limits, derivatives, and basic integration similar to MATH 140."};
      else if (desc.includes("linear algebra") || desc.includes("matrix") || desc.includes("vector space"))
        match = {equivalent_course:"MATH 240",equivalent_title:"Linear Algebra",confidence:"High",reason:"Covers matrices, vector spaces, and linear transformations similar to MATH 240."};
      else if (desc.includes("discrete") || desc.includes("logic") || desc.includes("proof") || desc.includes("combinatorics"))
        match = {equivalent_course:"CMSC 250",equivalent_title:"Discrete Structures",confidence:"Medium",reason:"Covers logic, proofs, and combinatorics similar to CMSC 250."};
      else if (desc.includes("writing") || desc.includes("composition") || desc.includes("essay"))
        match = {equivalent_course:"ENGL 101",equivalent_title:"Academic Writing",confidence:"High",reason:"English composition course similar to ENGL 101."};
      else if (desc.includes("speech") || desc.includes("communication") || desc.includes("public speaking"))
        match = {equivalent_course:"COMM 107",equivalent_title:"Oral Communication",confidence:"High",reason:"Speech/communication course similar to COMM 107."};
      else if (desc.includes("physics") || desc.includes("mechanics") || desc.includes("thermodynamics"))
        match = {equivalent_course:"PHYS 161",equivalent_title:"General Physics I",confidence:"Medium",reason:"Introductory physics covering mechanics similar to PHYS 161."};
      else if (desc.includes("statistic") || desc.includes("probability"))
        match = {equivalent_course:"STAT 400",equivalent_title:"Probability & Statistics I",confidence:"Medium",reason:"Covers probability and statistics similar to STAT 400."};
      setAiResult(match);
      setAiLoading(false);
    }, 1500);
  };

  const pageStyle = {minHeight:"100vh",fontFamily:"'Segoe UI','Helvetica Neue',sans-serif",background:"linear-gradient(135deg,#fdf2f8 0%,#f8fafc 50%,#ecfdf5 100%)"};
  const containerStyle = {maxWidth:900,margin:"0 auto",padding:"30px 20px"};
  const cardStyle = {background:"#fff",borderRadius:16,padding:"28px 32px",boxShadow:"0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,border:"1px solid #f1f5f9"};
  const btnPrimary = {padding:"12px 32px",backgroundColor:"#e11d48",color:"#fff",border:"none",borderRadius:10,fontSize:15,fontWeight:700,cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.02em"};
  const btnOutline = {padding:"10px 24px",backgroundColor:"transparent",color:"#e11d48",border:"2px solid #e11d48",borderRadius:10,fontSize:14,fontWeight:600,cursor:"pointer"};

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={{textAlign:"center",marginBottom:36}}>
          <div style={{fontSize:14,fontWeight:700,color:"#e11d48",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:6}}>
            \ud83e\udded Transfer Compass
          </div>
          <h1 style={{fontSize:32,fontWeight:800,color:"#0f172a",margin:"0 0 8px",lineHeight:1.2}}>
            Know exactly where you stand
          </h1>
          <p style={{fontSize:16,color:"#64748b",margin:0,maxWidth:500,marginInline:"auto"}}>
            See how your community college courses transfer to UMD \u2014 instantly
          </p>
        </div>

        {step === 0 && (
          <div style={cardStyle}>
            <h2 style={{fontSize:18,fontWeight:700,color:"#1e293b",margin:"0 0 16px"}}>Select your school</h2>
            <div style={{display:"grid",gap:10}}>
              {schoolList.map(s=>(
                <button key={s.code} onClick={()=>{setSchool(s.code);setSelected([]);setSearch("");setStep(1);}}
                  style={{padding:"16px 20px",border:"2px solid #e2e8f0",borderRadius:12,background:"#fff",cursor:"pointer",
                    textAlign:"left",fontSize:15,fontWeight:600,color:"#1e293b",transition:"all 0.15s",display:"flex",justifyContent:"space-between",alignItems:"center"}}
                  onMouseOver={e=>e.currentTarget.style.borderColor="#fda4af"}
                  onMouseOut={e=>e.currentTarget.style.borderColor="#e2e8f0"}>
                  <div><span style={{fontWeight:800,color:"#e11d48",marginRight:10}}>{s.code}</span>{s.name}</div>
                  <span style={{fontSize:12,color:"#94a3b8",fontWeight:600}}>{s.count} courses</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <button onClick={()=>{setStep(0);setSelected([]);}} style={{...btnOutline,padding:"8px 16px",fontSize:13}}>\u2190 Back</button>
              <span style={{fontSize:14,color:"#64748b",fontWeight:600}}>{selected.length} course{selected.length!==1?"s":""} selected</span>
            </div>
            <div style={cardStyle}>
              <h2 style={{fontSize:18,fontWeight:700,color:"#1e293b",margin:"0 0 4px"}}>{TRANSFER_DATA.schools[school]?.name}</h2>
              <p style={{fontSize:13,color:"#94a3b8",margin:"0 0 12px"}}>Select the courses you've taken or plan to take</p>
              <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search courses..."
                  style={{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:"2px solid #e2e8f0",fontSize:14,outline:"none"}}/>
                <select value={filterStatus} onChange={e=>setFilterStatus(e.target.value)}
                  style={{padding:"10px 14px",borderRadius:8,border:"2px solid #e2e8f0",fontSize:13,fontWeight:600,color:"#475569",cursor:"pointer"}}>
                  <option value="all">All</option>
                  <option value="direct">Direct only</option>
                  <option value="elective">Elective only</option>
                </select>
              </div>
              <div style={{fontSize:12,color:"#94a3b8",marginBottom:8}}>Showing {filteredCourses.length} of {Object.keys(courses).length} courses</div>
              <div style={{display:"grid",gap:6,maxHeight:500,overflowY:"auto"}}>
                {filteredCourses.map(([id,c])=>{
                  const isSelected = selected.includes(id);
                  return (
                    <div key={id} onClick={()=>toggleCourse(id)}
                      style={{padding:"12px 16px",borderRadius:10,cursor:"pointer",
                        border:isSelected?"2px solid #e11d48":"2px solid #e2e8f0",
                        background:isSelected?"#fff1f2":"#fff",
                        display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.15s"}}>
                      <div style={{minWidth:0,flex:1}}>
                        <span style={{fontWeight:700,color:"#1e293b",fontSize:13}}>{id}</span>
                        <span style={{color:"#64748b",fontSize:12,marginLeft:8}}>{c.title}</span>
                        {c.umd_equivalent && <span style={{color:"#22c55e",fontSize:11,marginLeft:6,fontWeight:600}}>\u2192 {c.umd_equivalent}</span>}
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                        <span style={{fontSize:11,color:"#94a3b8"}}>{c.credits}cr</span>
                        <StatusBadge status={c.status}/>
                        <div style={{width:20,height:20,borderRadius:5,border:isSelected?"none":"2px solid #cbd5e1",
                          backgroundColor:isSelected?"#e11d48":"transparent",display:"flex",alignItems:"center",justifyContent:"center",
                          color:"#fff",fontSize:13,fontWeight:700}}>{isSelected?"\u2713":""}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {selected.length > 0 && (
                <div style={{marginTop:20,textAlign:"right"}}>
                  <button onClick={evaluate} style={btnPrimary}>Evaluate Transfer \u2192</button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && results && (
          <div>
            <button onClick={()=>setStep(1)} style={{...btnOutline,padding:"8px 16px",fontSize:13,marginBottom:16}}>\u2190 Edit Courses</button>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
              {[
                {label:"Total Credits",value:results.summary.credits,color:"#3b82f6"},
                {label:"Direct Transfers",value:results.summary.direct,color:"#22c55e"},
                {label:"Elective Credits",value:results.summary.elective,color:"#eab308"},
                {label:"Requirements Met",value:`${results.summary.satisfiedCount}/${CS_REQUIREMENTS.length}`,color:"#e11d48"},
              ].map((card,i)=>(
                <div key={i} style={{...cardStyle,textAlign:"center",padding:"20px 12px",marginBottom:0}}>
                  <div style={{fontSize:28,fontWeight:800,color:card.color}}>{card.value}</div>
                  <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginTop:4}}>{card.label}</div>
                </div>
              ))}
            </div>
            <div style={cardStyle}>
              <h3 style={{fontSize:16,fontWeight:700,color:"#1e293b",margin:"0 0 12px"}}>CS Major Progress</h3>
              <ProgressBar value={results.summary.satisfiedCount} max={CS_REQUIREMENTS.length} color="#e11d48"/>
            </div>
            <div style={cardStyle}>
              <h3 style={{fontSize:16,fontWeight:700,color:"#1e293b",margin:"0 0 16px"}}>Your Courses</h3>
              {results.courses.map((c,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                  padding:"12px 0",borderBottom:i<results.courses.length-1?"1px solid #f1f5f9":"none"}}>
                  <div>
                    <span style={{fontWeight:700,fontSize:14,color:"#1e293b"}}>{c.course_id}</span>
                    <span style={{color:"#64748b",fontSize:13,marginLeft:8}}>{c.title}</span>
                    {c.umd_equivalent && <span style={{color:"#22c55e",fontSize:13,marginLeft:8,fontWeight:600}}>\u2192 {c.umd_equivalent}</span>}
                    {c.gen_ed && <span style={{color:"#7c3aed",fontSize:11,marginLeft:6}}>({c.gen_ed})</span>}
                  </div>
                  <StatusBadge status={c.status}/>
                </div>
              ))}
            </div>
            {results.missing.length > 0 && (
              <div style={{...cardStyle,borderColor:"#fecdd3",background:"#fff5f5"}}>
                <h3 style={{fontSize:16,fontWeight:700,color:"#991b1b",margin:"0 0 12px"}}>
                  Still Needed for CS Major ({results.missing.length} courses)
                </h3>
                <div style={{display:"grid",gap:8}}>
                  {results.missing.map((r,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                      padding:"10px 14px",background:"#fff",borderRadius:8,border:"1px solid #fecdd3"}}>
                      <div>
                        <span style={{fontWeight:700,fontSize:14,color:"#991b1b"}}>{r.code}</span>
                        <span style={{color:"#64748b",fontSize:13,marginLeft:8}}>{r.title}</span>
                      </div>
                      <span style={{fontSize:12,color:"#94a3b8"}}>{r.credits} cr</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{...cardStyle,background:"linear-gradient(135deg,#fdf4ff,#faf5ff)",borderColor:"#e9d5ff"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                <span style={{fontSize:20}}>\ud83e\udd16</span>
                <h3 style={{fontSize:16,fontWeight:700,color:"#6b21a8",margin:0}}>Smart Equivalency Predictor</h3>
              </div>
              <p style={{fontSize:13,color:"#7c3aed",margin:"0 0 16px"}}>
                Have a course not in our database? Paste its description and we'll predict the closest UMD match.
              </p>
              <div style={{display:"grid",gap:10}}>
                <input value={aiInput.name} onChange={e=>setAiInput(p=>({...p,name:e.target.value}))}
                  placeholder="Course name (e.g. Data Structures and Algorithms)"
                  style={{padding:"12px 16px",borderRadius:10,border:"2px solid #e9d5ff",fontSize:14,outline:"none"}}/>
                <input value={aiInput.school} onChange={e=>setAiInput(p=>({...p,school:e.target.value}))}
                  placeholder="School name (e.g. Random State University)"
                  style={{padding:"12px 16px",borderRadius:10,border:"2px solid #e9d5ff",fontSize:14,outline:"none"}}/>
                <textarea value={aiInput.description} onChange={e=>setAiInput(p=>({...p,description:e.target.value}))}
                  placeholder="Paste the course description here..."
                  rows={4}
                  style={{padding:"12px 16px",borderRadius:10,border:"2px solid #e9d5ff",fontSize:14,outline:"none",resize:"vertical",fontFamily:"inherit"}}/>
                <button onClick={mockAiPredict} disabled={!aiInput.name||!aiInput.description||aiLoading}
                  style={{...btnPrimary,backgroundColor:(!aiInput.name||!aiInput.description)?"#d4d4d8":"#7c3aed",opacity:aiLoading?0.7:1}}>
                  {aiLoading?"Analyzing...":"Predict Equivalency"}
                </button>
              </div>
              {aiResult && (
                <div style={{marginTop:16,padding:"16px 20px",background:"#fff",borderRadius:12,border:"2px solid #c084fc"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div>
                      <span style={{fontWeight:800,fontSize:16,color:"#6b21a8"}}>{aiResult.equivalent_course}</span>
                      <span style={{color:"#64748b",fontSize:14,marginLeft:8}}>{aiResult.equivalent_title}</span>
                    </div>
                    <span style={{padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:700,
                      backgroundColor:aiResult.confidence==="High"?"#dcfce7":aiResult.confidence==="Medium"?"#fef9c3":"#fee2e2",
                      color:aiResult.confidence==="High"?"#166534":aiResult.confidence==="Medium"?"#854d0e":"#991b1b"}}>
                      {aiResult.confidence} Confidence
                    </span>
                  </div>
                  <p style={{fontSize:13,color:"#64748b",margin:"8px 0 0"}}>{aiResult.reason}</p>
                  <p style={{fontSize:11,color:"#a78bfa",margin:"8px 0 0",fontStyle:"italic"}}>
                    \u26a0\ufe0f AI-generated estimate \u2014 not official transfer credit
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
