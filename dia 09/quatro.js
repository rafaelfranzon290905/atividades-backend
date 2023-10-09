"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var salario = leitor.questionFloat("Insira o valor do salário: ");
    var inss;
    var irrf;
    inss = INSS(salario);
    irrf = IRRF(inss);
    function INSS(salario) {
        if (salario <= 1320) {
            return salario * 0.925;
        }
        else if (salario > 1319 && salario < 2572) {
            return (salario - 1329) * 0.91;
        }
        else if (salario > 2570 && salario < 3856) {
            return (salario - 2572) * 0.88;
        }
        else if (salario > 3856) {
            return salario * 0.86;
        }
        else {
            console.log("Valor inválido");
            return 0;
        }
    }
    function IRRF(salario) {
        if (salario <= 2112) {
            return salario;
        }
        else if (salario > 2112 && salario <= 2826) {
            return salario * 0.925;
        }
        else if (salario > 2826 && salario <= 3751) {
            return salario * 0.85;
        }
        else if (salario > 3751 && salario <= 4664) {
            return salario * 0.785;
        }
        else if (salario > 4664) {
            return salario * 0.725;
        }
        else {
            console.log("Valor inválido");
            return 0;
        }
    }
    console.log("O sal\u00E1rio bruto \u00E9 de ".concat(salario));
    console.log("O desconto do INSS \u00E9 de ".concat(inss));
    console.log("O sal\u00E1rio l\u00EDquido \u00E9 ".concat(irrf));
}
main();
// Escreva uma função que receba o valor bruto do salário, faça os descontos de INSS
//e IRRF (baseado em porcentagem real) e faça um log mostrando o valor do salário
//bruto, o valor dos descontos e o valor do salário líquido.
