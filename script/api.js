
//'04335e7f5cmshf46b5a783eaa1dep1b6fabjsn8dcb23c9ceb0';
//'e4b24267d8msh867b305ac429e47p1d21dejsnca24c7455727';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

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
    return res.json();
}