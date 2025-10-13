
// //const API_KEY = '04335e7f5cmshf46b5a783eaa1dep1b6fabjsn8dcb23c9ceb0';
// const API_KEY = 'e4b24267d8msh867b305ac429e47p1d21dejsnca24c7455727';
let titre = null;
let genres = null;
let id = null;

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

export function API(API_K) {
    //Recherche Par titre

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
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

//getBy