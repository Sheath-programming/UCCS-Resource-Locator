# UCCS Student Resource Locator

An independent student prototype for finding campus and Colorado Springs community resources. Version 1.2 refines the interface to follow the supplied UCCS search-page reference while preserving all 178 existing records and all 13 categories, including their descriptions, tags, contacts, links, eligibility, and sources.

The application uses plain HTML, CSS, JavaScript modules, and a separate JSON file. It has no frontend framework, application backend, database server, external search API, or npm runtime dependencies. The private hosted copy retains its existing access policy and remains an independent, unendorsed prototype.

## Current interface

The compact university masthead links to the UCCS main website. The `RESOURCES.search.uccs.edu` header links to UCCS Search; it is a display label, not a registered or hosted UCCS domain. The current hosted address and private access are unchanged.

The page provides right-hand categories and the Dean of Students starting point, all existing filters, 12 results per numbered page, a measured local search/filter duration, and a separate user-clicked Google search link. Google Programmable Search is not connected to the curated directory. Status dots describe existing online, no-cost, or 24/7-hours information; they are not ratings or live availability guarantees.

The footer follows the supplied reference with official university links and both official logo assets, centered project downloads, and the independent-project statement. Accessibility support links to `sheath3@uccs.edu`. Resource-specific caveats remain visible; original document provenance panels and generic verification boilerplate are hidden in the student interface while the underlying data remains intact.

## Start locally

Extract the complete ZIP, open its `uccs-resource-hub` folder in an editor, and open a terminal in that folder.

Windows:

```sh
py scripts/serve.py
```

macOS/Linux:

```sh
python3 scripts/serve.py
```

Open [http://localhost:8000](http://localhost:8000). Keep the terminal open; press Ctrl+C to stop. Save edits and refresh the browser to see changes. No `npm install` is required. See the local guide if your Python command is named differently, port 8000 is occupied, or you want a local-network demonstration.

## Project guides

| Guide | What it answers |
| --- | --- |
| [Local setup and editing](docs/LOCAL_GUIDE.md) | Software, VS Code, starting/stopping, editing one resource, future additions/categories/tags, backups, and static hosting |
| [Technology and file structure](docs/ARCHITECTURE.md) | Actual stack, data flow, frontend/backend distinction, search/filter logic, source versus generated files, and external services |
| [Change log](docs/CHANGELOG.md) | Interface changes, changed files, preserved behavior, decisions, limitations, and future change-record template |
| [Testing checklist](docs/TESTING.md) | Automated checks plus desktop/mobile, keyboard, links, saved items, and downloads to review manually |
| [UCCS integration considerations](docs/INTEGRATION.md) | Static hosting, subdomains, page paths, linking/embedding/CMS options, and coordination still needed |
| [Data preservation record](docs/DATA_PRESERVATION.md) | Pre/post fingerprints and exactly what remained unchanged |

## The files you will edit most

| File | Purpose |
| --- | --- |
| `dist/index.html` | Header, search form, controls, and page content |
| `dist/styles.css` | Institutional colors, typography, spacing, responsive layout, and printing |
| `dist/app.js` | Search, filters, result presentation, details, bookmarks, and resource links |
| `dist/data/resources.json` | All 178 resource entries and the category definitions |

The HTML/CSS/JavaScript in `dist` are original editable source in this buildless project, not disposable compiled files. The resource JSON was originally generated from the preserved research files in `src`; it can also be edited directly. Do not run `scripts/build-data.py` after direct JSON edits unless you intentionally want to regenerate and replace that file. No data generation was run in this iteration.

`dist/README.md`, `dist/guides`, and the source ZIP are generated download copies. Edit the root README and `docs` originals, then run `python3 scripts/package-source.py` to refresh them. The archive includes configuration and relevant assets, but excludes Git internals, caches, dependencies, and credentials.

The ZIP does not recursively include itself. After extraction, run that packaging command if you want the local source-download button to serve another ZIP; the directory itself runs without this step.

## Required update workflow

`AGENTS.md` records the standing requirement that every AI website update also refreshes the relevant project/setup documentation, version, change log, live guide copies, and downloadable source ZIP. Run the checks below and `python3 scripts/package-source.py` before publication. The packaging helper copies the current guides and includes `AGENTS.md` in the portable project.

For a future private GitHub repository, import this complete extracted folder, keep credentials and caches excluded, and retain the historical data baselines. No GitHub repository or UCCS domain was created by this update.

## Check the project

Optional: with Node.js 20 or later, run:

```sh
node --check dist/app.js
node scripts/check.mjs
node scripts/check-interface.mjs
node scripts/check-preservation.mjs
```

The behavior comparison covers 24,192 scenarios against the original implementation. The preservation check verifies all six data files against the frozen Phase 2 baseline. A later intentional data update should be documented and reviewed as a new iteration rather than silently replacing that historical baseline.

## Host or maintain it independently

Serve the contents of `dist` from a suitable static HTTPS host. No running application backend or API key is required. The paths currently assume a domain/subdomain root; adapt root-relative paths before placing it under a subdirectory. `.openai/hosting.json` is the existing private Sites configuration and is included for completeness, not as a requirement for another host.

The original resource-review date remains October 23, 2026. This October 31 update did not reverify or correct resource facts. Local browser QA could not be performed because the managed preview service is unavailable; complete the supplied browser/device checklist before broader use. University hosting, branding approval, access, content ownership, and any staff editor require coordination described in the integration guide.
