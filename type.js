
const myDelay = 1000;

const typeWriter = (phrase, delay = 500) => {
  const arrChar = phrase.split('');

  arrChar.forEach((char, i) => {
    setTimeout(() =>{
      process.stdout.write(char);
    }, delay * i);
  });

}

typeWriter('Hello World!', myDelay);
