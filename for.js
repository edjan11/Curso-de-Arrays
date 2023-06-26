const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez => let indice = 0
// Segunda expressão: é uma condição de execução => indice < 6
// Terceira expressão: é executada sempre ao final do bloco => indice++

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

