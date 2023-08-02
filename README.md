# async-control-flow
Lighthouse labs web flex lecture on asynchronous control flow

## Topics
  - [x] review 
  - [x] higher order functions
  - [x] synchronous code
  - [x] asynchronous code
  - [x] 'setTimeOut'
  - [ ] 'setInterval'
  - [ ] node file system

## review
- how can we define a function
```js
  // function declaration
  function mylovelyfunction() {
    //do some fancy stuff in here
    // but only one fancy thing
  }
  
  // functional expression
  const anotherFunction = function() {
    // do some more fun in here
    console.log('i do fun things')
  }

  // arrow expression
  cons arrowfunc = () => {
    // do some more things
    // watch out for 'this'
  }

  const myobject = {
    afunc: () => {

    }
  }

  myobject.afunc() /// invoke out annonymous function from our object

  // callbacks
  const myHOF = (callback) => {
    callback();
  }

  myHOF(anotherFunction); //invoke our function
  myHOF(() => console.log('hello world'))'


```

## Higher order functions
  - its a function that  calls another function or returns a function

## Synchronous
  - linear execution
  - step by step
  - statement by statement the code is executed
  - "BLOCKING code"
## Questions

## Higher order functions
* 