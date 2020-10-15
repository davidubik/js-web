const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');
const parent = document.body; 
const jaune = document.createElement('div'); // création de la balise jaune
const nouveauP = document.createElement('p');

jaune.classList.add('jaune'); // ajout de la la classe  jaune 
jaune.textContent = 'Jaune'; // texte dans le html
nouveauP.textContent = 'Bonjour';
nouveauP.classList.add('important'); // Ajout de la class important 
nouveauP.style.background = 'green'; 

parent.appendChild(jaune); // On relie de la balise jaune dans le DOM
parent.appendChild(nouveauP); // On relie le nouveau paragrpahe au DOM
