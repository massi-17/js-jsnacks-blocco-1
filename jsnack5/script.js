// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

const arrayVuoto = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt('Inserisci un numero'));

    if (!(numero % 2 == 0)) {
        arrayVuoto.push(numero);
    } 

    if (isNaN (numero)) {

        alert('Non è un numero valido!');
        numero = parseInt(prompt('Inserisci un numero'));
     
    }
}

console.log('Array composto dai seguenti numeri dispari: ' + arrayVuoto);