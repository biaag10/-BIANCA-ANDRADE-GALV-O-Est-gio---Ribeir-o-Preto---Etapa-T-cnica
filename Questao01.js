/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
informado pertence ou não a sequência.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function PertenceFibonacci(numero) {
    let a = 0, b = 1;
    if (numero == a || numero == b) return `${numero} --> pertence à sequência de Fibonacci`;

    let proximoNumero = a + b;
    while (proximoNumero <= numero) {
        if (proximoNumero === numero) return `${numero} --> pertence à sequência de Fibonacci.`;
        a = b;
        b = proximoNumero;
        proximoNumero = a + b;
    }
    return `${numero} --> não pertence à sequência de Fibonacci.`;
}

readline.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", numeroDoUsuario => {
    console.log(PertenceFibonacci(parseInt(numeroDoUsuario)));
    readline.close();
});
