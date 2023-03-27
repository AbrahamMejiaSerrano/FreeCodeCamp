//Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0.
// Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [0, 5, 5, 5, 5];

// Only change code below this line
let total = 0;
for (let i = myArr.length - 1; i >= 0; i--) {
  total += myArr[i];
}


console.log(myArr)