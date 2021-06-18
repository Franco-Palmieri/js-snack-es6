// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le 
// seguenti proprietà: nome e peso. Stampare a schermo
//  la bici con peso minore utilizzando destructuring 
//  e template literal. Risolvetelo prima in versione ES5, poi 
// commentate la versione in ES5 e fatelo in ES6

//VERSIONE ES5:

// var bici =[
//     {nome: "Deca", peso: 30},
//     {nome: "Treck", peso: 25}
// ]


// var bike;
// var pesoMinore;
// for (var x = 0; x < bici.length; x++){
    
//     var thisPeso = bici[x].peso;

//     if(typeof pesoMinore === "undefined" || thisPeso < pesoMinore){
//         bike = bici[x];
//         pesoMinore = thisPeso;
//     }
// }

// console.log(bike);

//VERSIONE ES6:

let bici =[
    {nome: "Deca", peso: 30},
    {nome: "Treck", peso: 25}
]


let bike;
let pesoMinore;
for (var x = 0; x < bici.length; x++){
    
    //var thisPeso = bici[x].peso;
    const { peso } = bici[x];

    if(typeof pesoMinore === "undefined" || peso < pesoMinore){
        bike = bici[x];
        pesoMinore = peso;
    }
}

console.log(bike);
