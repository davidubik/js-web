window.onload = function(){

    const form  = document.querySelector("form");
    
    const envoyerFormulaire = (event) =>{
        console.log("Formulaire envoyé !");
        event.preventDefault(); // stop le comportement d'un événement, dans le cas du formulaire, de rafraichir la page.
    };

    form.addEventListener("submit", envoyerFormulaire);

}