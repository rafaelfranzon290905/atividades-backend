import * as leitor from "readline-sync"

function main(){
    
    const nome = leitor.question("Insira o nome do usuário: ")
    const os = leitor.question("Insira o Sistema operacional: ")
    
    function displayAlertMessage(user, os) {
        console.log( `There's a new sign-in request on ${os} for your Google Account ${user}.`)
    }


    displayAlertMessage(nome, os)
}

main()