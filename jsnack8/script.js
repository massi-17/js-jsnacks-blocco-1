// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.






let numero = prompt ('Inserisci un numero di 4 cifre');
while (isNaN(numero) || numero < 1000 || numero > 9999) {
    alert("Non sono 4 cifre!");
    numero = prompt ('Inserisci un numero di 4 cifre');
}

console.log(numero);
let cifre = numero.split(''); 


cifre = numero.split('');    




let numeri = [];



for (i = 0; i < cifre.length; i++){

    numeri.push(parseInt(cifre[i]))
   
}
console.log(numeri)




let totale = 0;

for (i = 0; i < numeri.length; i++){
    totale += numeri[i]
}
console.log('Il totale è: ' + totale)