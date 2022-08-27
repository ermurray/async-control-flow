console.log('first');

const logIt = function(){
  return console.log('second');
}

const higherOrder = function(callback){
  setTimeout(() =>{
    callback()
  },1000)
};
higherOrder(logIt)
console.log('third');

// closures
function greeting() {
  let message = 'Hi';

  function sayHi() {
      console.log(message);
  }

  return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable

function greeting(message) {
  return function(name){
       return message + ' ' + name;
  }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John