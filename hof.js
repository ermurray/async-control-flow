// create a higher order function
const myCoolFunction = (someWords) => {
  console.log(`i can speak some ${someWords}`);
};

const coolHOF = (callback, words = 'lots of words') => {
  callback(words)

  return () => console.log('yes i have been returned')
};

const returnOfTheHOF = coolHOF(myCoolFunction, 'words like hello world');

console.log(returnOfTheHOF);

returnOfTheHOF();