// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second(sec) {
  return sleep(sec).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

/*
first();
second();
third();
*/


first().then(() => second(2000)).then(third);

//first().then(secondWithError).then(third);


//first().then(secondWithError).catch(error => console.log(error)).then(third);



//Second section 

function fetchHumans() {
  return fetch('https://swapi.py4e.com/api/species/1/')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err);
    });
}

//Shows human json
/*fetchHumans().then(data => {
  console.log(data);
});
*/

//Shows first human
/*fetchHumans().then(data => {
  fetch(data.people[0])
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err =>{
    console.error(err)
  })
});
*/

//Display the name of all characters of a species
function fetchSpeciesName(id){
  fetch(`https://swapi.py4e.com/api/species/${id}/`)
  .then(response => response.json())
  .then(species => {
    return Promise.all(
      species.people.map(url =>
        fetch(url).then(res => res.json())
      )
    );
  })
  .then(peopleData => {
      peopleData.forEach(person => {
        console.log(person.name);
      });
    })
    .catch(err => console.error(err));
}

//fetchSpeciesName(1);


//Third section

const button = document.createElement("button");
button.textContent = "OK";

document.body.appendChild(button);

const button2 = document.createElement("button");

button2.textContent = "Cancel";

document.body.appendChild(button2);

function buttoning(){
  return new Promise((resolve, reject) => {
    button.onclick = () => resolve("OK clicked");
    button2.onclick = () => reject("Cancel clicked");
    }
  );
}

buttoning()
.then(result => console.log("Success:", result))
.catch(error => console.log("Failure:",error))