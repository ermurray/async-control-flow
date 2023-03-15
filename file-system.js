const fs = require('fs');

console.log(Date.now());

let total = 0;

const myFunc = () => { 

  fs.readFile('./data2.txt', 'utf-8', (err, data) => {
    if(err){
      return console.log('Error:', err)
    }
    total += Number(data);
  
    console.log('total from read 2', total);
  });

}


fs.readFile('./data1.txt', 'utf-8', (err, data) => {
  if(err){
    return console.log('Error:', err)
  }
  total += Number(data);
  myFunc();
  console.log('total from read 1', total);
});


console.log('outside read', total);

