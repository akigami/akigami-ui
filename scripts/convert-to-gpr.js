#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(
  fs.readFileSync(packagePath, {
    encoding: 'utf-8',
  })
);

pkg.name = '@akigami/ui';

pkg.publishConfig = {
  access: 'public',
};

fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2), {
  encoding: 'utf-8',
});
