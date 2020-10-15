const monTemplate = /ab/;
const  maString = "abc";
const maString2 = "fg";
const maString3 = "Bonjourabmoiabc'estabDavid";

console.log(monTemplate);
console.log(monTemplate.test(maString));// la variable monTemplaite prend comme argument maString avec la method test()
console.log(maString.replace(monTemplate, "lalala"));// On se trouve à l'index 0 et on va remplacé le lettres de monTemplate par ooo sauf le c qui n'est pas dans monTemplate
console.log(maString3.split(monTemplate));// La method split() nous permet de séparer du texte grâce à monTemplate et nous retourne un Array

