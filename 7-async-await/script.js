
async function main() {
  console.log("- 1 - START of main function");

  // il n'est pas possible d'utiliser await en dehors d'une fonction async
  // vous devez donc appeler les fonctions que vous allez écrire ci dessous

  // wait 100 ms
  console.log("- 2 - BEFORE await");
  await new Promise( resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

console.log("= a = BEFORE main call");
main();
console.log("= b = AFTER main call");
