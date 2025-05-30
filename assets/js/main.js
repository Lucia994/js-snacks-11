console.log("Hello");
/*Traccia: L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore*/

//Steps
// Step -1 Richiesta Utente primo numero 
const userNumber1 = Number(prompt("Inserisci primo numero"));


// Step -2 Richiesta Utente secondo numero 
const userNumber2 = Number(prompt("Inserisci secondo numero"));

// Step 3 - Confronto e stampa del maggiore
if ( userNumber1> userNumber2) {
    console.log("Il numero maggiore è:", userNumber1);
} else if (userNumber1 > userNumber2) {
    console.log("Il numero maggiore è:", userNumber2);
} else {
    console.log("I numeri sono uguali.");

}