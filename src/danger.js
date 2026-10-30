// Phase4 second-commit finding (new vs baseline)
const { exec } = require("child_process");
const input = process.env.CMD || "id";
exec(input, (err, stdout) => {
  console.log(stdout);
});
eval("console.log(" + JSON.stringify(input) + ")");
