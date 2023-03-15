// console.log('Before call');

// setTimeout(() => {
//  console.log('Inside setTimeout')
// }, 1000 );

// console.log('After call')



// const higherOrderFunction =  function(callback) {
//   let data = 4

//   console.log('Before call 1');
//   setTimeout(() => {
//     data = 6
//     callback(data);
//   }, 1000);

//   console.log('After call 2');
//   return data;
// }


// console.log('Before hof call 3');

// const result = higherOrderFunction((result) => {
//   console.log('Inside callback 4');
//   // console.log('result', result);
// });


// console.log('After hof call 5');

// 3, 1, 2, result, 5, 4

const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];
const newNums = [1000, 1000, 1000, 1000, 1000, 1000, 1000];


const myCallback = (num, delay) => {
  return setTimeout(() => console.log(num), delay += num);
}

const myFunc = function(nums, callback) {
  let delay = 0;
  for (const num of nums) {
    console.log('num',num);
    console.log('delay', delay)
    callback(num, delay)
  }
};

myFunc(newNums, myCallback);
// myFunc(newNums);

const counter = (nums) => {
  let delay = 0
  nums.forEach((num , i) => {
    return setTimeout(() => console.log(num, i), delay += num);
  })
  
};

//counter(newNums);
