const req = new XMLHttpRequest();
const method = "POST";
const url = 'https://jsonplaceholder.typicode.com/posts/';

const data = {
   body : 'Bonjour',
   title :  'Bite cul chatte',
   userId : 65677567
};


req.open(method, url);

req.onreadystatechange = function(event){
    if(this.readyState === XMLHttpRequest.DONE){
        if(this.status === 201){
            console.log(JSON.parse(this.responseText));
        } else{
            console.log("Statut: " + this.status);
        }
    }
} 

req.send(data);

