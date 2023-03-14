const spinn = ['\\', '|', '/', '-']


const spinMe = function(spinChar, revolutions, delay) {
  let time = delay;
  for(let i =0; i <= revolutions; i ++){
    spinChar.forEach((chr, i) =>{
      setTimeout(() =>{
        process.stdout.write(`\r ${chr}`)
      }, time * i)
    });
  }
}

spinMe(spinn, 10, 100);