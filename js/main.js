import { getUsefulContents } from './file.js';
import * as f from'./front-end.js'

var div1 = f.addTextf(f.addClassf(f.divf())("my-class"))("Text")
var div2 = f.addClassf(f.divf())("my-class")
var main = document.querySelector("#main")
console.log(div2)
main.append(div2)
main.append(div1)

// getUsefulContents('http://www.example.com',
//     data => { doSomethingUseful(data); });

// const main = document.querySelector("main");
// for (const link of document.querySelectorAll("div > a")) {
//   link.addEventListener("click", e => {
//     e.preventDefault();

//     import('./my-module.js')
//       .then(module => {
//         module.loadPageInto(main);
//       })
//       .catch(err => {
//         main.textContent = err.message;
//       });
//   });
// }
