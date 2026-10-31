#!/usr/bin/env python3
"""Refresh guide downloads and package the complete portable project without credentials."""
import pathlib,zipfile,shutil
root=pathlib.Path(__file__).resolve().parents[1]
destination=root/'dist/downloads/uccs-resource-hub-source.zip'
destination.parent.mkdir(exist_ok=True)
shutil.copyfile(root/'README.md',root/'dist/README.md')
guide_destination=root/'dist/guides'
guide_destination.mkdir(exist_ok=True)
for source in (root/'docs').iterdir():
    if source.is_file() and source.suffix in ['.md','.json']:
        shutil.copyfile(source,guide_destination/source.name)
files=[root/'README.md',root/'AGENTS.md',root/'package.json',root/'.gitignore',root/'.openai/hosting.json']
for folder in ['dist','src','scripts','docs']:
    files += [p for p in (root/folder).rglob('*') if p.is_file() and 'downloads' not in p.parts and '__pycache__' not in p.parts]
with zipfile.ZipFile(destination,'w',zipfile.ZIP_DEFLATED) as z:
    for p in sorted(set(files)):
        z.write(p,'uccs-resource-hub/'+str(p.relative_to(root)))
print(destination)
