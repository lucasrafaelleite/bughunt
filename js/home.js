/* Vantagens */
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


/* Blog */
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