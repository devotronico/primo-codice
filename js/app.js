
/*
serve a commentare il codice
*/

// CTRL + ù : attiva e disattiva codice 
// ALT + SHIFT + UP/DOWN : copia linea di codice 
// ALT + UP/DOWN : sposta linea di codice 

// var: variabile globale
// let: variabile locale
// const: costante
{
    const test = 123;
    test = 456;

    console.log(test);
    
}
const asd = 789;




let arma = '';

const buttone = Math.floor(Math.random() * 5) + 1;

console.log(buttone);


if (buttone === 1) {
    arma = 'pistola';
} else if (buttone === 2) {
    arma = 'fucile';
} else if (buttone === 3) {
    arma = 'bomba';
} else if (buttone === 4) {
    arma = 'asd';
}
else { arma = 'disarmato'; }

console.log(arma);


/*
let nicolaText = document.querySelector('span');
nicolaText.style.backgroundColor = 'yellow';
nicolaText.style.fontSize = '40px';
nicolaText.style.fontWeight = 'bold';
*/





const nome = 'broli';

let campoInput = document.querySelector('#campo-input');

campoInput.addEventListener('input', function() {
    if (this.value === nome) {
        let bottone = document.querySelector('#bottone');
        bottone.removeAttribute('disabled');
    } else {
        bottone.setAttribute('disabled', true);
    }
})


