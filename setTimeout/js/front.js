const hello = () =>{
    console.log("hello");
}

// setTimeout(hello, 5000); //la fonction setTimeout permet contrôler dans combien de temps va s'exécuter la fonction. 

// setTimeout(function(){// la fonction est anonyme
//     console.log("Anon");
// }, 4000);

//setInterval(hello, 5000); setInterval permet d'exécuter la fonction à un interval toute les 5 secondes...

const monInterval = setInterval(hello, 5000);

setTimeout(function(){
clearInterval(monInterval);
console.log("J'ai utiliser un clearInterval après 12 seconds");
},12000);// ClearInterval permet l'arret de la boucle de setInterval dans se cas il à été derterminer que cette fonction s'éxécute 12 secondes après le début de la fonction.