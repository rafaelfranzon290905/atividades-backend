"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var ontem = leitor.questionFloat("Insira o tempo que você gastou no celular ontem: ");
    var hoje = leitor.questionFloat("Insira o tempo que você gastou no celular hoje: ");
    function timeSpent(ontem, hoje) {
        if (ontem > hoje) {
            console.log("Você passou mais tempo no celular ontem do que hoje");
        }
        else if (ontem === hoje) {
            console.log("você passou a mesma quantidade de tempo nos dois dias");
        }
        else {
            console.log("Você passou mais tempo no celular hoje do que ontem");
        }
    }
    timeSpent(ontem, hoje);
}
main();
