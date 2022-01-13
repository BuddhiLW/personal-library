var divf = () => document.createElement("div");
var addClassf = (e) => ((c) => {e.classList.add(c)
                               return e});
var addTextf = (e) => ((t) => {e.innerHTML = t
                               return e});
var divCTf = (c) => ((t) => addTextf(addClassf(divf())(c))(t))
var imgf = (src) => {let e = document.createElement("img")
                     e.src = src
                     return e}
var imgAf = (src) => ((a) => {let e = imgf(src)
                            let link = document.createElement("a")
                            link.href = a
                            link.appendChild(e)
                            return link})

var BookLayout = (imgSrc) => ((dlLink) =>
  ((textClass) => ((text) => {let e = divCTf(textClass)(text)
                            e.appendChild(imgAf(imgSrc)(dlLink))
                            return e})))

export {BookLayout, divCTf, divf, addClassf, addTextf}
