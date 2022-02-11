// JSnack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.


let numeri = [];
   

for (let i = 0; i < 5; i++ ) {
    let numero = parseFloat(prompt('Inserisci un numero'));
    numeri.push(numero);
}


let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}
console.log('La somma dei numeri è ' + somma);



// let numeri = [];

// while (numeri.length < 5 ) {
//     let numero = parseFloat( prompt ('Inserisci un numero') )
//     if (numero !== isNaN)
//     numeri.push(numero)
// }

  
// let somma = 0
// for(i = 0; i < 5; i++){
//     somma += numeri[i]
// }

// console.log('La somma dei numeri è ' + somma);