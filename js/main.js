import * as libg from './app.js';
import * as f from'./front-end.js';

// var
var main = document.querySelector("#main")
// console.log(div2)
main.append(f.divf())
// main.append(div1)


// console.log(libg.requests)
const list= ["Discourse on the Origin of Inequality, rousseau",
             "The idiot, dostoevsky"]

// console.log(div2)
console.log(list)
var request_list = libg.options(list)
request_list.forEach(opt => libg.tryBook(opt))

console.log(request_list[1])
var first = libg.tryBook(request_list[1])
console.log(first.title)
// console.log(first.)
