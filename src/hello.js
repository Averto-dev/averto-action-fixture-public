// Averto Phase4 blocking-finding fixture
const userInput = process.argv[2] || "";
// nosemgrep would defeat the proof — leave detectable sinks
eval(userInput);
new Function(userInput)();
console.log("hello", userInput);
