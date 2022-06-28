// // oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)


// function oneThroughTwenty(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i)
//     }
// }
// oneThroughTwenty(5)
// // evensToTwenty - Retornar os números pares de 1 a 7. (2, 4, 6,…, )


// function oneThroughTwenty(n) {
//     for (let i = 1; i < n; i++) {
//         if(i % 2 == 0){
//             console.log(i) 
//         }
//     }
// }oneThroughTwenty(7);




// // oddsToTwenty - Retornar os números ímpares de 1 a 7. (1, 3, 5,…,)
// function oneThroughTwenty(n) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 !== 0){
//             console.log( i ) 
//         }
//     }
// }oneThroughTwenty(7);




// multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15...100)

// function múltiplosD5(n) {
//     let novo = new Array
//     for (let i = 1; i <= n; i++) {
//         if (i % 5 ==0) {
//             novo.push(i)
//         }
//     } 
//     return novo
// } console.log(múltiplosD5(15));






// squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)











// function  quadradosPerfeitos(n) {
//     let num = []
//     for (let i = 0; i <= n; i++) {  
//             num.push(i * i)
//     } 
//     return num 
// } console.log(quadradosPerfeitos(10));



// countingBackwards - Retornar os números contando de trás para frente de 5 até 1. (20, 19, 18, …, 2, 1)

// function oneThroughTwenty(n) {

//     for (let i = n; i >= 1; i--) {
//        console.log(i ) 
//     }

// }oneThroughTwenty(5);



//sorteio    

// function getRandom(jogador1, jogador2, jogador3) {
//     let ganhador; 
//     let result = parseInt( Math.random() * 30 )
//     console.log(result)
//     if(result <10 ){
//         ganhador = ` ${jogador1} ganhou!`;  
//     }
//     if (result >10 && result <20 ){
//        ganhador =` ${jogador2} ganhou!`;
//     }
//     if( result > 20)
//     {
//         ganhador =` ${jogador3} ganhou!`;  
//     }return   ganhador 


// } console.log(getRandom("davi", 'lucas' , 'rafa'))




// evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)







// function oneThroughTwenty(n) {

//     for (let i = n; i >= 1; i--) {

//         if( i % 2 == 0){

//             console.log(i) 
//         }
//     }

// }console.log(oneThroughTwenty(20));


// oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
// function oneThroughTwenty(n) {

//     for (let i = n; i >= 1; i--) {
//         if(i %2!==0)
//         console.log(i)
//     }

// } oneThroughTwenty(20);







// multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)


// function oneThroughTwenty(n) {

//     for (let i = n; i >= 1; i--) {
//         if(i %5 ==0)
//         console.log(i)
//     }

// } oneThroughTwenty(100);


// squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)




function  quadradosPerfeitos(n) {
    let num = []
    for (let i = n; i >= 0; i--) {  
            num.push(i**2)
    } 
    return num 
} console.log(quadradosPerfeitos(10));





