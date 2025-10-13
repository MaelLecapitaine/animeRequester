//Création du tableau des genres

// //const API_KEY = '04335e7f5cmshf46b5a783eaa1dep1b6fabjsn8dcb23c9ceb0';
// const API_KEY = 'e4b24267d8msh867b305ac429e47p1d21dejsnca24c7455727';
// let tabGenre = "";

// async function getGenres() {
//     const res = await fetch('https://anime-db.p.rapidapi.com/genre', {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': API_KEY,
//             'x-rapidapi-host': 'anime-db.p.rapidapi.com'
//         }
//     });
//     if (!res.ok) throw new Error('HTTP error ' + res.status);
//     return await res.json(); 
// }

// getGenres()
//     .then(dataGenre => {
//         console.log(dataGenre);
//         if (Array.isArray(dataGenre) && dataGenre[1]) {
//             console.log(dataGenre[1]._id);
//         }
//     })

//const API_KEY = '';
//Requete Par nom

//Demande Clé API de l'utilisateur


//const API_KEY = localStorage.getItem("clefAPI")
//const url='https://anime-db.p.rapidapi.com/anime?page=1&size=10&search='+ "tokyo" +'&sortBy=ranking&sortOrder=asc'

let titre = null;
let genres = [
    'Award Winning',
    'Action',
    'Suspense',
    'Horror',
    'Ecchi',
    'Avant Garde',
    'Sports',
    'Supernatural',
    'Fantasy',
    'Gourmet',
    'Boys Love',
    'Drama',
    'Comedy',
    'Mystery',
    'Girls Love',
    'Slice of Life',
    'Adventure',
    'Romance',
    'Sci-Fi',
    'Erotica',
    'Hentai'
];
let id = null;

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

export function API(API_K) {
    //Recherche Par titre

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    if (titre != null && genres == null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + titre + '&sortBy=ranking&sortOrder=asc');
    }

    else if (titre == null && genres != null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=' + genres + '&sortBy=ranking&sortOrder=asc');
    }

    xhr.setRequestHeader('x-rapidapi-key', API_K);
    xhr.setRequestHeader('x-rapidapi-host', 'anime-db.p.rapidapi.com');

    xhr.send(data);
}

export async function getByName(titref, API_K) {


    if (titref != null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + titref + '&sortBy=ranking&sortOrder=asc');
    }

    const res = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + titref + '&sortBy=ranking&sortOrder=asc', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_K,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    return res.json();
}

export async function getById(id, API_K) {
    if (id != null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime/by-id/' + id);
    }

    const res = await fetch('https://anime-db.p.rapidapi.com/anime/by-id/' + id, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_K,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    console.log(res.json);
    return res.json();
}

export async function getByGenre(genresSelec, API_K) {
    if (genresSelec != null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime/by-id/' + id);
    }

    let StringGenres = "";
    let first = 1;

    genresSelec.forEach(element => {
        if (first){
            StringGenres += element;
            first = 0;
        }
        StringGenres += ( ',' + element);
    });

    const res = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=' + StringGenres 
                            + '&sortBy=ranking&sortOrder=asc', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_K,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    console.log(res.json);
    return res.json();
}