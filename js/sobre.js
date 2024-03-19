document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide__cenario', {
        perPage: 3,
        pagination:false,
        gap: 15,
        breakpoints: {
            768: {
                perPage: 1,
            },
            998: {
                perPage: 2,
            }
        },
    })
    splide.mount();
});