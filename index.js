const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const n = prompt('Enter a number: ');

console.log(n);

/**
 * TODO: Create a string of even numbers from 0 to n inclusively,
 * with a comma as separator between two consecutive
 * even numbers.
 * For example: if n = 10, the result is "0,2,4,6,8,10"
 */
let result = undefined;
if(n >= 0)
{
  result = "";
  for(let i = 0;i < n; i+=2)
    {
     result += i + ",";
    }
  result += n;
}
// DO NOT CHANGE THE LINE BELOW.
console.log(result);

module.exports = {
  result,
};
