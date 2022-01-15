import * as f from'./front-end.js';

const libgen = require('libgenesis');
var gis = require('g-i-s');

// var staticImg = "https://img.search.brave.com/yr3GpYNZzhqTQx8fvB6sRJRPL25c9HrO_xSVefYIb54/fit/421/640/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8xOC9iMy9jNS8x/OGIzYzVlYjBlMzNj/YTg0MjViOGNlYmI5/NDhkMzcyNy5qcGc"

const imageSearch = (query, cb) => {
  gis(query, (error, results) => cb(error, results[1].url));
};


const render = (query) => (dl) => {
  // queries.forEach((query) => {
  let img = imageSearch(query, (error, img) => {
    if (error) {
      console.log("An error happened: ", error);
      return;
    } else {
      // main.appendChild(imageLayout(query.searchTerm)(img))
      main.appendChild(f.BookLayout(img)(dl)('book')(query.searchTerm))
    }
  })
  console.log(img)
  // })
}

var jsonToHTML = (e) => {
  let title = e.title
  let author = e.author
  let dl = e.download
  let text = title + ", " + author

  // let img = e.bookImage
  var query = {
    searchTerm: text,
    queryStringAddition: '&tbs=ic:book',
    filterOutDomains: [
      'pinterest.com',
      'deviantart.com'
    ]};
  render(query)(dl)
}
  // let img = imageSearch(query)
  // console.log(img)

var fetchBook = (bookName) => {
  libgen(bookName).then((books) => {
    jsonToHTML(books[1])
  }).catch(function(error){
    throw error;
  })}

export {fetchBook}
