const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Please provide two arguments.");
} else {
  const [arg1, arg2] = args;
  console.log(`${arg1} is ${arg2}`);
}