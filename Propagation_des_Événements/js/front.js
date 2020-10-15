window.onload = function(){

    const parent = document.querySelector("#parent");
    const enfant = document.querySelector("#enfant");


    const parentFunction = (event) =>{
        console.log("click sur parent");
    };

    const enfantFunction = (event) =>{
        console.log("click sur enfant");
        event.stopPropagation(); // cette methode stop la propagation du l'événement.
    }

    parent.addEventListener("click", parentFunction);// avec true on est dans l'exécution capture on le parent passe avant l'enfant.
    enfant.addEventListener("click", enfantFunction ); // sans le true on sera dans l'éxécution Bubbling  ou l'enfant passe avnat le parent.

  

}