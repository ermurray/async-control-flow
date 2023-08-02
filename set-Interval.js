console.log('before interval');

let count = 0;

const intervalOne = setInterval(() =>
  {
    count += 1;
    console.log('interval is running', count) 
    if(count < 10 ){
      clearInterval(intervalOne)
    }
  }, 1000)

console.log('after interval')