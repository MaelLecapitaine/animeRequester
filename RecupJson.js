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

//const API_KEY = 'e4b24267d8msh867b305ac429e47p1d21dejsnca24c7455727';
//Requete Par nom

const API_KEY = '4f7f0bb779mshb4d344d6c35a13dp154c5ejsn86604b0965ff'
const url='https://anime-db.p.rapidapi.com/anime?page=1&size=10&search='+ "tokyo" +'&sortBy=ranking&sortOrder=asc'

async function getByName(titre) {
    const res = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search='+ titre +'&sortBy=ranking&sortOrder=asc', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    console.log(res.json);
    return res.json();
}

getByName('My Hero Academia')
.then(data => console.log('.then:', data['data']));

async function getById(id) {
    const res = await fetch('https://anime-db.p.rapidapi.com/anime/by-id/1', {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    });
    console.log(res.json);
    return res.json();
}
