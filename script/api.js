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

let genres = null;

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

export async function getByName(titref, API_K) {


    if (titref != null && genres == null) {
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

export async function getByRang(rang, API_K) {
    if (rang != null) {
        xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime/by-ranking/' + rang);
    }

    const res = await fetch('https://anime-db.p.rapidapi.com/anime/by-ranking/' + rang, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_K,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    console.log(res.json);
    return res.json();
}

//getBy