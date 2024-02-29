window.addEventListener("load", (event) => {

    var menu = document.querySelector('header .menu ul').innerHTML;
    document.querySelector('.menu__responsivo .menu ul').innerHTML = menu + '<li><a href="contato">Fale Conosco</a></li>';

    document.querySelector('.openResponsivo').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.menu__responsivo').classList.toggle('ativo');
        document.querySelector('.openResponsivo').classList.toggle('ativo');
    })
})
