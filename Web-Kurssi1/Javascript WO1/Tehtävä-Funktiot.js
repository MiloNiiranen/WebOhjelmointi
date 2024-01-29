function tarkistaSahkoposti(sahkoposti) {
    return sahkoposti.includes("@");
}

var readline = require('readline-sync');
var syotettySahkoposti = readline.question("Syötä sähköpostiosoite: ");
var onKelvollinen = tarkistaSahkoposti(syotettySahkoposti);

if (onKelvollinen) {
    console.log("Sähköpostiosoite on kelvollinen.");
} else {
    console.log("Sähköpostiosoite ei ole kelvollinen.");
}
