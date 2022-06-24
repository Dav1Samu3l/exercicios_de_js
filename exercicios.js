// function mediaDosNumeros(arrayNumeros) {
//     let soma = 0
//     for (let i = 0; i < arrayNumeros.length; i++) {
//         soma = soma + arrayNumeros[i] / arrayNumeros.length

//     }
//     return soma 
// }

// console.log(mediaDosNumeros([5,6,7,4,5,3]));


// um quadrado de asteristicos

// function imprimeQuadrado(n) {

//   var asterisco = "";
//   for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= n; j++) {
//       asterisco = asterisco + "*";
//     }
//     console.log(asterisco);
//     asterisco = "";
//   }
// }
// console.log(imprimeQuadrado(15))




// palindromo



function pal(palavra) {

  var palindromo = "";

  for(var i = palavra.length - 1; i >= 0; i--) {
    palindromo += palavra[i]
  }
  if (palavra == palindromo) {
    return "SIM, SOU UM PALÍNDROMO"
  } else {
    return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
  }
}

console.log(pal('ovo'));

// printar seguencia de numeros DENTRO array 

function arrayNumeros(num) {
  let numbers = new Array();
  for (var i = 0; i <= num; i++) {
      numbers.push(i);
  }
  return numbers;
}
console.log(arrayNumeros(10));

// printar seguencia de numeros fora array 


function sequancia(num) {
  let numbers = new Array();
  for (var i = 0; i <= num; i++) {
    numbers =  numbers + i
  }
  return numbers;
}
console.log(sequancia(10));


// até o numro do parametro sendo primo num novo array

function primeNumbers(num) {
  let numbers = new Array();
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)){
      numbers.push(i);
    }
  }
  return numbers;

}

function isPrime(num) {
  for(let i = 2; i <num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}
console.log(primeNumbers(13));









// Crie uma função que retorna a soma de todos os bimestres do aluno
// Recebendo os parâmetros, sendo

// nota1
// nota2
// nota3
// nota4

function notas1 (nota1, nota2, nota3, nota4){
  let x = nota1 + nota2 + nota3 + nota4
 if (isNaN(x)) {
  return 'a funcao so pode receber numeros!'
 }else{
  return x 
 }
}
console.log(notas1(1,3,3,'s'))
console.log(notas1(1,3,3,5))

console.log("--------------")


function notas (nota1, nota2, nota3, nota4){
  let soma = nota1 + nota2 + nota3 + nota4
  if(typeof  nota1 === 'number' && typeof  nota2 === 'number' && typeof  nota3 === 'number' && typeof  nota4 === 'number'){
      return soma
  }else {
      return 'a funcao so pode receber numeros'
  }
}
console.log(notas(8, 5, 5,'s'))
console.log(notas(1,3,3,5))



function sixToast(num) {
  if (num < 6){
  return 6 - num
  } else 
  return num -6; 
}


console.log(sixToast(17));




function tocaBnjo(params) {
 for (let i = 0; i < params.length; i++) {


   if(params[0].toUpperCase() == "R"){
     return `${params} esta tocando banjo `
   }else{
     return `${params} nao esta tocando banjo`
   }
 }
 }
console.log(tocaBnjo("davi"));
console.log(tocaBnjo('raia'));
console.log(tocaBnjo('Raia'));
//////////////////////////////////////////////////////////////
function playBanjo (nome) {
  if( nome[0] == "R" ||  nome[0] == 'r'){
    return `${nome} esta tocando banjo `
  }else{
    return `${nome} nao esta tocando banjo`
  }

}
console.log(playBanjo("davi"));
console.log(playBanjo('raia'));
console.log(playBanjo('Raia'));




function nome(x) {
  let letra;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 'd') {
       letra = 'sim'

    }
    else {
     letra = 'nao'
    }
    return letra


  }}
  console.log(nome(["davi"]));

/* se em algum lugar do comprimento da string tiver  a letra  "a", retorno a quantidade de "a"s que tem na string*/


function letra(palavraOuFrase, ...letra) {
  let totalDeLetras = 0
  for (let i = 0; i < palavraOuFrase.length; i++) {
    totalDeLetras++
    if (palavraOuFrase[i] == letra) {
      return `O total de letras  "${ letra}" na palavra ou frase ${palavraOuFrase } é: ${totalDeLetras } `
    }
  }

}
console.log(letra("banana", 'b'));
console.log(letra("banana", 'n'));
console.log(letra("banana", 'a'));



