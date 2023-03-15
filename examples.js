const sayHello = function() {
  console.log('Hello');
}


const higherOrderFunc = (callback) => {
  return callback();
};

console.log('before');
higherOrderFunc(sayHello);
console.log('after');