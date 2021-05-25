#!/usr/bin/env sh

mkdir -p ./dist/dist
mv ./dist/*.* ./dist/dist
cp ./{package*.json,README.md} ./dist
