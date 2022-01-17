import * as f from'./front-end.js';

const libgen = require('libgenesis');
// var gis = require('g-i-s');
const bing = require('bing-image-search-api-scraper')

var staticImg = "https:img.search.brave.com/yr3GpYNZzhqTQx8fvB6sRJRPL25c9HrO_xSVefYIb54/fit/421/640/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8xOC9iMy9jNS8x/OGIzYzVlYjBlMzNj/YTg0MjViOGNlYmI5/NDhkMzcyNy5qcGc"

const imageSearch = (query, cb) => {
  gis(query, (error, results) => {
    cb(error, results)
    console.log(results)
  });
};

const render = (query) => (dl) => {
  // queries.forEach((query) => {
  let img = imageSearch(query, (error, img) => {
    if (error) {
      console.log("An error happened: ", error);
      return;
    } else {
      // main.appendChild(imageLayout(query.searchTerm)(img))
      // console.log(img[0])
      // console.log(img.url)
      main.appendChild(f.BookLayout(staticImg)(dl)('image')(query.searchTerm))
    }
  })
  console.log(img)
  // })
}

var jsonToHTML = (e) => {
  let title = String(e.title).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let author = String(e.author).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let dl = e.download
  let text = title + ", " + author

  console.log(text)

  // let img = e.bookImage
  var query = {
    searchTerm: "cat", // text
    queryStringAddition: '&tbs=ic:trans',
    filterOutDomains: [
      'pinterest.com',
      'deviantart.com',
      // 'search.brave.com',
      // 'duckduckgo.com'
      //   'google.com',
      //   'duckduckgo.com'
    ]
  };
  render(query)(dl)
}
// let img = imageSearch(query)
// console.log(img)

var fetchBook = (bookName) => {
  libgen(bookName).then((books) => {
    if (books[0]) {
      jsonToHTML(books[0])
    }
  }).catch(function(error){
    throw error;
  })}


var render2 = (query) => (dl) => {
  // queries.forEach((query) => {
  queries.forEach((query) => {
    let searchImg = bing.search(query).then((res, index) =>
      {console.log(res)
       main.appendChild(f.BookLayout(res[0].photo)(dl)('image')(query))
      });
    // console.log(img.url)
  }
                 )
  console.log(searchImg)
}

var jsonToHTML2 = (e) => {
  let title = String(e.title).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let author = String(e.author).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  let dl = e.download
  let text = title + ", " + author

  console.log(text)

  // var query = {
  //   searchTerm: text, // text
  //   queryStringAddition: '&tbs=ic:trans',
  //   filterOutDomains: [
  //     'pinterest.com',
  //     'deviantart.com',
  //   ]
  // };
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


export {fetchBook, fetchBook2}
