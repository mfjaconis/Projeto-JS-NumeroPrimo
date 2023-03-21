// Escreva um programa que verifique se um número é primo ou não e exiba a mensagem no console.

function verificar() {
    let numero = parseInt(document.getElementById('numero').value)
    let resultado = document.getElementById('resultado')
    let divisores = 0

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;

            if (divisores == 2) {
                resultado.innerHTML = `O numero ${numero} é primo`
            } else {
                resultado.innerHTML = `O numero ${numero} não é primo`
            }
        }

    }
}

