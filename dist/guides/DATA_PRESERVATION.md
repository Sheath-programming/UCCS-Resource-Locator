# Phase 2 data preservation record

The October 31, 2026 interface update preserves the complete existing data. The public resource file is byte-for-byte identical to its pre-update version, not merely equal in record count. This protects every record, category, tag, description, contact, location, eligibility field, source note, and other stored property, including array order.

## Baseline and result

| Item | Before | After |
| --- | --- | --- |
| Resource entries | 178 | 178 |
| Category definitions | 13 | 13 |
| Public JSON SHA-256 | `3e9710631c55e44a009d8b2f1c31afe048583d95a3aa1fe5d5678a44a996100a` | Same |
| Original source JSON files | Five | All five unchanged |
| Source-data generator | Existing script | Unchanged and not run |
| Independent resource review | October 23 dataset | No new review in this update |

The exact six file fingerprints are recorded in `PHASE2_DATA_BASELINE.json`. The baseline came from existing source commit `c107e8740168ae1a34df8d73dcb3fa33670b64bd`, before any Phase 2 interface edits.

`scripts/check-preservation.mjs` computes SHA-256 directly from each file's bytes and checks the original record/category counts. Because the entire public JSON is unchanged, there are no hidden data changes behind a preserved count. Git's data diff is also empty for `dist/data` and `src`.

## Search and filter preservation

`PHASE2_BEHAVIOR_BASELINE.json` records a digest of the original implementation's search scores and returned record IDs across 24,192 query/filter/saved-set scenarios. `scripts/check-interface.mjs` compares the current implementation with that digest using the same unchanged dataset.

This comparison covers browser-independent search and filter functions. It does not establish browser layout, keyboard focus, actual storage persistence, or phone-device behavior; those are on the manual testing checklist.

## Later resource review

Keep this record as evidence of the Phase 2 boundary. For the future supervised resource-review stage, record the resource ID, fields changed, source, reviewer, and date. Compare the intended data diff and update future test expectations deliberately. An intentional edit should fail this particular historical preservation test; do not silently redefine what was preserved in Phase 2.
