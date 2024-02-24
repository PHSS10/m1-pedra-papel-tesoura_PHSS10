/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
    if(player1 == "Papel" && player2 == "Pedra" || player1 == "Tesoura" && player2 == "Papel" || player1 == "Pedra" && player2 == "Tesoura") {
        return "Jogador 1 venceu!"
    } else if (player2 == "Papel" && player1 == "Pedra" || player2 == "Tesoura" && player1 == "Papel" || player2 == "Pedra" && player1 == "Tesoura"){
        return "Jogador 2 venceu!"
    } else {
        return "Empate!"
    }
    }
console.log(playRockPaperScissor("Pedra","Papel"));