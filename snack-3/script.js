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

// let newArray =[];
// // TERZA PARTE
// for(let x = 0; x < serieA.length; x++){
//     const {nome, falli} = serieA[x];
//     newArray[x] ={nome, falli};
// }
// console.log(newArray);

//PARTE 4
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!!
//      :allegria::allegria:) i dati relativi 
// alle squadre evidenziando in giallo la riga corrispondente 
// alla squadra con più falli subiti.
let table = document.getElementById("contenitore");
let falliPiuAlti;
let falliMinore = 0;
for (let x = 0; x < serieA.length; x++) {
    const { falli } = serieA[x];
    if (falli > falliMinore){
        falliPiuAlti = serieA[x];
        falliMinore = falli;
        table.innerHTML += `
        <ul>
            
        </ul>
        `
    }
}
for(let x = 0; x < serieA.length; x++){
    const { nome, punti, falli } = serieA[x];
    table.innerHTML +=
    `
    <ul>
        <li>${nome}</li>
        <li>${punti}</li>
        <li>${falli}</li>
    </ul>
    `
}
console.log(serieA);