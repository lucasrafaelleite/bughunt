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

/* Blog */
if (document.querySelector('.blog')) {
    document.querySelector('.blog__list .splide__list').innerHTML = '<img src="../img/loading.gif" style="display:block; width:50px; margin:auto; position:absolute; left:50%; margin-left:-25px">';
    function fetchPosts() {
        fetch('https://blog.bughunt.com.br/ghost/api/v3/content/posts/?key=aae82e19f1c2be980863c0bb5f')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
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