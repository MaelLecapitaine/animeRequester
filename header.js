const buttonReset = document.getElementById("buttonReset");


//Boutton effacer : retourne au stade de base de la page
buttonReset.addEventListener('click',reset);

function reset() {
    window.location.reload(true)
}