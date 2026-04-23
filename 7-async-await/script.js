/*
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
*/

//Second section 

async function fetchHumans() {
  const response = await fetch('https://swapi.py4e.com/api/species/1/')
  return response.json()
}

//Shows human json
async function showHumans(){
const data = await fetchHumans()
console.log(data)
};

showHumans();

//Shows first human
async function showFirstHuman(){
const species = await fetchHumans();

const response = await fetch(species.people[0]);
const firstHuman = await response.json();

console.log(firstHuman);
};

showFirstHuman();

//Display the name of all characters of a species
async function fetchSpeciesName(id){
  const response = await fetch(`https://swapi.py4e.com/api/species/${id}/`);
  const species = await response.json();
  const peopleData = await Promise.all(
  species.people.map(async url => {
      const res = await fetch(url);
      return await res.json();
    })
  );
  peopleData.forEach(person => {
    console.log(person.name);
  });
}

fetchSpeciesName(1);
