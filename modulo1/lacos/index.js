//EXERCÍCIOS DE INTERPRETAÇÃO
// 1. O código está estabelecendo um ciclo, isto é, um looping, para executar o codigo enquanto o valor de i for menor que 5.
//O resultado será a soma dos numeros menores que 5: 1, 2, 3, 4, o que valerá 10.


//2.a) Os números do array que são maiores que 18, neste caso: 19, 21, 23, 25, 27, 30.

//b) Sim, apenas excluindo o if do codigo e deixando o console.log(numero). Assim:
/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista) {
    console.log(numero)
} */

//3. *, **, ***, ****


//EXERCICIOS DE ESCRITA'
//1.

let bichinhos = Number(prompt("Digite quantos bichinhos de estimação você tem"))
let nomesBichinhos = []
if(bichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
    
}else if (bichinhos > 0) {
    for(let i = 0; i < bichinhos; i++) {
        nomesBichinhos.push(prompt("Quais são o(s) nome(s)?"))
    }
}console.log(nomesBichinhos)