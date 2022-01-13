import * as f from'./front-end.js';

const libgen = require('libgenesis');
var gis = require('g-i-s');

var imageSearch = (query) => {
  gis(query, (error, results) => results[1].url)};

var staticImg = "https://img.search.brave.com/yr3GpYNZzhqTQx8fvB6sRJRPL25c9HrO_xSVefYIb54/fit/421/640/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8xOC9iMy9jNS8x/OGIzYzVlYjBlMzNj/YTg0MjViOGNlYmI5/NDhkMzcyNy5qcGc"


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
    ]
  };

  let img = imageSearch(query)
  console.log(img)
  main.appendChild(f.BookLayout(staticImg)(dl)('title')(text))}

var fetchBook = (bookName) => {
  libgen(bookName).then((books) => {
    jsonToHTML(books[1])
  }).catch(function(error){
    throw error;
  })}

export {fetchBook}
