let titre = null;
let genres = null;
let id = null;



//Recherche Par titre

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

if(titre != null && genres == null){
    xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search='+ titre +'&sortBy=ranking&sortOrder=asc');
}

else if(titre == null && genres != null){
    xhr.open('GET', 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres='+ genres +'&sortBy=ranking&sortOrder=asc');
}

xhr.setRequestHeader('x-rapidapi-key', 'clefAPI');
xhr.setRequestHeader('x-rapidapi-host', 'anime-db.p.rapidapi.com');

xhr.send(data);