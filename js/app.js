// import {search} from '../node_modules/libgen/index.js';
import * as f from'./front-end.js';

// const libgen = require('../node_modules/libgen/index.js')
const list = ["Discourse on the Origin of Inequality, rousseau",
             "the idiot dostoevsky"]
// console.log(libgen)

var options = list => {
  let optList = []
  list.forEach(bookQuery => {
    let opt = {
      mirror: 'http:libgen.is',
      query: `${bookQuery}`,
      count: 1,
      reverse: true}
    optList.push(opt)})
  console.log(optList)
  return optList
}

// var request_list = options(list)

var tryBook = require(["libgen"], (options) => {
  try {
    const data = libgen.search(options).then((data) =>{
      let n = data.length;
      console.log(`${n} results for "${options.query}"`);
      data.forEach(e => {
        console.log('Title: ' + e.title)
        console.log('Author: ' + e.author)
        console.log('Image: ' + options.mirror + /covers/ + e.coverurl)
        console.log('Download: ' +
                    options.mirror +
                    '/book/index.php?md5=' +
                    e.md5.toLowerCase())
        return data
      })})
  } catch (err) {console.error(err)}
})

var renderBook = require(["libgen"], (options) => {
  try {
    const data = libgen.search(options).then((data) =>{
      let n = data.length;
      console.log(`${n} results for "${options.query}"`);
      data.forEach(e => {
        console.log('Title: ' + e.title)
        console.log('Author: ' + e.author)
        console.log('Image: ' + options.mirror + /covers/ + e.coverurl)
        console.log('Download: ' +
                    options.mirror +
                    '/book/index.php?md5=' +
                    e.md5.toLowerCase())


        return data
      })})
  } catch (err) {console.error(err)}
})


// request_list.forEach(opt => tryBook(opt))
// var requests =
// export {requests}
export { renderBook, tryBook, options }
