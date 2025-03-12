/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
 let strArr=str.split("");
 strArr[0]= strArr[0].toUpperCase();
return strArr.join("");
}



/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = 'benyamin';

console.log(capitalise(sampleName));
console.log(capitalise('hello'));

/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/
