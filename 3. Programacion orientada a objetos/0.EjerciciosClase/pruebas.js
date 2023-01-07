"use strict"

//ejericios javascript.info
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
console.log(counter());

counter.set(5);
console.log(counter());

counter.decrease();
console.log(counter());

// 1.

/*
function sum (...numbers) {

  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));
*/



// 2. 

/*
function sum () {
  let sum = 0;
  for(let item of arguments) {
    sum += item;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));
*/
