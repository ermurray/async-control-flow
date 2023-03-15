const bigNumber = 1000000;

console.log('log1', Date.now());
console.log('log2', Date.now());
console.log('log3', Date.now());

const startTime = Date.now();

for( let i  = 0; i <= bigNumber; i++) {
  console.log(`step: ${i}`, `time: ${Date.now()}`);
}

const endTime = Date.now();
console.log({startTime});
console.log({endTime});
console.log('time diff', endTime - startTime);
console.log('log4', Date.now());
console.log('log5', Date.now());
console.log('log6', Date.now());