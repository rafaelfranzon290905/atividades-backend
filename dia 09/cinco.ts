import * as leitor from "readline-sync"

function main(){
    
    const numero1 = leitor.questionInt("Digite o primeiro número: ")
    const numero2 = leitor.questionInt("Digite o segundo número: ")
    const numero3 = leitor.questionInt("Digite o terceiro número: ")
    
    function soma(num1, num2, num3) {
        let resultado = num1 + num2 + num3
        return resultado
    }

    function subtracao(num1, num2, num3) {
        let resultado = num1 - num2 - num3
        return resultado
    }

    function multiplicao(num1, num2, num3) {
        let resultado = num1 * num2 * num3
        return resultado
    }

    function divisao(num1, num2, num3) {
        let resultado = num1 / num2 / num3
        return resultado
    }

    console.log(`A soma resulta em ${soma(numero1, numero2, numero3)}`)
    console.log(`A subtração resulta em ${subtracao(numero1, numero2, numero3)}`)
    console.log(`A multiplicação resulta em ${multiplicao(numero1, numero2, numero3)}`)
    console.log(`A divisão resulta em ${divisao(numero1, numero2, numero3)}`)
}

main()