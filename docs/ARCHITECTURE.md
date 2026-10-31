# How the Student Resource Locator works

This guide describes the actual project as updated on October 31, 2026. The resource locator is a static, browser-based website written with plain HTML, CSS, and JavaScript. It does not use Angular, React, Vue, or another frontend framework.

The visual update follows the supplied UCCS search screenshot. It does not adopt the reference site's application code or Google search service.

## Technologies and their jobs

| Technology | What it does here | Needed to run locally? |
| --- | --- | --- |
| HTML | Defines the header, search form, filters, results area, and dialogs | Already supported by the browser |
| CSS | Controls colors, typography, spacing, result layout, responsive rules, and print layout | Already supported by the browser |
| JavaScript modules | Loads the data; searches, filters, sorts, and displays resources; handles saves and details | Already supported by a modern browser |
| JSON | Stores the complete resource directory and its categories | Read as a static file by JavaScript |
| SVG | Stores the local university header artwork and existing favicon | Supported by modern browsers |
| Python 3 | Runs a local static file server; optionally regenerates data and packages the ZIP | Recommended for the beginner local workflow |
| Node.js 20 or later | Runs optional automated checks | Not required to use or edit the website |
| Git | Records versions and synchronizes this hosted project's source | Optional for local use; recommended for change tracking |

There are no npm runtime dependencies to install. `package.json` identifies the project as a JavaScript-module project and provides test shortcuts; it does not declare a framework or runtime dependency list.

## From loading the page to viewing a resource

1. A static web server sends `dist/index.html` to the browser.
2. The browser loads `dist/styles.css`, `dist/app.js`, and the local SVG assets.
3. `app.js` fetches `/data/resources.json` from the same website. This is a static-file request, not a database query or an external search API.
4. The data stays in browser memory. Search and filters operate on that array of 178 records.
5. The renderer creates conventional search-result rows. Selecting a title opens the existing full-detail dialog.
6. External provider, email, phone, or map links are followed only when the visitor chooses them.

The application does not have its own backend, database server, admin portal, or server-side search. Python's local server only delivers files. The private hosted version's ChatGPT sign-in is a hosting-platform access layer, separate from this frontend. It is not a UCCS account system and is not necessary for an independent local copy.

## File map and editing responsibility

The original folder structure is retained. The folder named `dist` contains the actual editable HTML, CSS, and JavaScript; there is no compilation step producing those files in this project.

| File or folder | Purpose | Editable source or generated? |
| --- | --- | --- |
| `dist/index.html` | Page structure, university-style header, search form, controls, support banner, and footer content | Editable frontend source |
| `dist/styles.css` | Complete visual theme, desktop/mobile rules, modal and print styling | Editable frontend source |
| `dist/app.js` | Search, filters, URL state, result rendering, details, bookmarks, copying and printing | Editable frontend source |
| `dist/data/resources.json` | All 178 complete records and 13 category definitions | Generated initially; also directly editable as a standalone data source |
| `dist/assets/uccs-search-lockup.svg`, `dist/assets/cu-system-lockup.svg` | Unmodified official UCCS Search header/footer artwork | Local assets; do not redraw, distort, or modify them |
| `dist/assets/uccs-cu-lockup-reverse.svg` | Previous official masthead asset, preserved in the source package | Historical local asset |
| `dist/assets/README.md` | Asset provenance and usage notes | Editable documentation |
| `dist/favicon.svg` | Project mountain favicon, now black-filled/outlined on CU Gold | Editable SVG source; separate from the official university logos |
| `src/research.json` | Preserved paragraphs from the original extensive resource document | Research source data; unchanged in Phase 2 |
| `src/at-a-glance.json` | Preserved paragraphs from the shorter resource document | Research source data; unchanged in Phase 2 |
| `src/verified-*.json` | Evidence, corrections, and field-level verification from the original development | Research source data; unchanged in Phase 2 |
| `scripts/build-data.py` | Optional reproduction of public JSON from the research files | Editable maintenance script; not run in Phase 2 |
| `scripts/serve.py` | Beginner local static-server command | Editable Python script |
| `scripts/check.mjs` | Existing directory/search/filter and provenance checks | Editable test script |
| `scripts/check-interface.mjs` | New presentation and behavior-regression checks | Editable test script |
| `scripts/check-preservation.mjs` | Checks all data bytes against the pre-update fingerprint | Editable test script |
| `scripts/package-source.py` | Copies current guide downloads and generates the editable-project ZIP | Editable packaging script |
| `docs/` | Architecture, local editing, testing, integration, change log, preservation evidence | Editable documentation |
| `docs/PHASE2_DATA_BASELINE.json` | Hashes of the six protected data files before interface changes | Recorded Phase 2 baseline; keep for historical comparison |
| `dist/guides/` and `dist/README.md` | Downloadable copies of the guides and README | Generated copies; edit `docs/` or the root README instead |
| `dist/downloads/uccs-resource-hub-source.zip` | Portable project download | Generated delivery file |
| `package.json` | Project information and test commands | Editable configuration |
| `.openai/hosting.json` | Existing Sites identity and static-directory configuration | Deployment configuration; not a credential |
| `.gitignore` | Files excluded from Git, such as caches and dependencies | Editable configuration |
| `AGENTS.md` | User requirements for future AI updates, documentation, tests, packaging, and data preservation | Editable project instructions |

The ZIP preserves this relative structure and includes the hosting configuration. It excludes Git internals, local caches, dependency folders, and credentials. Do not reuse the existing project ID when registering a separate new hosted project. No application backend code is missing; there is no application backend in this implementation.

## Where the resource information lives

The browser reads `dist/data/resources.json`. Its top-level `categories` array contains category IDs, displayed labels, original labels, and icon names. Its `resources` array contains each resource's stable ID, name, description, categories, tags, contact information, locations, costs, eligibility, access instructions, source excerpts, and verification notes.

During this interface update, that entire file and all five research JSON files are byte-for-byte unchanged. No entries were deleted, merged, corrected, renamed, or reorganized.

Two maintenance routes exist. Direct editing of the public JSON is the simplest route for a beginner. The optional builder regenerates it from the `src` research records. Running the builder overwrites direct public-JSON edits, so choose one route deliberately and back up first. There is no automatic builder in local serving or this update's publication.

## How search, filtering, and sorting work

`searchScore()` in `app.js` normalizes capitalization, accents, and punctuation. It looks for query words in the stored search text and uses a small built-in alias list for terms such as counseling/counselling or Wi-Fi/hotspot. Exact and partial name matches rank above broader text matches.

`filterResources()` combines the current query with the selected category, location/mode, cost type, appointment/access type, official-link option, and saved-resource set. These conditions are combined, so a resource must meet all active filters. No resource data is changed by selecting a filter.

The recommended order retains the existing featured-resource list, with search-match scores used for queries. Name sorting uses alphabetical comparison. Results now use numbered pages of 12 entries, with previous/next controls, a current-page marker, and ellipses where useful. All 178 entries remain reachable, with 10 on the fifteenth unfiltered page. Search/filter changes reset to page one; an out-of-range page is clamped to the available results.

URL query parameters remember the search, filters, and result page and can identify an individual resource. The result title opens the existing detail dialog; the neutral-colored provider URL underneath is a separate link to the external provider. This distinction keeps full local details available while making the official destination visible.

Bookmarks store only resource IDs in this browser's `localStorage`, under `uccs-resource-hub-saved`. They do not sync across devices or accounts. Existing saved IDs and the storage key are unchanged. Saving falls back to memory for the current visit if persistent browser storage is unavailable.

## Styling and runtime services

All layout rules are in one replaceable CSS file. Categories and the Dean of Students starting point sit in the right-hand panel on desktop. At 700 pixels or below, that panel becomes a drawer entering from the right, the search band stacks, and detail fields use one column. Native HTML dialogs provide the detail overlay. Phone/email links retain their normal device behavior.

The app does not call OpenAI, Google search, a university search engine, or an AI model to answer searches. It does not send students' search terms to an external search API. The university artwork is served locally and fonts use installed Helvetica Neue, Helvetica, or Arial fallbacks, so no external font service is required.

Original document excerpts remain in the maintenance data but are no longer rendered in the student-facing detail dialog. The repeated generic verification sentence is filtered at rendering time. Pertinent provider-specific notes, checked-field metadata, official links, and the heading “Some details checked against official sources” remain.

The result count also displays measured client-side search/filter duration using `performance.now()`. It is not a Google response time or a full network/page-load measurement. Result status dots are derived from existing modes, checked cost type, and checked 24/7-hours text, with labels and a visible key; no ratings are inferred.

A separate Google search link is updated from the typed keyword. Clicking it navigates to Google; there is no Google Programmable Search script, key, automatic query submission, or Google-powered directory search. Official provider pages and Google Maps are external destinations linked from the directory. Private Sites hosting is needed only for the supplied hosted copy, not for independent static hosting. University integration, staff administration, shared bookmarks, or automatic verification would require additional work; see `INTEGRATION.md`.
