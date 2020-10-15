

const changeColor = (newColor) =>{
const elem = document.getElementById('titre');
elem.style.color = newColor;
}

const paragrapheColor = (newColor) =>{
let elem = document.getElementById('paragraphe_1');
elem.style.color = newColor;
}

const paragraphe2Color = (txtColor,bgColor) =>{
let elem = document.getElementsByClassName('p_2');
elem[0].style.color = txtColor;
elem[0].style.background = bgColor;
}

const articles = (newColor) => {
let articlesList = document.getElementsByTagName('article');
Object.values(articlesList).forEach((article, i) => {
  article.style.color = newColor
});
}

const boutonColor = (newColor, newBackground) =>{
let elem = document.getElementsByTagName('button');
elem[0].style.background = newColor;
elem[1].style.background = newBackground;
}

const titre2 = (newColor, newBackground) => {
	let elem = document.querySelector('.partie_3, h3');
	elem.style.color = newColor;
	elem.style.background = newBackground;
}

changeColor('pink');
paragrapheColor('black');
articles('red');
paragraphe2Color('Chartreuse', 'red');
boutonColor('blue', 'purple');
titre2('red', 'black');

console.log(typeof titre2);

const titre = document.getElementById('titre');
console.log(titre);
