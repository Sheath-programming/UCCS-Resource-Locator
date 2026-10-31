# Phase 2 testing and review checklist

The current visual refinements must preserve the full existing dataset and the existing search/filter behavior. Automated checks cover those properties. They do not replace a browser or real-device review.

## Automated checks

Run from the project root, with Node.js 20 or later:

```sh
node --check dist/app.js
node scripts/check.mjs
node scripts/check-interface.mjs
node scripts/check-preservation.mjs
```

| Check | What it establishes |
| --- | --- |
| JavaScript syntax check | The application module parses |
| Existing directory checks | Source coverage, real keyword searches, combined filters, saved filtering, official-link filtering, provenance, and safe URL handling |
| Phase 2 behavior comparison | Search scores and returned IDs match the original implementation across 24,192 combinations of queries, categories, locations, costs, access types, official links, and saved-set filtering |
| Interface/asset checks | Existing controls, new header/footer/support links, preserved specific caveats, numbered-page coverage, labeled status dots, safe URL labels, unmodified logo assets, the UCCS palette, and packaged local links are checked |
| Data preservation | Every byte in the public resource JSON and five source JSON files matches the pre-update baseline; all 178 records and 13 categories are retained |

The original behavior baseline was computed from source commit `c107e8740168ae1a34df8d73dcb3fa33670b64bd` with the same preserved data. The stored output digest is in `PHASE2_BEHAVIOR_BASELINE.json`; the data fingerprints are in `PHASE2_DATA_BASELINE.json`.

These baseline checks are specific to the current preservation requirement. A later approved data or search-logic change should produce a visible difference. Document and review that difference instead of resetting a baseline to make a test pass without review.

## Browser verification limit for this iteration

The managed preview service is unavailable in the authoring workspace: both preview startup and status report a missing preview-daemon mailbox. No substitute preview service or browser-control route was installed. Automated checks can continue, and the existing private hosted Site can be updated, but local browser layout and interaction review remains unverified.

The hosted copy retains its existing private access. If the review browser is not already authenticated, the sign-in wall is a separate limitation; the independent local copy has no such sign-in. Use the checklist below before broader use. No live provider re-verification was performed in Phase 2.

## Desktop review

- [ ] Open the local or deployed page at about 1440 pixels wide. Confirm the unchanged university artwork appears in the black header with clear space and no stretching.
- [ ] Confirm the smaller black masthead links to the UCCS main site and the dark-gray band contains the linked `RESOURCES.search.uccs.edu` label plus a visible search field. Confirm the browser tab reads “UCCS Resource Locator.”
- [ ] Confirm the old small prototype banner/About content is absent and the exact independent-project statement is visible at the bottom of the replacement footer.
- [ ] With all filters clear, confirm the count is 178 and the category names/counts match the prior version.
- [ ] Confirm results form a single vertical list with blue titles, neutral provider URLs when available, unchanged descriptions, category/location text, save controls, and a full-details action.
- [ ] Confirm categories and the Dean of Students starting point appear on the right; no employee-directory panel appears. Category icons should have CU Gold fills/backgrounds and white outlines, while detail icons stay outlined.
- [ ] Search for `food`, `mental health`, `tutoring`, and `environmental health`. Compare expected resources with the prior dataset.
- [ ] Test `zzzyyynotarealresource` and confirm a useful no-results state and clear-filter action.
- [ ] Combine a category with on-campus, off-campus, or online, then cost/access filters and “Has official link.”
- [ ] Remove one filter and clear all filters. Confirm the corresponding controls reset and all 178 entries return.
- [ ] Switch between recommended and alphabetical sorting. Confirm all matches remain accessible through numbered pages and Previous/Next; the unfiltered last page should contain 10 entries. Refresh a page URL and confirm that its page number is restored.
- [ ] Click a result title. Confirm contact details, eligibility, hours, location, access, what-to-bring fields, and resource-specific verification notes still appear. Confirm original document/source panels and the repeated generic verification sentence are absent.
- [ ] Click the provider URL separately and confirm it opens the original external destination.
- [ ] Save an entry, refresh, and open Saved. Confirm it persists in the same browser. Remove it and confirm the count and button state update.
- [ ] Copy a detail link, open it in a new tab, and confirm the correct resource opens.
- [ ] Use Ctrl/Cmd-click on a result title to confirm a normal new-tab resource link remains available.
- [ ] Check print preview for an open detail view; confirm details are readable and navigation controls are omitted.
- [ ] Download the source ZIP and local guide from the centered footer links. Extract the ZIP and run its local server from a fresh folder.

## Mobile and accessibility review

- [ ] Test at 320, 390, 700, and 768 pixel widths and on at least one actual phone.
- [ ] Confirm header/search content wraps, the logo maintains its aspect ratio, and there is no page-wide horizontal scrolling.
- [ ] Open the Categories drawer from the right below 700 pixels. Select a category, then reopen it and close it using the close button and Escape.
- [ ] Confirm dropdowns, links, save buttons, and dialog controls are usable by touch. Increase browser text size/zoom and check for overlap.
- [ ] Tab through the page from the start. Confirm the skip link, visible focus styles, search form, filter controls, titles, and actions work in a sensible order.
- [ ] Confirm a detail dialog contains keyboard focus, closes with Escape, and returns focus to the triggering control.
- [ ] Check result counts with a screen reader and confirm updated results are announced without losing the search field.
- [ ] Check long titles, long official URLs, missing-contact records, closure notices, and an empty saved list.
- [ ] Confirm phone and email links invoke the expected device applications and directions links open a map.

Record date, browser/device, viewport, result, and any issue in the change log. Do not mark this checklist complete solely because the automated checks pass.

## Added revision checks

- [ ] The heading reads “Resource Search Results For:” followed by the current keyword or category. There are no Web/Image tabs.
- [ ] The result count includes real local timing; the independent Google link contains the typed keyword and opens Google only when clicked. No Google-powered/Enhanced by Google attribution is shown.
- [ ] The one-line introduction fits on desktop and wraps naturally without overflow on phones.
- [ ] The footer has all eleven requested links, both official marks, centered project downloads, and the student-project statement in place of the Regents copyright.
- [ ] The Need Support banner opens a message to `sheath3@uccs.edu`.
- [ ] Status-dot labels and key agree. Unknown costs must not be presented as verified free; no ratings are fabricated.
- [ ] The hotspot details retain the three-week-versus-three-month caveat.
- [ ] The browser favicon has black-filled mountains and a black outline on CU Gold.

The feedback's unfinished “When clicking the x for” line did not specify a new action. Existing close/Escape behavior and return-focus behavior are retained.
