function add (a,b){
     console.log(Number(a)+Number(b));
}
const added = process.argv.slice(2);
add (added[0], added[1]);