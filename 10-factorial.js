function factorial(n) {
  if (isNaN(n)) return 1;
  n = parseInt(n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
console.log(factorial(args[0]));