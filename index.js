//Passo 1: chamar o botão para uma constante no JS
const botao = document.querySelector(".botao-plataforma");
//Seletor é TUDO o que vem antes da chave {} no css

//Passo 2: chamar agora as plataformas para uma constante 
const elementoPlataformas = document.querySelector(".botao-plataforma .plataformas");

//Passo 3: colocar uma "escuta" nas ações do usuário. Quem vem primeiro é quem vai disparar a ação
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
    // ondeVaiMexer.oQueVaiMexer.toggle("o que vai alternar constando ou não do oQueVaiMexer, no caso, a classe")
});