
const sayhello = (name) => {
  return `Hello ${name}!`;
};

const printToScreen = function(input) {
  return sayhello(input); 
};

// printToScreen('Macky');

const anotherFunc = printToScreen('Macky');

console.log(anotherFunc);