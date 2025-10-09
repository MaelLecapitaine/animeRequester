import { getByName } from './api.js'
import { afficherCartes,getMotClef,getTypeRecherche} from './graphique.js'


localStorage.setItem("clefAPI", prompt("Entrée clé API", ""));
const API_KEY = localStorage.getItem("clefAPI")


// API();
let tableauAnime;
let data;

//Boutton recherche : utilise le paramètre et le type de recherche.
const buttonRecherche = document.getElementById("buttonRecherche");

buttonRecherche.addEventListener('click', () => {
    if(getTypeRecherche() == 'id') {
        //TO DO
    } else if (getTypeRecherche() == 'rang') {
        //TO DO
    } else if (getTypeRecherche() == 'titre') {
        getByName(getMotClef(),API_KEY).then(data =>{afficherCartes(data['data']);return data['data']});
    }
});

