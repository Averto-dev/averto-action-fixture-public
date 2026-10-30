// Averto Phase4 blocking-finding fixture
const userInput = process.argv[2] || "";
// nosemgrep would defeat the proof — leave detectable sinks
eval(userInput);
new Function(userInput)();
console.log("hello", userInput);
// fork PR identity proof 20261030T115651Z
// fork skip re-prove 20261030T145151Z
