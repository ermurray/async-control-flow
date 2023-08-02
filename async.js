console.log('1) before call');

setTimeout(() => {
  console.log('2) inside set timeout');
},-3)
setTimeout(() => {
console.log('3) setTimeout')
}, 0)

console.log('4) after setTimeout');


const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];
const newNums = [1000, 1000, 1000, 1000, 1000, 1000, 1000];


// for(const num of newNums) {
//   setTimeout(() => {
//     console.log(num)
//   }, num)
// } // all console.logs happen at same ish time after 1 second delay




const createTimeout = (num, delay, logNum) => {
  return setTimeout(() => {
    logNum(num)
    console.log(num)
  }, delay)
}
// let time = 0
// for(const num of newNums) {
//   console.log(time);
//   myCallback(num, time);
// }  // we need a closure on the time variable


const myFunc = function(arrNums, cb, printValue) {
  let delay = 0;
  for(const num of arrNums) {
    cb(num, delay += num, printValue)
  }
}

const sleepSort = (nums) => {
  for(const num of nums) {
    setTimeout(() => console.log(num), num);
  }
}


// // myFunc(newNums, createTimeout, (arg) => console.log('value at this itertion', arg ))

// // myFunc(numbers, createTimeout, (arg) => console.log('this is the sorted numbers', arg)) // will not sort the numbers
sleepSort(numbers);
