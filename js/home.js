/* Vantagens */
if (document.querySelector('.lista__vantagens')) {
    var splide_vantagens = new Splide( '.lista__vantagens', {
        type : 'loop',
        perPage: 4,
        gap: 60,
        breakpoints: {
            640: {
            },
        },
    })
    splide_vantagens.mount();
}


/* Blog */
if (document.querySelector('.blog__list')) {
    var splide__blog = new Splide( '.blog__list', {
        perPage: 2,
        gap: 15,
        autoWidth: true,
        breakpoints: {
            640: {
            },
        },
    })
    splide__blog.mount();
}



/* Duvidas */
var duvidas = document.querySelectorAll('section.duvidas ul li');
if (duvidas) {
    duvidas.forEach(duvida => {
        duvida.addEventListener('click', function() {
            let atual = this.querySelector('.content');
            atual.classList.toggle('ativo');
        })
    })
}