//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

let length = Object.keys(bus).length
for (let i = 0; i< length; i++){
    console.log(Object.keys(bus)[i],': ',Object.values(bus)[i])
}

//3.2 Object.values

for (const key in data) {
  const restriction = data[key];
  console.log(key, "->", restriction.texte);
}
