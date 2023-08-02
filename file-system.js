const fs = require('fs');

console.log('before reads');

let total = 0


const myFunc = () => {
  fs.readFile('./data1.txt', 'utf-8', (err, data) => {
    if (err) {
      return console.log('Error:', err)
    }
    total += Number(data);
    console.log('from read1', total);
  
  })
}


fs.readFile('./data2.txt', 'utf-8', (err, data) => {
  if (err) {
    return  console.log('Error:', err)
  }

  total += Number(data);
  console.log('from read2', total);
  myFunc()
});


console.log('outside readFile', total);
