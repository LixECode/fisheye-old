//Mettre le code JavaScript lié à la page photographer.html

// let str = window.location.search;
// let id = str.searchParams.get("id");
// console.log(id)

let str = new URLSearchParams(window.location.search);
let id = str.get("id");
console.log(id)

// faire un fetch photographers comme home
// filtrer par ID en 2 fois (.then) ou fonction à part appelée dans le .then