"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome do item: ");
    var preco = leitor.questionFloat("Insira o valor do item: ");
    var desconto = leitor.questionInt("Insira o desconto(%) do item: ");
    var descontado = preco - (preco * desconto / 100);
    console.log("O produto \u00E9 uma ".concat(nome, ", que custa originalmente R$ ").concat(preco, ", mas est\u00E1 com ").concat(desconto, "% de desconto, ficando ").concat(descontado));
}
main();
