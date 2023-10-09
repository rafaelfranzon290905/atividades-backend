"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var numero1 = leitor.questionInt("Digite o primeiro número: ");
    var numero2 = leitor.questionInt("Digite o segundo número: ");
    var numero3 = leitor.questionInt("Digite o terceiro número: ");
    function soma(num1, num2, num3) {
        var resultado = num1 + num2 + num3;
        return resultado;
    }
    function subtracao(num1, num2, num3) {
        var resultado = num1 - num2 - num3;
        return resultado;
    }
    function multiplicao(num1, num2, num3) {
        var resultado = num1 * num2 * num3;
        return resultado;
    }
    function divisao(num1, num2, num3) {
        var resultado = num1 / num2 / num3;
        return resultado;
    }
    console.log("A soma resulta em ".concat(soma(numero1, numero2, numero3)));
    console.log("A subtra\u00E7\u00E3o resulta em ".concat(subtracao(numero1, numero2, numero3)));
    console.log("A multiplica\u00E7\u00E3o resulta em ".concat(multiplicao(numero1, numero2, numero3)));
    console.log("A divis\u00E3o resulta em ".concat(divisao(numero1, numero2, numero3)));
}
main();
