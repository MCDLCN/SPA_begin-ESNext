// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second() {
  return sleep(100).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

first();
second();
third();
