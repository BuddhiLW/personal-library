var divf = () => document.createElement("div");
var addClassf = (e) => ((c) => {e.classList.add(c)
                               return e});
var addTextf = (e) => ((t) => {e.innerHTML = t
                               return e});

var divCTf = (c) => ((t) => addTextf(adClassf(divf())(c))(t))

var imgf = (src) => {e = document.createElement("img")
                     e.url = `$(src)`
                     return e}

var imgAf = (src) => ((a) => {e = imgf(src)
                              e.href = a
                              return e})

var BookLayout = (imgSrc) => ((dlLink) =>
  ((textClass) => ((text) => {e = divCTf(textCalss)(text)
                              e.innerHTML = imgAf(imgSrc)(dlLink)
                              return e})))

export {BookLayout, divCTf, divf, addClassf, addTextf}
