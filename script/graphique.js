const buttonReset = document.getElementById("buttonReset");
const barreRecherche = document.getElementById("motclef");
const select_type = document.getElementById("select_type");
var LightMode = true;


let buttonDarkMode = document.getElementById("buttonDarkMode");
//Boutton effacer : retourne au stade de base de la page
buttonReset.addEventListener('click', reset);

buttonDarkMode.addEventListener('click',changerMode);

function changerMode(){
    let link = document.querySelector("link[rel='stylesheet'");
    if (LightMode){
        link.href = 'style/styleDarkMode.css';
        LightMode = false;
    }
    else {
        link.href = 'style/styleLightMode.css';
        LightMode = true;
    }
    document.body.classList.toggle('dark-mode');
    // Change le texte du bouton en fonction du mode
    if (document.body.classList.contains('dark-mode')) {
        buttonDarkMode.textContent = "Désactivez le dark mode";
    } else {
        buttonDarkMode.textContent = "Activez le dark mode";
    }
}
function reset() {
    window.location.reload(true)
}

export function getMotClef() {
    return barreRecherche.value;
}

export function getTypeRecherche() {
    return select_type.value;
}

export function getGenreRecherche(){
        let genres = [
        "Award Winning",
        "Action",
        "Suspense",
        "Horror",
        "Ecchi",
        "Avant Garde",
        "Sports",
        "Supernatural",
        "Fantasy",
        "Gourmet",
        "Boys Love",
        "Drama",
        "Comedy",
        "Mystery",
        "Girls Love",
        "Slice of Life",
        "Adventure",
        "Romance",
        "Sci-Fi",
        "Erotica",
        "Hentai"
    ];

    let GenresSelec = [];
    let i = 0;
    genres.forEach(element => {
        if(document.getElementById(element).checked){
            GenresSelec[i] = element;
            i += 1;
        }
    });
    console.log(GenresSelec);
    return GenresSelec;
}

// fonction pour afficher les cartes deux par colonne :
export function afficherCartes(jsonAnime) {
    const container = document.getElementById('cards');
    container.innerHTML = '';
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
        episode.innerHTML = '<i class="fa-solid fa-film"></i> Episodes : ' + anime.episodes;
        card.appendChild(episode);

        container.appendChild(card);
    });
}

