import * as leitor from "readline-sync"

function main(){
    
    const adultos = leitor.questionInt("Quantas crianças tem na festa: ")
    const criancas = leitor.questionInt("Quantos adultos tem na festa: ")
    
    

    const total = adultos + criancas

    console.log(`A festa tem ${total} pessoas no total`)
}

main()