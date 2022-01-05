
var divf = () => document.createElement("div");
var addClassf = (e) => ((c) => {e.classList.add(c)
                               return e});
var addTextf = (e) => ((t) => {e.innerHTML = t
                               return e});

export {divf, addClassf, addTextf}
