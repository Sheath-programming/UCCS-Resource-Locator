# Run and edit the project on your computer

This guide is for the actual plain HTML, CSS, JavaScript, and JSON project. You do not need Angular, React, a database, an API key, or an npm dependency installation.

Phase 2 changes appearance only. All 178 records are preserved. The editing instructions below are for your later, individually supervised resource review; they do not indicate that any resource was changed in this iteration.

## 1. Install the tools

Install a modern browser and Python 3 from [python.org](https://www.python.org/downloads/). On Windows, enable the installer's “Add python.exe to PATH” option if available. If Python is already installed, use it rather than installing another copy.

Visual Studio Code is optional but convenient for finding files, editing JSON, and spotting syntax errors. Download it from [code.visualstudio.com](https://code.visualstudio.com/). Any plain-text code editor can work.

Node.js 20 or later is optional for the automated checks. Get it from [nodejs.org](https://nodejs.org/). Git is optional for version history. Neither Node nor Git is required to view the site locally.

## 2. Extract and open the project

1. Download `uccs-resource-hub-source.zip` and extract it. Do not run the files from inside the ZIP viewer.
2. Open the extracted `uccs-resource-hub` folder in VS Code with File → Open Folder.
3. Confirm that it contains `README.md`, `package.json`, `dist`, `src`, `scripts`, and `docs`. It also includes the original non-secret hosting configuration and ignore rules.
4. In VS Code, choose Terminal → New Terminal. The terminal should be in the folder containing `README.md` and `scripts`.

No `npm install` command is needed: the application has no npm runtime dependencies.

## 3. Start the local website

On Windows, try:

```sh
py scripts/serve.py
```

On macOS or Linux, use:

```sh
python3 scripts/serve.py
```

If your installation uses `python` instead of `py` or `python3`, use `python scripts/serve.py`. The script prints the page address and the folder being served.

Open [http://localhost:8000](http://localhost:8000) in your browser. The local copy does not need ChatGPT sign-in. Keep the terminal open while using it.

An equivalent command without the helper is:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Use `py` or `python` in that command on systems where appropriate.

To stop the server, select the terminal and press Ctrl+C. To restart, run the same command. After editing a file, save it and refresh the browser. Restarting the server is usually unnecessary. If the browser keeps an old CSS or JavaScript file, use Ctrl+Shift+R on Windows/Linux or Command+Shift+R on macOS.

If port 8000 is already in use:

```sh
python3 scripts/serve.py --port 8001
```

Then open `http://localhost:8001`. Replace the Python command name for your system as needed.

Do not double-click `index.html` and expect JSON loading to work from a `file:` address. Serve the folder with one of these commands.

## 4. Know which files to edit

| Your goal | File |
| --- | --- |
| Change page structure, header text, or About text | `dist/index.html` |
| Change colors, spacing, type size, desktop/mobile layout | `dist/styles.css` |
| Change searching, filters, result rendering, or interactions | `dist/app.js` |
| Review or change a resource's actual details | `dist/data/resources.json` |
| Review or change category definitions | The top-level `categories` array in that JSON file |
| Update written instructions | Root `README.md` or the appropriate file in `docs/` |

Despite its name, `dist` contains the editable frontend in this buildless project. HTML, CSS, and JavaScript are not generated from another framework. `dist/README.md`, `dist/guides`, and the source ZIP are generated documentation/download copies; update their originals instead.

## 5. Review one existing resource

Make a backup or Git commit before each review batch. Open `dist/data/resources.json`, press Ctrl+F or Command+F, and search for the exact resource name or its stable `id`.

Each resource is one object inside the `resources` array. Change only the values you intend to correct. Leave the rest of that object and neighboring entries intact.

| Field | What you can update later |
| --- | --- |
| `name`, `description` | Resource title and student-facing explanation |
| `location`, `hours` | Physical location and availability text |
| `phone`, `email`, `url` | Provider contact information and official webpage |
| `cost`, `eligibility`, `bring`, `access` | Cost, qualifications, items to bring, and access instructions |
| `category`, `categories` | Primary category ID and cross-list category IDs |
| `tags` | Structured tag strings |
| `modes` | An array using `campus`, `community`, and/or `online` |
| `costType` | `unknown`, `free`, `included`, `limited`, `mixed`, or `paid` |
| `appointment` | `unknown`, `walk-in`, or `required` |
| `verification` | Checked date, specific checked fields, and uncertainty notes |
| `officialSources`, `additionalLinks` | Objects with a `title` and an official `url` |
| `mapAddress` | Optional independently checked address for the directions link |
| `searchTerms` | The searchable text and aliases for this entry |

Keep `id` stable when editing an existing resource so saved bookmarks and shared detail links continue to work. Do not mark every field verified just because you found the department's homepage.

Use `null` when something is not known; it is different from saying “No requirements.” For a field you actually checked, add its field name to `verification.fields`, update `verification.checkedAt` to the date of that check, and record the source and relevant caveats. Keep original document excerpts as historical source evidence rather than silently rewriting them.

Update `searchTerms` when changing names, descriptions, or discoverability keywords. The current browser searches that stored string; it does not regenerate the string automatically after a manual edit. Also keep the resource's name and description represented in `searchTerms`.

Save the JSON, refresh the browser, search for that resource, and inspect its full detail view. Check phone, email, webpage, and directions destinations before marking the review complete. A broken JSON comma or quotation mark can prevent the entire file from loading; VS Code will often highlight these errors.

You can validate JSON without changing it:

```sh
python3 -m json.tool dist/data/resources.json
```

That command prints the parsed JSON or identifies a syntax error. Replace `python3` as needed on your system.

## 6. Add a resource in a future iteration

Do this only when you are ready to expand the reviewed dataset. Add a complete object to the `resources` array, separated from neighboring objects by a comma. Give it a new unique `id` using lowercase letters, digits, and hyphens. Use existing category IDs unless you intentionally add a category.

This example is a template only. It has not been added to the live database:

```json
{
  "id": "new-resource-identifier",
  "name": "New resource name",
  "category": "basic",
  "categories": ["basic"],
  "description": "Write a sourced description here.",
  "affiliation": "uccs",
  "modes": ["campus"],
  "location": null,
  "phone": null,
  "email": null,
  "url": null,
  "hours": null,
  "cost": null,
  "eligibility": null,
  "bring": null,
  "access": null,
  "costType": "unknown",
  "appointment": "unknown",
  "tags": [],
  "verification": {
    "status": "research",
    "checkedAt": null,
    "fields": [],
    "notes": ["Current details need provider confirmation."]
  },
  "sources": [],
  "sourceIndices": [],
  "officialSources": [],
  "additionalLinks": [],
  "searchTerms": "new resource name and relevant search keywords"
}
```

Fill in real evidence before treating the entry as reviewed. `sources` preserves original uploaded-document excerpts; do not invent an excerpt or paragraph number for a newly researched resource. Put new official webpage evidence in `officialSources` and explanatory notes in `verification.notes`. The runtime can show an entry without original document excerpts. The original audit tests assume all original 178 records have source evidence, so update those expectations deliberately when the approved scope expands.

## 7. Change categories or tags later

The top-level `categories` array defines the categories. Each definition has `id`, `label`, `originalLabel`, and `icon`. A resource's `category` must be an existing ID; its `categories` list controls where it is cross-listed. Keep IDs stable unless you deliberately migrate all affected references.

To add a category, add its definition and then reference its ID in the relevant resources. Existing icon names include `book`, `heart`, `library`, `laptop`, `people`, `mountain`, `briefcase`, `bus`, `ticket`, `globe`, and `pin`. The icon helper supplies a fallback for an unknown name.

To change tags, edit the relevant resource's `tags` array. Generic tags are stored for organization and can be included in `searchTerms`; they are not currently a separate tag-filter menu. The exact `Closure notice` tag triggers a special closure badge. Do not rename that tag without considering the renderer. No categories or tags were modified in Phase 2.

## 8. Avoid overwriting direct JSON edits

`scripts/build-data.py` is an optional reproduction workflow that reads `src/research.json`, `src/at-a-glance.json`, and `src/verified-*.json`. It generates `dist/data/resources.json` and its search terms.

For your initial manual review, edit the public JSON directly and do not run that builder. Starting the server or repackaging the ZIP does not run it. If you choose the builder workflow later, move approved updates into its source records and account for how its matching rules, deduplication, and fixed research extraction work. Back up first: the builder replaces the public JSON and can discard direct edits.

## 9. Check, document, and repackage

With Node installed, run these from the project folder:

```sh
node --check dist/app.js
node scripts/check.mjs
node scripts/check-interface.mjs
node scripts/check-preservation.mjs
```

The preservation check intentionally compares against the frozen pre-Phase-2 data. It should fail after an intentional resource-data update. Do not reset the historical baseline just to hide that difference. Instead, document the authorized change, review the data diff, update any count/claim-specific tests for the new iteration, and capture a separately named baseline when appropriate.

Record your changes in `docs/CHANGELOG.md`. For simple version history, initialize Git in your extracted copy, make an initial commit, then commit each reviewed batch. Alternatively, retain dated ZIP backups and a change-log row for each reviewed resource. Never store credentials in the project.

To refresh the downloadable guides and project archive:

```sh
python3 scripts/package-source.py
```

The output is `dist/downloads/uccs-resource-hub-source.zip`. This command packages files; it does not deploy the website or regenerate resource data.

The archive intentionally does not contain a second copy of itself. The extracted website runs immediately, but run this packaging command if you also want its local “Download editable project” button to serve a ZIP. The hosted version already includes that generated download.

## 10. Demonstrate or host the site

For a demonstration on your own computer, use `localhost` as above. To show it on another device on the same trusted local network, use:

```sh
python3 scripts/serve.py --host 0.0.0.0 --port 8000
```

On the other device, open `http://YOUR-COMPUTER-LAN-ADDRESS:8000`. Find your computer's local address in its network settings. Firewall or network rules may prevent access. The Python server is for development or a short demonstration; do not use it as a public production host. This local-network option makes the served project files reachable by devices that can connect to that computer and port.

For an online prototype, the contents of `dist` can be served by a static hosting platform or a university-managed static web server. No continuously running application backend is required. Git-based static hosts are also possible, subject to the university's access and publication rules. No new external hosting account was created in this iteration.

The current asset and data paths start at `/`, so hosting at the root of a domain/subdomain works directly. Hosting under a path such as `/student-resources/` requires adjusting those paths or supplying a compatible route setup. The app module, CSS, logo, JSON, and download URLs must all resolve under the chosen location. See `INTEGRATION.md` before moving into a university platform.
