// Phase4 additional new finding for block gate
const fs = require("fs");
const name = process.argv[2];
fs.readFileSync(name); // path traversal-ish / user-controlled path
eval(name);
