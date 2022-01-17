var divf = () => document.createElement("div");
var pf = () => document.createElement("p");
var addClassf = (e) => ((c) => {e.classList.add(c)
                              return e});
var addTextf = (e) => ((t) =>
  {
    let text = pf()
    text.innerText = t
    e.appendChild(text)
    return e
  });
var divCTf = (c) => ((t) => addTextf(addClassf(divf())(c))(t))
var imgf = (src) => {let e = document.createElement("img")
                    e.src = src
                    return e}

var addAf = (e) => (url) => {
  let link = document.createElement("a")
  link.href = url
  link.appendChild(e)
  return link
}

var imgAf = (src) => ((a) =>
  {
    let e = imgf(src)
    let link = document.createElement("a")
    link.href = a
    link.appendChild(e)
    return link})

var hwImg = (e) => (h) => (w) => {
  // let img =
  e.style.height = h
  e.style.width = w
  return e
}

var BookLayout = (imgSrc) => ((dlLink) =>
  ((textClass) => ((text) => {let e = divCTf(textClass)(text)
                            addClassf(e.children[0])("title")
                            addClassf(e.children[0])("is-4")
                            e.appendChild(
                              addAf(hwImg(imgf(imgSrc))("600px")("600px"))(dlLink)
                            )
                            return e})))

export {BookLayout, divCTf, divf, addClassf, addTextf}
