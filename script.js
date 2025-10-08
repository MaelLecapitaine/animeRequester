import {getByName} from './RecupJson.js'
import {afficherCartes} from './affichageCartes.js'

localStorage.setItem("clefAPI",prompt("Entrée clé API",""));

const API_KEY = localStorage.getItem("clefAPI")

// API();
let data = 0;
let tableauAnime = getByName('My Hero Academia', API_KEY);
tableauAnime
.then(data => tableauAnime['data'])
afficherCartes(tableauAnime);


