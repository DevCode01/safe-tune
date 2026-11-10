#!/usr/bin/env node
// JSON pretty-printer and validator.
const fs = require("fs");

let input = "";
if (process.argv[2]) {
  input = fs.readFileSync(process.argv[2], "utf8");
} else {
  input = fs.readFileSync(0, "utf8");
}

try {
  const data = JSON.parse(input);
  const minify = process.argv.includes("-m") || process.argv.includes("--minify");
  console.log(JSON.stringify(data, null, minify ? 0 : 2));
} catch (e) {
  console.error(`Invalid JSON: ${e.message}`);
  process.exit(1);
}
