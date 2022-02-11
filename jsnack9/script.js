// Calcola la somma e la media dei primi 10 numeri.

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri);

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}
console.log('La somma dei numeri è: ' + somma);

let media = somma / 10;

console.log('La media dei numeri è: ' + media);
