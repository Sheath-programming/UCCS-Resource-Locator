# Future UCCS integration

The current iteration does not integrate the locator with a UCCS server, content-management system, account system, search service, or staff publishing workflow. Those arrangements have not been verified. The supplied UCCS search page is a visual reference, not evidence that the locator needs the same technology.

## What already supports integration

| Existing project property | Why it helps |
| --- | --- |
| Static HTML, CSS, JavaScript, and JSON | Can run on a suitable static web host without an application database or server framework |
| Separate data file | Staff can update resource information independently of page layout |
| Separate stylesheet | A web team can substitute approved institutional styles without rewriting the resource database |
| Stable resource/category IDs | Preserve bookmarks, links, and category references across interface changes |
| Field-level source and verification notes | Provide a starting point for a departmental review process |
| Local official logo asset and font fallbacks | Avoid a runtime dependency on an external font or logo service |
| Existing URL query state and resource links | Allow student-service pages to link into searches or individual resources |

## Realistic paths to explore

1. Link to a reviewed prototype from a campus resource page, after the relevant owners approve the audience and content. This is the least technically coupled option.
2. Host the static folder at an approved subdomain or domain root. Confirm HTTPS, file-serving behavior, access rules, and the university's deployment process.
3. Mount it under a university webpage path. Root-relative asset/data/download URLs must be adapted and tested for that base path.
4. Integrate its directory component and JSON into an approved web platform or CMS. The web team would need to map the data, control script/style loading, and avoid conflicts with existing components.
5. Embed it in an iframe only if the university approves that approach. Framing policies, private sign-in, height, accessibility, and mobile navigation would need testing. Embedding alone does not create a staff editing workflow.

These are possible approaches, not confirmed UCCS-supported hosting options.

## Coordination and additional development

Before official deployment, identify a content owner and coordinate with UCCS web administration/IT and the relevant brand contact on:

- Approved logo use, page header/navigation, and branding review. The prototype uses an unchanged asset from UCCS's public brand-site header and explicitly remains independent; that does not establish institutional endorsement.
- Supported hosting, CMS, subdomain/path, HTTPS, caching, Content Security Policy, and file types. The current frontend needs same-origin JavaScript, CSS, SVG, and JSON.
- The intended audience and any university authentication requirement. Current ChatGPT-hosted private access is separate from a UCCS identity solution.
- Ownership of resource information, provider review frequency, corrections, archival policy, and handling of past event/program claims.
- Accessibility review, keyboard/screen-reader testing, and usability testing with students on real devices.
- University privacy and analytics requirements. The current application stores bookmark IDs in browser storage and has no analytics or submission backend.
- Whether staff should edit JSON, a shared content source, or a CMS form. A validated staff editor with review and publishing roles would be additional development.
- A controlled deployment and rollback process. The portable ZIP includes the existing Sites manifest for completeness; it is not university hosting configuration.

No infrastructure decision is implied by the UCCS search page's source. In the supplied reference, Google Programmable Search and bundled application assets are present. The locator continues to search its own local JSON and does not reuse that external search integration.

## Official design references reviewed on October 31, 2026

- [UCCS Search](https://search.uccs.edu/) — supplied screenshot and source; black masthead, dark-gray search band, white results, text-focused layout.
- [UCCS Logos and Marks](https://brand.uccs.edu/logos-and-marks) — approved artwork, clear space, and usage context.
- [UCCS Typography](https://brand.uccs.edu/visual-guidelines/typography) — Helvetica Neue and suitable web fallbacks including Helvetica and Arial.

These references inform the prototype's presentation. The current resource information remains the October 23 dataset without a new resource review.

## Search-label and external-search decisions in version 1.2

The visible header `RESOURCES.search.uccs.edu` links to the existing UCCS Search website. It does not register that hostname, change the current private Site address, or establish university DNS approval. A real UCCS subdomain would require university coordination.

The curated directory retains local keyword/filter search, with numbered pages and measured local search time. A separate user-clicked Google keyword link is provided. Google Programmable Search is not connected, so no Google search engine ID, API key, or attribution is required by this implementation.

The footer styling follows the supplied UCCS Search reference. Link destinations were taken from UCCS's current main-site legal footer rather than copying several mismatched destinations in the search application's bundle. Accessibility support for this student prototype links to the user-specified student email, not to an institutional support service.

Current palette reference: https://brand.uccs.edu/color — CU Black, CU Gold, the listed grays/white and listed link-blue variations, with restrained tints for surfaces and the support strip.
