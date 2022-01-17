import * as f from'./front-end.js';

const libgen = require('libgenesis');
const bing = require('bing-image-search-api-scraper')

var render2 = (query) => (dl) => {
    let searchImg = bing.search(query).then((res, index) =>
      {console.log(res)
       main.appendChild(f.BookLayout(res[0].photo)(dl)('image')(query))
      })}

var jsonToHTML2 = (e) => {
  let title = String(e.title).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let author = String(e.author).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let dl = e.download
  let text = title + ", " + author

  console.log(text)

  var query = text
  render2(query)(dl)
}

var fetchBook2 = (bookName) => {
  libgen(bookName).then((books) => {
    if (books[0]) {
      jsonToHTML2(books[0])
    }
  }).catch(function(error){
    throw error;
  })}


export {fetchBook2}
