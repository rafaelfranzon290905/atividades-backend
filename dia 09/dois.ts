import * as leitor from "readline-sync"

function main(){
    
    const nome = leitor.question("Insira o nome do item: ")
    const preco = leitor.questionFloat("Insira o valor do item: ")
    const desconto = leitor.questionInt("Insira o desconto(%) do item: ")
    

    const descontado = preco - (preco * desconto / 100)

    console.log(`O produto é uma ${nome}, que custa originalmente R$ ${preco}, mas está com ${desconto}% de desconto, ficando ${descontado}`)
}

main()