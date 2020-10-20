// 1a
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1b
if (randomNum >= 4){
  console.log("Equal to or more than 4");
} else if (randomNum >= 2){
  console.log("Equal to or more than 2");
} else {
  console.log("Equal to 1");
}

// Better Answer
/*
if (randomNum >= 4){
  console.log("Equal to or more than 4");
}

if (randomNum >= 2){
  console.log("Equal to or more than 2");
} else {
  console.log("Equal to 1");
}
*/

// 1c
if (randomNum != 3){
  console.log("Not equal to 3");
}

// 1d
// if (randomNum != (3 || 5)){ Not valid answer
  // if (randomNum != 3 || randomNum != 5){ Not valid answer
// if (randomNum != (3 && 5)){ Correct
if (randomNum != 3 && randomNum != 5){ // Correct
  console.log("Not equal to 3 AND not equal to 5");
}

// 1e
// if (randomNum === (2 || 4)){ Correct as well
if (randomNum === 2 || randomNum === 4){
  console.log("Equal to 2 OR equal to 4");
}
