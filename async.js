
const sayHello = () => {
  
  console.log('Hello World!');
};


const higherOrder = function(delay, callback) {
  setTimeout(() => {
    callback()
  }, delay)
}

console.log('start');
// higherOrder(3000, sayHello);
console.log('end');

const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];
const newNums = [1000, 1000, 1000, 1000, 1000, 1000, 1000]

const sleepSort = function(nums) {
  let delay = 0
  for (const num of nums) {
    setTimeout(()=> console.log(num), delay += num)
  }
}

sleepSort(newNums);


