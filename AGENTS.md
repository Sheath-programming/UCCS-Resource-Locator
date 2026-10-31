# Project update requirements

These instructions record the user's standing preferences for this repository.

- Treat this as the existing UCCS resource locator; retain its Site identity and current audience.
- Preserve the 178-entry resource JSON, research JSON, categories, tags, and descriptions unless the user specifically authorizes resource-data changes. Current interface revisions must pass the recorded data-preservation check.
- Every AI-authored website update must also update the relevant setup/project files: README, architecture/local-use/testing instructions where behavior changed, package version, and change log.
- Regenerate live guide copies and the editable source ZIP with `python3 scripts/package-source.py` before publication. Include configuration, assets, documentation, and this file; exclude credentials, Git internals, caches, and the ZIP itself.
- Run the existing directory checks, interface/regression checks, and data-preservation check. Test the extracted source package when packaging behavior changes. Report browser/device QA limits accurately.
- Use the UCCS color-page palette and unmodified official university logo assets. The separate project mountain favicon may be edited as requested.
- Keep document provenance and generic verification boilerplate out of the student-facing detail view. Retain pertinent resource-specific caveats and the maintenance evidence in the data.
- Do not invent ratings, availability, verification dates, or an official UCCS-hosted domain. The header label does not establish domain ownership.
- Keep search local to the curated JSON unless an external search integration is explicitly requested. A separate user-clicked Google search link is supported; it does not make Google the directory's search provider.
- Follow the Sites skill for opening, packaging, source synchronization, and publication. Do not add a separate approval step for an already authorized update.
