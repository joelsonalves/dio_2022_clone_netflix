const botoes_filme_destaque = document.querySelectorAll('.filme-destaque .botao');
// Evento para o botão Assistir agora
botoes_filme_destaque[0].addEventListener('click', () => {
    document.querySelector('.assistir-filme-destaque iframe').style.display = 'block';
    window.location.href = '#assistir-filme-destaque';
    document.querySelector('.assistir-filme-destaque iframe').click();

});
// Evento para o botão Mais informações
botoes_filme_destaque[1].addEventListener('click', () => {
    window.open('https://www.themoviedb.org/tv/1425-house-of-cards');
});