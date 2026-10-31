import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const baseline=JSON.parse(fs.readFileSync(path.join(root,'docs/PHASE2_DATA_BASELINE.json'),'utf8'));
for(const [file,expected] of Object.entries(baseline.sha256)){
  const actual=createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
  assert.equal(actual,expected,`${file} changed from the pre-Phase-2 data baseline`);
  console.log(`UNCHANGED ${file}`);
}
const data=JSON.parse(fs.readFileSync(path.join(root,'dist/data/resources.json'),'utf8'));
assert.equal(data.resources.length,baseline.resourceCount);
assert.equal(data.categories.length,baseline.categoryCount);
console.log(`PASS All ${data.resources.length} complete records and ${data.categories.length} categories are byte-for-byte preserved, including tags, descriptions, contacts, links, eligibility, and source notes.`);
