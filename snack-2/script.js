//PRIMA PARTE
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le
//  altre saranno tutte settate a 0.
//SECONDA PARTE
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti.
//TERZA PARTE
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e
//  falli subiti e stampiamo tutto in console.


// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }


//PRIMA PARTE
const randomNumber = (min, max) => Math.floor(Math.random()* (max - min + 1) + min);


let serieA =[
    {nome: "Lazio", punti: 0, falli: 0},
    {nome: "Roma", punti: 0, falli: 0},
    {nome: "Napoli", punti: 0, falli: 0}
]
// SECONDA PARTE
for(let x = 0; x < serieA.length; x++){
    serieA[x].punti = randomNumber (0, 100);
    serieA[x].falli = randomNumber (0, 100);
}

console.log(serieA);

let newArray =[];
// TERZA PARTE
for(let x = 0; x < serieA.length; x++){
    const {nome, falli} = serieA[x];
    newArray[x] ={nome, falli};
}
console.log(newArray);