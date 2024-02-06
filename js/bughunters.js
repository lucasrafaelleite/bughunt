window.onload = async function() {

    /* listagem do ranking  -------- */
    var BugHuntes = '';
    const gerarBugHuntes = axios.get('https://api.bughunt.com.br/ranking/general')
        .then(function (response) {
            var items = response.data.items;
            var blocos = document.querySelectorAll('section.ranking .grid .item');
            var count = 0;
            var limit = 15;

            blocos.forEach(bloco => {
                if (count <= limit) {
                    var pontos = items[count].score + ' pontos';
                    bloco.querySelector('h4').innerText = items[count].username;
                    bloco.querySelector('img').src = items[count].avatar;
                    bloco.querySelector('p').innerText = pontos;
                }
                count++;
            });
        })
        .catch(function (error) {
            return error;
        })
    BugHuntes = await gerarBugHuntes;
    /* -------------------------*/

}