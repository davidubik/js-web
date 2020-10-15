window.onload = function(){
    const rouge = document.querySelector('.rouge');
    const vert = document.querySelector('.vert');
    const bleu = document.querySelector('.bleu');

    rouge.onclick = function(){
        rouge.textContent = "On vient de me cliquer";
        rouge.style.backgroundColor = "yellow";
        rouge.style.color = "black";
        bleu.textContent = "Surprise !!!!!";
    }


}