"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adultos = leitor.questionInt("Quantas crianças tem na festa: ");
    var criancas = leitor.questionInt("Quantos adultos tem na festa: ");
    var total = adultos + criancas;
    console.log("A festa tem ".concat(total, " pessoas no total"));
}
main();
