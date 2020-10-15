const rouge = document.querySelector(".rouge");
const vert = document.querySelector(".vert");
const bleu = document.querySelector(".bleu");

const jaune = document.createElement("div"); // Création de la div
jaune.classList.add("jaune"); // On lui attribut la class jaune
jaune.textContent = "Jaune"; //Texte entre les balises

document.body.appendChild(jaune);

const planifierTache = (heure, tache) =>{
  const nouvelleTache = document.createElement("li");
  nouvelleTache.innerHTML = `<h3>${heure}</h3><p>${tache}</p>`;
  document.querySelector("ul").appendChild(nouvelleTache);
}

planifierTache('08h00', 'Petit-dej');
planifierTache('08h30', 'Petite pipe');
planifierTache('09h00', 'Travail');
