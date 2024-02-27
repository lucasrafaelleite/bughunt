/* Vantagens */
if (document.querySelector('.lista__vantagens')) {
    var splide_vantagens = new Splide( '.lista__vantagens', {
        type : 'loop',
        perPage: 3,
        gap: 30,
        breakpoints: {
            640: {
            },
        },
    })
    splide_vantagens.mount();
}


/* Duvidas */
setTimeout(() => {
    var duvidas = document.querySelectorAll('section.duvidas ul li');
    if (duvidas) {
        duvidas.forEach(duvida => {
            console.log(duvida);
            duvida.addEventListener('click', function() {
                let atual = this.querySelector('.content');
                atual.classList.toggle('ativo');
            })
        })
    }
}, 100);


/* Blog */
if (document.querySelector('.blog')) {
    document.querySelector('.blog__list .splide__list').innerHTML = '<img src="./img/loading.gif" style="display:block; width:50px; margin:auto; position:absolute; left:50%; margin-left:-25px">';
    function fetchPosts() {
        fetch('https://blog.bughunt.com.br/ghost/api/v3/content/posts/?key=aae82e19f1c2be980863c0bb5f')
        .then((response) => response.json())
        .then((data) => {
            var contador = 0;
            var items = '';
            for (const post of data.posts) {
                if (contador <= 6) {
                    items += `
                        <li class="splide__slide">
                            <div class="blog__post">
                                <a href="${post.url}" target="_blank" rel="noopener noreferrer"></a>
                                <img src="${post.feature_image}" alt="${post.title}">
                                <div class="blog__text">
                                    <small>BugHunt</small>
                                    <h4>${post.title}</h4>
                                </div>                    
                            </div>
                        </li>
                    `;   
                }
                contador++;
                document.querySelector('.blog__list .splide__list').innerHTML = items;
            }

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
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    setTimeout(() => {
        fetchPosts();
    }, 1000);   
}



/* Solucões */
var solucoes_menu = document.querySelectorAll('section.solucoes .solucoes__left h3');
if (solucoes_menu) {
    solucoes_menu.forEach(solucao => {
        solucao.addEventListener('click', function(e) {
            e.preventDefault();
            var openThis = this.getAttribute('data-open');

            // remove ativo
            solucoes_menu.forEach(solucao => {
                solucao.classList.remove('ativo');
            })

            // add ativo
            this.classList.add('ativo');


            // abri o bloco correto
            var solucoes_blocks = document.querySelectorAll('section.solucoes .solucoes__center.block');
            var solucoes_image = document.querySelector('section.solucoes .solucoes__right img');
            solucoes_blocks.forEach(block => {
                if (block.classList.contains(openThis)) {
                    block.style.display = 'block';
                    solucoes_image.setAttribute('src', './img/solucao-' + openThis + '.png');
                } else {
                    block.style.display = 'none';
                }
            });
        })
    });
}