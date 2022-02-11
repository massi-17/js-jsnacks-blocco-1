// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.



for (let i = 0; i < 5; i++ ) {

    let numero = parseFloat(prompt('Inserisci un numero'));
    

    if (isNaN (numero)) {

        alert('Non è un numero valido!');
        numero = parseInt(prompt('Inserisci un numero'));
     
    }

    console.log('Il cubo del numero ' + numero * numero * numero)
}