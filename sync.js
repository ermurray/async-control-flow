const bigNumber = 10000000;

console.log('log1', Date.now());
console.log('log2', Date.now());
console.log('log3', Date.now());
console.log('log4', Date.now());
console.log('log5', Date.now());
console.log('log6', Date.now());

const startTime = Date.now();
let sum = 0;
for(let i  = 0; i <=bigNumber; i++) {
  sum += 1;
  // console.log(`step: ${i}, time: ${Date.now()}`);
}

const endTime = Date.now();

console.log({startTime});
console.log({endTime});

console.log('time diff', endTime - startTime);

console.log('log7', Date.now());
console.log('log8', Date.now());
console.log('log9', Date.now());
