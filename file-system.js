const fs = require('fs');

console.log(Date.now());
let total = 0
fs.readFile('./data1.txt', 'utf-8', (err, data) => {

  if(err){
    console.log(err);
    console.log(total);
  } else {
    total += Number(data);
    fs.readFile('./data2.txt', 'utf-8', (err, data2) => {
      if(err){
        console.log(err);
        console.log('second data',total);
      } else {
        total += Number(data2);
        console.log(total)
      }
    })
  }
});

console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());


const nameString = new String('first, last')
