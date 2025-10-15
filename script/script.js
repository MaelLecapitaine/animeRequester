import { getByName, getById, getByGenre, getByRang } from './api.js'
import { afficherCartes,getGenreRecherche, getMotClef, getTypeRecherche } from './graphique.js'


if (sessionStorage.getItem("clefAPI") === null){
    sessionStorage.setItem("clefAPI", prompt("Entrée clé API", ""));
}
const API_KEY = sessionStorage.getItem("clefAPI");

/*Boutton entre : declenche la recherche

const barreDeRecherche = document.getElementById("motclef").addEventListener('change', () =>{
    if(getTypeRecherche() == 'id') {
        //TO DO
    } else if (getTypeRecherche() == 'rang') {
        //TO DO
    } else if (getTypeRecherche() == 'titre') {
        getByName(getMotClef(),API_KEY).then(data =>{afficherCartes(data['data']);return data['data']});
    }
});*/

//Boutton recherche : utilise le paramètre et le type de recherche.

const buttonRecherche = document.getElementById("buttonRecherche");
buttonRecherche.addEventListener('click', () => {
    if (getTypeRecherche() == 'id') {
        getById(getMotClef(), API_KEY)
            .then(data => {
                console.log(data);
                afficherCartes([data]);
                return data
            });
    } else if (getTypeRecherche() == 'rang') {
        getByRang(getMotClef(), API_KEY)
            .then(data => {
                afficherCartes([data]);
                return data
            });
    } else if (getTypeRecherche() == 'titre') {
        getByName(getMotClef(),API_KEY)
        .then(data =>{
            afficherCartes(data['data']);
            return data['data']
        });
    } else if (getTypeRecherche() == 'genre') {
        getByGenre(getGenreRecherche(),API_KEY)
        .then(data =>{
            afficherCartes(data['data']);
            return data['data']
        });
    }
});

// getByGenre(['Horror'],API_KEY)
// .then(data => console.log(data));