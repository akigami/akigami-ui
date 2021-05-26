#!/usr/bin/env sh

mkdir -p ./dist/dist
mv ./dist/*.* ./dist/dist
cp ./package.json ./dist
cp ./package-lock.json ./dist
cp ./README.md ./dist
cp $NPM_CONFIG_USERCONFIG ./dist
