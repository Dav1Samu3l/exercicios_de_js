// 1. Faça uma função que receba como parâmetro duas notas de uma pessoa estudante. Em seguida, você deve calcular a média dessas notas e atribuir a variável resultado a mensagem correspondente:
//  - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// - A mensagem "Reprovado", se a média for menor do que sete;
// - A mensagem "Aprovado com Distinção", se a média for igual a dez.


function media(nota1, nota2) {


    let soma = nota1 + nota2
    let media = soma / 2
    if (media === 10) {
        return "Aprovado com Distinção"
    }
    if (media > 7) {
        return 'Aprovado'
    }
    if (media < 7) {
        return 'Reprovado'
    }
}

console.log(media(10, 0))
console.log(media(10, 10))
console.log(media(10, 7))

console.log('--------------------');


//  2.  Crie uma função que verifique se uma pessoa pode votar ou não, de acordo com as condições abaixo e que retorne a mensagem correspondente:
// - Entre 0 e 15 anos: "Não pode votar";
// - 16, 17 e acima de 70 anos: "Voto facultativo";
// - Entre 18 e 69 anos: "Voto obrigatório".
function vota(idade) {
    if (idade > 18 && idade <= 69) {
        return "Voto obrigatório"
    }
    if (idade <= 15) {
        return "Não pode votar"
    }
    if (idade >= 16 || idade > 17 || idade >= 70) {
        return "Voto facultativo"
    }
}

console.log(vota(17))
console.log(vota(20))
console.log(vota(12))
console.log(vota(80))


console.log('---------------------');


// 3. Escreva uma função que receba como parâmetros o nome, o sobrenome, a idade e a cidade de uma pessoa, e que retorne uma concatenação com os dados fornecidos.

function pessoa(nome, sobrenome, idade, cidade) {
    return ` ${nome} ${sobrenome} ${idade} ${cidade}`

}
console.log(pessoa('davi', 'samuel da silva,', '30 anos,', "de Florianopolios"))

console.log('---------------------');




// 4. Crie uma função que, dada uma sequencia de números, retorne qual é o menor entre eles.
function menor(...n) {
    let numero = Math.min(...n)
    return ` o menor numero é o: ${numero} `
}
console.log(menor(30, 55, 69, 124, 2588, 1548, 445, 8))




// 5. Escreva uma função que calcule a soma de 1 a 1000 usando a estrutura de repetição for e retorne no formato: "A soma de 1 a 1000 é: x."
function somaTotal(n) {

    let total = 0
    for (let i = 1; i < 1000; i++) {
        total = total + i

    }
    return `A soma de 1 a 1000 é: ${total}  `
}
console.log(somaTotal());

console.log('---------------------');


// 6. Escreva uma função que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e retorne o resultado no seguinte formato: "Jogador 1 ganhou" ou "Empate" ou "Jogador 2 ganhou".

function jogo(jogador1, jogador2) {
    //let jogador1 = prompt('jogador 1 escolha entre Pedra, Papel ou tesoura')
    //let jogador2 = prompt('jogador 2 escolha entre Pedra, Papel ou tesoura')

    let resultado = ''
    if (jogador1 === jogador2) {
        return 'empate'
    }
    if (jogador1 == "tesoura" && jogador2 == "papel" || jogador1 == "papel" && jogador2 == "pedra" || jogador1 == "pedra" && jogador2 == "tesoura") {

        resultado = "jogador 1 ganhou"
    } else {
        resultado = 'jogador 2 ganhou'
    }



    return resultado

}
console.log(jogo('papel', 'tesoura'));

console.log('---------------------');



// 7. Crie uma função que receba 2 números e retorne a multiplicação e divisão entre eles.
function multDiv(a, b) {



    let multiplicação = a * b
    let divisão = a / b
    return `  ${a} X ${b} = ${multiplicação}  e  ${a} ÷ ${b} é ${divisão} `


} console.log(multDiv(3, 10));



console.log('---------------------');


// 8. Crie uma função que receba como parâmetro a nota de uma pessoa estudante e que retorne uma mensagem de acordo com a pontuação obtida.
// > NOTAS
// - abaixo de 10: PÉSSIMO
// - entre 11 e 30: RUIM
// - entre 31 e 50: REGULAR
// - entre 51 e 70: MEDIANO
// - entre 71 e 90: ÓTIMO
// - acima de 91: EXCELENTE

function mensagem(nota) {
    let mensagem;
    if (nota <= 10) {
        mensagem = 'PÉSSIMO'
    }
    else if (nota > 11 && nota < 30) {
        mensagem = 'RUIM'

    }
    else if (nota > 31 && nota < 50) {
        mensagem = 'REGULAR'
    }
    else if (nota > 51 && nota < 70) {
        mensagem = 'MEDIANO'
    }
    else if (nota > 71 && nota < 90) {
        mensagem = 'ÓTIMO'
    }
    else if (nota > 90) {
        mensagem = 'EXCELENTE'
    }



    return mensagem
}
console.log(mensagem(10));
console.log(mensagem(21));
console.log(mensagem(32));
console.log(mensagem(72));
console.log(mensagem(92));

console.log('---------------------');


// 9. Crie uma função que receba como parâmetro um array de números inteiros e que retorne APENAS o maior número dentre os informados.


function maior(...n) {
    let numero = Math.max(...n)
    return ` o maior numero é o: ${numero} `
}
console.log(maior(30, 55, 69, 124, 2588, 1548, 445, 8))


function maior1(meuArray) {
    var numero1 = 0;
    for (var i = 0; i < meuArray.length; i++) {
        if (meuArray[i] > numero1) {
            numero1 = meuArray[i]
        }
    } return ` o maior numero é o: ${numero1} `
}
console.log(maior1([30, 55, 69, 124, 2588, 1548, 445, 8]));

console.log('---------------------');


// 10. Crie uma função que receba como parâmetro uma array com várias idades diferentes. Depois imprima na tela quais são as que tem maioridade e quais são as que tem menoridade.


function idade(arr) {
    let maior = []
    let menor = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 18 && arr[i] < 65) {
            maior.push(arr[i])

        } else {
            menor.push(arr[i])

        }

    }

    return [maior, menor]
}
console.log(idade([20, 30, 40, 50, 10]))

function idade1(arr) {
    let maior = new Array
    let menor = new Array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > 18 && arr[i] < 65) {
                maior.push(arr[i])
            } else {
                menor.push(arr[i])
            }
            break
        }


    } return [maior, menor]
}
console.log(idade1([20, 30, 40, , 50, 11, 10, 20, 31, 16, 14]))

console.log('---------------------');


// 11. Crie uma função que receba uma array de números e verifica se cada um deles é divisível por 5. Se sim, armazene-os e retorne-os.

function divisible(arr) {
    let divisibleByFive = new Array
    let notIsDisvisible = new Array

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            divisibleByFive.push(arr[i])
        } else {
            notIsDisvisible.push(arr[i])
        }

    }
    return [divisibleByFive, notIsDisvisible]

}
console.log(divisible([65, 97, 82, 38, 57, 67, 12, 72, 86, 91, 54, 35, 1, 7, 21, 37, 42, 77, 3, 45, 60, 99, 16, 63, 39, 36, 85, 25, 10, 90, 18, 28, 70, 30, 89, 5, 31, 96, 81, 69, 23, 32, 76, 92, 29, 47, 74, 55, 100, 78
]));

console.log('---------------------');


// 12. Crie uma função que, dada uma sequência de caracteres, inverta o seu conteúdo e retorne ao usuário o resultado invertido.
function reverteString(params) {
    return params.split("").reverse().join('')/*split("") separa cada elemento e retorna uma string, reverse() é um metodo de array, como a split retorna um array o reverse inverte o array, o join retorna tudo junto*/
}
console.log(reverteString('davi samuel da silva'));



function reverseArray(params) {
    return params.reverse()
}
console.log(reverseArray(['davi', 'samuel', 'da', 'silva']));

function functionRecursiva(str) {
    if (str === '') {
        return '';
    } else {
        return (str.substr(1)) + str.charAt(0);
    }
}

console.log(functionRecursiva('davi samuel da silva'));

console.log('---------------------');



// 13. Crie uma função que receba como parâmetro uma string que armazene uma cor referente ao funcionamento de um semáforo e que retorne uma mensagem para cada cor, seguindo as condições abaixo:
// Se a cor for vermelho, retorne a mensagem "PARE!";
// Se a cor for amarelo, retorne a mensagem "ATENÇÃO!";
// Se a cor for verde, retorne a mensagem "PROSSIGA!";

function semaforo(cor) {
    if (cor === 'vermelho') {
        return "PARE!"
    } else if (cor === 'amarelo') {
        return 'ATENÇÃO!'
    } else if (cor === 'verde') {
        return "PROSSIGA!"
    }


}
console.log(semaforo("vermelho"));
console.log(semaforo("amarelo"));
console.log(semaforo("verde"));



console.log('---------------------');



// 14. Crie uma função que receba como parâmetro um número e atribua na variável resultado se o número é positivo ou se o número for negativo.
function parImpar(n) {
    if (n % 2 === 0) {
        return "par"

    } else {
        return "impar"
    }

}
console.log(parImpar(6));
console.log(parImpar(8565895485751745));


console.log('---------------------');

// 15. Faça uma função que receba como parâmetro dois números e que imprima na tela uma mensagem de acordo com as condições abaixo:
// "Números iguais", se os números sejam iguais;
// "O primeiro número é maior", se o primeiro seja maior que o segundo;
// "O segundo número maior", se o segundo seja maior que o primeiro.



function diferençaDosNumeros(a, b) {
    if (a === b) {
        return "Números iguais"

    } else if (a > b) {
        return "O primeiro número é maior"
    } else {
        return "O segundo número maior"
    }
}
console.log(diferençaDosNumeros(6, 6));
console.log(diferençaDosNumeros(7, 6));
console.log(diferençaDosNumeros(7, 8));


// 16. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.

function umADez(x) {
    let numeros=[]
    for (let i = 1; i <= 10; i++) {
          numeros.push(i)
          
    }
    return numeros
}
console.log(umADez());



// 17. Escreva uma função que imprima os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

function dezAUm(x) {
    let numeros=[]
    for (let i = 10; i >= 1; i--) {
        numeros.push(i) 
    
    }
    return numeros
}
console.log(dezAUm());


// 18. Escreva uma função que receba como parâmetro um array contendo números positivos e números negativos e que retorne em novos arrays quais são os números positivos e quais são os negativos

function positivoEnegatios(arr) {
    let negativo= new Array
    let positivo = new Array

    for (let i = 0; i < arr.length; i++) {
      if( arr[i] < 0){
        negativo.push(arr[i])
      } if (arr[i] > 0) {
        positivo.push(arr[i])
      }  

    }
    return [positivo , negativo]

}
console.log(positivoEnegatios([-1,2, 65, 97, 82, 38, 57, 67, -12, 72, -86, 91, -54, 35, -1, 7, 21, 37, 42, 77, 3, 45, 60, 99, 16, 63, 39, 36, 85, 25, 10, -90, 18, 28, 70, 30, -89, 5, 31, 96, 81, -69, 23, 32, 76, 92, 29, -47, 74, 55, 100, 78 ] ));