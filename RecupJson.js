//Création du tableau des genres

const API_KEY = '';

async function getGenres() {
    const res = await fetch('https://anime-db.p.rapidapi.com/genre', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    return await res.json();
}

getGenres()
    .then(dataGenre => {
        // affiche la liste des noms de genres
        console.log(dataGenre.map(g => g.name).join(', '));
    })
    .catch(err => console.error('Erreur fetch genres :', err));


//Requete Par nom
let titre = "SNK";

async function getByName() {
    const res = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search='+ titre +'&sortBy=ranking&sortOrder=asc', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    return await res.json();
}

// getByName()
//     .then(dataGenre => {
//         tabGenre = dataGenre.map(g => g.name).join(', ');
//     })