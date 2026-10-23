# Portfolio Website — Implementation & QA Report

## Updated files
- `index.html`: more specific introduction, engineering breakdown, stronger featured work, NJIT research explanation, and a diagram caption.
- `work.html`: deeper RiskIQ and Virtual Asset Management engineering descriptions; contextual explanations of four smaller projects; captions; reduced duplicate imagery; original project anchors retained.
- `experience.html`: fuller NJIT research process, limitations on interpreting sentiment analyses, one research diagram, and verified Dunkin’ experience.
- `about.html`: repaired page-level H1, reorganized concise stack descriptions, and added technical learning narrative. Certification status remains differentiated.
- `contact.html`: converted direct contact info to links, updated collaboration explanations, and preserved the email, GitHub, LinkedIn, location and resume.
- `styles.css`: removed appended duplicate refinement section, introduced shared section/spacing system, adapted typography/grids for narrow displays, safe SVG scaling, visible focus outlines and improved captions.
- `script.js`: improved mobile menu Escape/outside-click closing; preserved scroll nav and progressive-enhancement reveal behavior.
- `assets/*.svg`: original illustration assets were not supplied. Four clearly labeled interim architecture diagrams have been generated at the expected paths to avoid broken images; **replace these files with the original SVGs when available**.
- `resume.pdf`: supplied PDF copied unchanged.

## Rubric acceptance assessment
| Requirement | Result |
|---|---|
| Proposal alignment | Satisfied by source content |
| Informative content on all five pages | Satisfied by source review |
| Clear communication and structure | Improved; final editorial review recommended |
| Attribution | Firsthand portfolio/resume material used; public RiskIQ repository linked; original diagram credits cannot be verified until assets arrive |
| Spelling, factual and navigation error target | Source checks pass; independent fact verification not completed |
| Multimedia captions / no blank frames | Satisfied using interim explanatory diagrams |
| Page completeness | Satisfied by source inspection |
| Public website available | Not yet verified; files must be deployed |

## Tests performed
- All five HTML files parsed successfully using BeautifulSoup.
- Each page has exactly one H1.
- Relative links and referenced local assets exist in the deliverable.
- JavaScript syntax checked with `node --check` successfully.
- Internal cross-page and resume links validated against packaged filenames.
- Automated Chromium browser navigation was attempted using both `file://` and local HTTP but blocked by execution-environment administrator network/security restrictions. **No visual viewport tests were completed** at 1440, 1280, 1024, 768, 430, 390 or 320 pixels. Mobile menu behavior was reviewed in code, not tested in a browser.
- Live external website, external link and GitHub Pages availability were not checked.
- WCAG audit with a full accessibility scanner and standards-grade HTML validator were not performed.

## Deployment
1. Extract the package and replace the current repository’s HTML, CSS, JS, resume and assets with these files (or replace the interim SVGs with your own originals).
2. Commit and push to your repository’s GitHub Pages publishing branch.
3. Confirm `https://krishil-patel.github.io/portfolio-website/` renders. Open Work, Experience, About, Contact and the resume link.
4. Check the site on desktop and mobile, specifically narrow typography and diagrams, before submitting.

## Known limitations
The original `assets/` illustrations have not been provided; substitute explanatory architecture visuals are included. Browser viewport verification, public deployment verification, external citations/licenses for the missing original assets and validation of repositories against live source have not been completed. This is a best-effort deliverable pending those assets and a final visual check.
