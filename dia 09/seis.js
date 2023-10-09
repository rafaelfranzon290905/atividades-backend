"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome do usuário: ");
    var os = leitor.question("Insira o Sistema operacional: ");
    function displayAlertMessage(user, os) {
        console.log("There's a new sign-in request on ".concat(os, " for your Google Account ").concat(user, "."));
    }
    displayAlertMessage(nome, os);
}
main();
