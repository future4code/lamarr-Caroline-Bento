/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if (confirm("Bem vinde ao jogo de Blackjack! \nQuer iniciar uma nova rodada?")){
   let cartaUserUm = comprarCarta()
   let cartaUserDois = comprarCarta()
   let cartaUserTres = comprarCarta()
   let cartasUser = [cartaUserUm, cartaUserDois, cartaUserTres]
   

   let cartaPcUm = comprarCarta()
   let cartaPcDois = comprarCarta()
   let cartaPcTres = comprarCarta()
   let cartasPc = [cartaPcUm, cartaPcDois, cartaPcTres]
  

   switch (cartasUser[0,1]){
      case "A":
         cartaUserUm = comprarCarta()
         cartaUserDois = comprarCarta()
         cartaUserTres = comprarCarta()
         break
   } switch (cartasPc[0,1]){
      case "A":
         cartaPcUm = comprarCarta()
         cartaPcDois = comprarCarta()
         cartaPcTres = comprarCarta()
         break

   
   }if (confirm(`Suas cartas são ${cartaUserUm.texto} e ${cartaUserDois.texto}. A carta revelada do computador é ${cartaPcUm.texto}.\nDeseja comprar mais uma carta?`)){
         let somarUser = 0
         for(let i = 0; i < cartasUser.length; i++) {
            somarUser += cartasUser[i].valor
         }
         let somarPc = 0
         for(let i = 0; i < cartasPc.length; i++) {
            somarPc += cartasPc[i].valor
         }
         alert(`Usuário - Cartas: ${cartaUserUm.texto}, ${cartaUserDois.texto} e ${cartaUserTres.texto}  - Pontuação: ${somarUser}.\nComputador - Cartas: ${cartaPcUm.texto}, ${cartaPcDois.texto} e ${cartaPcTres.texto} - Pontuação: ${somarPc}.`)
   }else{
      let somaUser = cartaUserUm.valor + cartaUserDois.valor
      let somaPc = cartaPcUm.valor + cartaPcDois.valor + cartaPcTres.valor
     

      alert(`Suas cartas são ${cartaUserUm.texto} e ${cartaUserDois.texto}. Sua pontuação é ${somaUser}.\nAs cartas do computador são ${cartaPcUm.texto}, ${cartaPcDois.texto} e ${cartaUserTres.texto}. A pontuação do computador é ${somaPc}.`)
   }
      

    //else if (confirm(`Suas cartas são ${cartaUserUm} e ${cartaUserDois}. A carta revelada do computador é ${cartaPcUm}.\nDeseja comprar mais uma carta?`))
   
}else{
   confirm("O jogo acabou!")}
