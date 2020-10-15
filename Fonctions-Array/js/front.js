window.onload = function(){

	const paragraphes = document.querySelectorAll('p');

	const paragraphesArray = Array.from(paragraphes);

	console.log(paragraphesArray.pop()); // la method from() permet de transformer un <p> en Array.

} 
// const monArray = [1,2,3,4,5];

// // monArray.push(6); // la methode push() ajoute une céllule à mon Array.

// // monArray.pop(); // Le pop suprime la dernière céllule de mon Array


// //monArray.shift(); surprime le permier élément de mon Array


// console.log(monArray);


// monArray.forEach(function(e){ // forEach permet passé sur tout les éléments de mon Array
// 	console.log(e);
// });

