import * as leitor from "readline-sync"

function main(){
    
    const ontem = leitor.questionFloat("Insira o tempo que você gastou no celular ontem: ")
    const hoje = leitor.questionFloat("Insira o tempo que você gastou no celular hoje: ")

    function timeSpent(ontem, hoje) {
        if (ontem > hoje) {
            console.log("Você passou mais tempo no celular ontem do que hoje")
        }
        else if (ontem === hoje) {
            console.log("você passou a mesma quantidade de tempo nos dois dias")
        }
        else {
            console.log("Você passou mais tempo no celular hoje do que ontem")
        }
    }

    timeSpent(ontem, hoje)

}

main()