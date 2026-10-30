// Phase4 block-gate trigger: brand-new fingerprint vs baseline b157be7
const child = require("child_process");
child.execSync(process.env.INJECT || "whoami");
eval(process.env.INJECT || "1+1");
