const fs = require('fs')

// const book = {
//     'title': 'GT alumni',
//     'author': 'Lei Han'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const buffer = fs.readFileSync('1-json.json')
// const book = JSON.parse(buffer.toString())

// console.log(book)

// const dataBuffer = fs.readFileSync('1-json.json')
// const book = JSON.parse(dataBuffer)
// book.name = 'Lei'
// book.age = '48'
// fs.writeFileSync('1-json.json', JSON.stringify(book))

const arr = ['cat', 'dog', 'fis'];
// arr.forEach(element => {
//   console.log(element);
// });
const fun = function(element) {
    return element.length==3
}
const ha = arr.every((element) => element.length==3)
  
console.log('ha', ha)