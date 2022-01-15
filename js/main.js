import * as libg from './app.js';
// import * as f from'./front-end.js';

var main = document.querySelector("#main")
const list= ["Discourse on the Origin of Inequality, Rousseau",
             "The Brothers Karamazov, Dostoievsky"]

// var fetchList = (list) => {
//   let divs = []
//   list.forEach((e) => divs.push(libg.fetchBook(e)))
//   return divs
// }

// list.forEach((book) =>
//   {libg.fetchBook(book).then( bookElement => main.append(bookElement));})

list.forEach((book) => libg.fetchBook(book))

