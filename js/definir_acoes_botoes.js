// Evento para o botão Assistir agora
document.querySelector('.filme-destaque .botao-assistir-agora').addEventListener('click', () => {
    document.querySelector('.assistir-filme-destaque iframe').style.display = 'block';
    window.location.href = '#assistir-filme-destaque';
    document.querySelector('.assistir-filme-destaque iframe').click();

});

// Evento para o botão Mais informações
document.querySelector('.filme-destaque .botao-mais-informacoes').addEventListener('click', () => {
    window.open('https://www.themoviedb.org/tv/1425-house-of-cards');
});

// Evento para o botão Ir para o topo
document.querySelector('.ir-para-topo i').addEventListener('click', () => {
    window.scrollTo(0,0);
});

window.onscroll = () => {
    if (window.scrollY != 0) {
        document.querySelector('.ir-para-topo').style.display = 'block';
    } else {
        document.querySelector('.ir-para-topo').style.display = 'none';
    }
};