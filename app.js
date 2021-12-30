const libgen = require('libgen')
// const urlString = () => libgen.mirror().then(
//   e => e
// )

// var mirror = urlString().then(e => toString(e));

const list= ["Discourse on the Origin of Inequality, rousseau",
             "the idiot dostoevsky"]

options = list => {
  let optList = []
  list.forEach(bookName => {
  // {return console.log(bookName)}
    opt = {
    mirror: 'http:libgen.is',
    query: `${bookName}`,
    count: 1,
    reverse: true
    }
    optList.push(opt)})
  console.log(optList)
  return optList
}

var request_list = options(list)

var tryBook = (options) => {
  try {
    const data = libgen.search(options).then((data) =>{
      let n = data.length;
      console.log(`${n} results for "${options.query}"`);
      data.forEach(e => {
        // console.log(e);
        console.log('Title: ' + e.title)
        console.log('Author: ' + e.author)
        console.log('Image: ' + options.mirror + /covers/ + e.coverurl)
        console.log('Download: ' +
                    options.mirror +
                    '/book/index.php?md5=' +
                    e.md5.toLowerCase())
      })})
  } catch (err) {console.error(err)}
}

request_list.forEach(opt => tryBook(opt))

// const options = {
//   mirror: 'http://libgen.is',
//   // query: 'the idiot dostoevsky',
//   // search_in: 'title',
//   count: 1,
//   reverse: true
// }

