//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);

//4.2 Application

for (const restriction of Object.values(data)) {
  const {texte, dateDebut, dateFin} = restriction
  console.log(dateDebut,dateFin,texte)
}

function getNextSEMKey() {
  const keys = Object.keys(data);                 
  if (keys.length === 0) return "SEM_10000";

  const maxNumber = keys
    .map(k => parseInt(k.split("_")[1]))
    .reduce((max, num) => (num > max ? num : max), 0);

  return "SEM_" + (maxNumber + 1);
}

function addPertubation({
  type= "restriction_ltc",
  id,
  dateDebut,
  dateFin,
  heureDebut= "00:00:00",
  heureFin= "00:00:00",
  latitude= -1,
  longitude= -1,
  weekEnd,
  listeLigneArret,
  texte, 
  plan= "https://www.tag.fr/include/downloadInfoCompPerturbation.php?f=RESTEZ_En_ligne_031218.pdf",
  visibleTC= true,
  visibleVoiture= false,
  visibleVelo= false,
  visibleVenteTitres= false,
  visibleBandeauSite= false,
  visibleBandeauAppli= false
  } = {}){
    if (!id) {
    console.error("Cannot add perturbation without an id!");
    return;
  }
  const key = getNextSEMKey();
  data[key] = {
    type,
    id,
    dateDebut,
    dateFin,
    heureDebut,
    heureFin,
    latitude,
    longitude,
    weekEnd,
    listeLigneArret,
    texte,
    plan,
    visibleTC,
    visibleVoiture,
    visibleVelo,
    visibleVenteTitres,
    visibleBandeauSite,
    visibleBandeauAppli
  };
}

function displayAll(...toDisplay) {
  toDisplay.forEach(el => console.log(el));
}