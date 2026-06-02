const teladesafio = document.querySelectorAll(".teladesafio")
// teladesafio.forEach(tela => {
//   tela.classList.remove("telaselecionada")
// })
function trocarTela(tela){
    teladesafio.forEach(tela => {
      tela.classList.remove("telaselecionada")
    })
    teladesafio[tela-1].classList.add("telaselecionada")
}