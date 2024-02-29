setTimeout(() => {

    var menu = document.querySelector('header .menu ul');
    document.querySelector('.menu__responsivo .menu ul').innerHTML = menu.innerHTML;
    document.querySelector('.menu__responsivo .menu ul').innerHTML = document.querySelector('.menu__responsivo .menu ul').innerHTML + '<li><a href="contato">Fale conosco</a></li>';
    document.querySelector('.menu__responsivo .menu ul');

    document.querySelector('.openResponsivo').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.menu__responsivo').classList.toggle('ativo');
        document.querySelector('.openResponsivo').classList.toggle('ativo');
    })
}, 100);
