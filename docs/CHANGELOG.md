# Change log

## 1.2.0 — October 31, 2026

Applied the next set of precise UCCS Search interface revisions to the existing private Site.

### Interface and navigation

- Reduced the university masthead, linked its logo to `https://www.uccs.edu/`, and removed About this project.
- Changed the linked secondary-header label to `RESOURCES.search.uccs.edu`, pointing to `https://search.uccs.edu/`. The actual hosted address is unchanged; no UCCS domain was registered.
- Changed the browser title to “UCCS Resource Locator” and black-filled/outlined the separate mountain favicon on CU Gold.
- Removed the small prototype notice and the lower About resource information section. The exact independent student-project statement is retained at the bottom of the replacement footer.
- Kept the introduction to one line on desktop, with normal wrapping on small screens, and added “Advance your career” to Browse using the existing career category.
- Moved categories and the Dean of Students starting point to the right, with a right-entering category drawer on mobile. Category icons use CU Gold fills/backgrounds and white outlines; detail icons remain outlined.
- Changed the results heading to “Resource Search Results For:” and the current keyword/category. No Web/Image tabs were added.
- Preserved all existing filters, sorting, matching counts, full details, bookmarks, provider links, and phone/email/maps actions.

### Results and details

- Replaced Show more with real numbered pages, Previous/Next, a current-page marker, and page state in the URL. Twelve results per page expose all 178 records, with ten on the last unfiltered page.
- Displayed actual client-side search/filter duration beside the count. This is local computation time, not Google timing or a network-load metric.
- Added a separate “Search [keyword] on Google” link. Google Programmable Search is not connected and the directory continues to search its own JSON.
- Added labeled status dots and a visible key for existing checked no-cost information, online modes, and checked 24/7-hours text. Hollow dots direct the reader to details. No ratings or live availability are invented.
- Preserved resource-specific verification notes, including the PPLD hotspot three-week-versus-three-month caveat and the “Some details checked against official sources” heading where applicable.
- Removed original document/source panels and the repeated generic verification sentence from the student-facing renderer. Underlying source evidence and notes remain unchanged in the database.
- The unfinished “When clicking the x for” feedback did not define a new action; existing close/Escape behavior is retained.

### Footer and palette

- Replaced the previous footer with the supplied search-page arrangement: eleven university-information links, unmodified UCCS and CU system marks, centered local-guide/source downloads, and the student-project statement in the copyright position.
- Added the Need Support accessibility strip linked to `sheath3@uccs.edu`.
- Used UCCS's current main-site footer destinations to correct mismatched Mission, safety-report, and Title IX links found in the search-page application bundle.
- Restricted interface colors to the official color-page palette and its listed variations: CU Black/Gold, grays/white, and link blue, with restrained tints. Provider URL text is neutral rather than green.

### Project/setup files and validation

Updated `dist/index.html`, `dist/app.js`, `dist/styles.css`, `dist/favicon.svg`, official asset files/provenance, `package.json` (1.2.0), README, architecture/local-use/testing/integration guides, change log, packaging, and interface checks. Added `AGENTS.md` to persist the requirement that future AI updates refresh setup/project files and the source package. The packaging script now includes that instruction file.

All six resource/research data files remain byte-for-byte unchanged, including all 178 entries and 13 category definitions. The 24,192 existing search/filter/saved-set comparisons still match the original behavior. Additional checks cover numbered-page coverage, status semantics, caveat preservation, title/header/support/footer hooks, official asset bytes, and the allowed palette. Browser/device QA remains unverified because the managed preview service is unavailable.

## 1.1.0 — October 31, 2026

The Student Resource Locator now follows the supplied UCCS search-page reference more closely. This is a targeted presentation and documentation update to the existing project.

### Interface changes

- Replaced the illustrated promotional hero with a black university-style masthead, an unchanged official CU/UCCS header asset, and a dark-gray page-title/search band.
- Kept the independent-prototype statement visible beneath the search band and in project information/footer text.
- Replaced the rounded multi-column resource cards with a single vertical search-results list on white.
- Made each resource name a prominent blue link that opens the existing detail dialog. Its official/provider URL, when available, appears separately underneath in green and links externally.
- Retained concise descriptions and category/location/cost/source information, clear result spacing, save actions, counts, sort controls, filters, and the complete detail view.
- Replaced decorative category cards with compact text links. The original category labels/IDs and full category sidebar remain unchanged.
- Retained the mobile category drawer and adapted the header, filters, result rows, dialogs, and print rules for the new presentation.
- Added a visible Save/Saved label and kept it synchronized with existing bookmark state. Existing bookmark IDs and browser-storage key remain unchanged. Detail review dates are rendered from the existing record date, so later approved date edits can be displayed consistently.

### Files changed or added

| Files | Change |
| --- | --- |
| `dist/index.html` | Institutional page structure, search band, compact category links, guide links, title and project information |
| `dist/styles.css` | Replacement institutional stylesheet and responsive/print rules |
| `dist/app.js` | Search-result markup, provider URL display helper, result headings, link handling, and Save/Saved presentation; existing search/filter functions retained |
| `dist/assets/uccs-cu-lockup-reverse.svg` | Unmodified official header asset added locally |
| `dist/assets/README.md` | Asset provenance and usage context |
| `package.json` | Version 1.1.0 and optional test shortcuts; no runtime dependencies added |
| `scripts/serve.py` | Cross-platform local static-server helper |
| `scripts/behavior-cases.mjs`, `scripts/check-interface.mjs` | Behavior comparison and interface/asset checks |
| `scripts/check-preservation.mjs` | Byte-for-byte data check |
| `scripts/package-source.py` | Complete portable archive, including docs and configuration, and refreshed live guide copies |
| Root `README.md`, `docs/` | Beginner instructions, architecture, preservation evidence, testing, change tracking, and integration notes |
| `dist/README.md`, `dist/guides/`, `dist/downloads/uccs-resource-hub-source.zip` | Generated copies/download refreshed from the editable project |

### Preserved

All 178 complete resource entries, all 13 category definitions, category IDs/labels/order, tags, descriptions, contacts, links, locations, eligibility, source notes, and all other data fields. The public JSON and five research JSON files are byte-for-byte unchanged. The data builder, original directory-check script, existing favicon, and existing hosting identity/access are unchanged.

Keyword search, category/location/cost/access/official-link filtering, recommended/alphabetical ordering, clearing filters, pagination, resource details, saved resources, phone/email/maps, deep links, copying, and printing remain available. Original search/filter outputs match 24,192 tested scenarios.

### Decisions

Plain HTML/CSS/JavaScript is retained; no framework migration or backend is needed for this visual update. The resource title opens local full details, while the separately displayed provider URL goes to its original website. Official artwork is used as a local SVG without changing its bytes; font fallbacks avoid an external font request. No employee-directory panel, external search API, analytics, accounts, or staff editor was added.

### Limitations and review items

The managed preview service is unavailable, so browser visual/interaction QA remains unverified. Use `TESTING.md` for desktop, mobile, keyboard, storage, link, download, and print checks. Private hosted access remains in place; independent local serving does not require that sign-in. Resource claims remain the original October 23 dataset and await the separate supervised review. Brand approval and official university integration are not established by the visual update.

## 1.0.0 — October 23, 2026

Initial independent prototype: 178 entries organized into 13 categories, keyword search and filters, detail dialogs, local bookmarks, source notes, official/provider links, and a portable static implementation. The initial research and verification notes remain intact.

## Recording future changes

Use one Git commit per coherent interface change or reviewed resource batch, with a short entry below. If Git is unfamiliar, retain dated ZIP backups plus this change log until you adopt it.

For a resource correction, record:

| Date | Version/commit | Resource ID or file | Fields changed | Evidence/source | Reviewer | Validation |
| --- | --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | Your version | Stable ID or path | Explicit field names | Official URL or supplied instruction | Name/role | Checks and device review |

Describe the final behavior and the reason for the change. Keep historical evidence and do not label all fields verified when only one field was checked.
