# Change log

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
