const req = new XMLHttpRequest(); // Variable pour la requette XMLHttp
const method = "GET"; // variable pour la méthode "GET" ce qui nous permet récupérer les éléments du serveur
const url = "https://www.prevision-meteo.ch/services/json/paris";
// const url = 'https://jsonplaceholder.typicode.com/posts'; // variable de l'URL avec le posts que nous ciblons

req.open(method, url);

req.onreadystatechange = function(event){
    if(this.readyState === XMLHttpRequest.DONE){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
        } else{
            console.log("Statut :" + this.status);
        }
    }
}

req.send();

