// function mediaDosNumeros(arrayNumeros) {
//     let soma = 0
//     for (let i = 0; i < arrayNumeros.length; i++) {
//         soma = soma + arrayNumeros[i] / arrayNumeros.length

//     }
//     return soma 
// }

// console.log(mediaDosNumeros([5,6,7,4,5,3]));


// um quadrado de asteristicos

function imprimeQuadrado(n) {

  var asterisco = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      asterisco = asterisco + "*";
    }
    console.log(asterisco);
    asterisco = "";
  }
}
document.write(imprimeQuadrado(1))


