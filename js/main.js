import * as libg from './app.js';
import * as f from'./front-end.js'

var div1 = f.addTextf(f.addClassf(f.divf())("my-class"))("Text")
var div2 = f.addClassf(f.divf())("my-class")
var main = document.querySelector("#main")
console.log(div2)
main.append(div2)
main.append(div1)



console.log(libg.requests)
