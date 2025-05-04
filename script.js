const botao = document.getElementById('meuBotao')

const mensagemDiv = document.getElementById('mensagem')

botao.addEventListener('click', function() {
    const novaMensagem = document.createElement('p');
    novaMensagem.textContent = 'Olá. Seja bem-vindo a minha página!';
    mensagemDiv.appendChild(novaMensagem);
});