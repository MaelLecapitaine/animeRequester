const buttonReset = document.getElementById("buttonReset");
const barreRecherche = document.getElementById("motclef");
const select_type = document.getElementById("select_type");

//Boutton effacer : retourne au stade de base de la page
buttonReset.addEventListener('click', reset);

function reset() {
    window.location.reload(true)
}

export function getMotClef() {
    return barreRecherche.value;
}

export function getTypeRecherche() {
    return select_type.value;
}

// fonction pour afficher les cartes deux par colonne :
export function afficherCartes(jsonAnime) {
    const container = document.getElementById('cards');
    container.innerHTML = '';
    console.log(jsonAnime);
    jsonAnime.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = anime.title;
        card.appendChild(title);

        const img = document.createElement('img');
        img.src = anime.image;
        img.alt = anime.title;
        card.appendChild(img);

        const synopsis = document.createElement('p');
        synopsis.textContent = "Synopsis : " + anime.synopsis;
        card.appendChild(synopsis);

        const genres = document.createElement('p');
        genres.innerHTML = '<i class="fa-solid fa-palette"></i> Genres : ' + anime.genres.join(", ");
        card.appendChild(genres);

        const ranking = document.createElement('p');
        ranking.innerHTML = '<i class="fa-solid fa-ranking-star"></i> Ranking : ' + anime.ranking;
        card.appendChild(ranking);

        const episode = document.createElement('p');
        episode.textContent = "Episodes : " + anime.episodes;
        card.appendChild(episode);

        container.appendChild(card);
    });
}