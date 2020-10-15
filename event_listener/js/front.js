window.onload = function(){

    const rouge = document.querySelector('.rouge');
    const vert = document.querySelector('.vert');
    const bleu = document.querySelector('.bleu');
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('container2')
    newDiv.textContent = " Bonjour";
    document.body.appendChild(newDiv);


    const modifierVert = (e) => {
        vert.textContent = "Le vert n'est plus très vert...";
        vert.style.background = "purple";
    };

    const modifierRouge = (e) =>{
        rouge.textContent = "Bite, Cul, Chatte";  
    };

    const modifierBleu = (e) => {
        bleu.textContent = "hey";
        bleu.style.background = "pink";
    }

    

    vert.addEventListener('click', modifierVert);
    rouge.addEventListener('click', modifierRouge);
    bleu.addEventListener('click', modifierBleu);
    
    
}