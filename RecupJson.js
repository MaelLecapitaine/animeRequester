//Création du tableau des genres

const API_KEY = '04335e7f5cmshf46b5a783eaa1dep1b6fabjsn8dcb23c9ceb0';
let tabGenre = "";

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
        console.log(dataGenre); 
        tabGenre = dataGenre.map(g => g.name).join(', ');
    })