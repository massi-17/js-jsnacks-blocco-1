// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

const invitati = [
    'marco rossi',
    'luca bianchi',
    'davide verdi'
];


let check = false;

let utente = prompt('Scrivi il tuo nome');

for (let i = 0; i < invitati.length; i++) {

    const invitato = invitati[i]

    if (invitato == utente){
    check = true;
    }
    
}

if (check == true){
    console.log('Sei invitato')
} else {
    console.log('Non sei nella lista')
}
