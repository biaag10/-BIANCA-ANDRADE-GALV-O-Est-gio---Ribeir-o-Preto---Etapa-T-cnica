/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
além de informar a quantidade de vezes em que ela ocorre.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function contagemLetraA(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra "a" aparece ${count} vezes.`;
    } else {
        return `A letra "a" não aparece na string.`;
    }
}

readline.question(`Digite uma string para verificar a ocorrência da letra "a" nela:`, stringDoUsuario => {
    console.log(contagemLetraA((stringDoUsuario)));
    readline.close();
});

