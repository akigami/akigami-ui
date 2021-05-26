#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const tagPath = path.resolve(__dirname, '../tag.txt');
const packagePath = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(
  fs.readFileSync(packagePath, {
    encoding: 'utf-8',
  })
);

const tag = fs.readFileSync(tagPath, {
  encoding: 'utf-8',
});

pkg.version = tag.trim().slice(1);

fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2), {
  encoding: 'utf-8',
});
