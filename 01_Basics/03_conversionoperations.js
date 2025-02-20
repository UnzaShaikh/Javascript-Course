let score='';

let numberScore = Number(score);
// console.log(typeof numberScore);
// console.log(numberScore);

// conversion results 
/*                              value    typeconversion
33 =>                            33          number
"33abc" =>                       NaN         number
""                                0          number
null                              0          number
undefiend                        NaN         number
*/

let isOn ;

let stringIsOn = String(isOn);
// console.log(typeof stringIsOn);
// console.log(stringIsOn);

// conversion results 
/*                              value    typeconversion
false =>                        false      stirng
 1 =>                             1        string
""                                ""       string
null                             null      string
undefiend                     undefined    string
*/

let isOff=123 ;

let stringIsOff = Boolean(isOff);
// console.log(typeof stringIsOff);
// console.log(stringIsOff);

// conversion results 
/*                              value    typeconversion
false/true =>                 false/true    boolean
 1/0 =>                       true/false    boolean
""                               false      boolean
null                             false      boolean
undefiend                        false      boolean
"lion"                           true       boolean
123                              true       boolean
*/

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Operations >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**2); Power
console.log(2%2); Modulus

<<<<<<<<<<<<<<< Bad code habits >>>>>>>>>>>>>
const str1 = "1" + "2"  // 12
const str2 = 1 + "2"  // 12
const str3 = 1 + 2  // 3
const str4 = 1 + 2 + "2"  // 32  -- if string is in last place than the values at the front will be added
const str5 = "1" + 2 + 2  // 122 -- if string is in front place than the values at the last will not be added
const = +true // 1
const = +"" // 0
const num1 = num2 = num 3 = 2 + 2  // plz dont code like this 
*/
// let gameCounter = 100;
// let currGameCounter = gameCounter++; // post -- the increment operator increments and returns the value before incrementing.
// console.log(`gameCounter:${gameCounter} and currGameCounter: ${currGameCounter}`);

let gameCounter = 100;
let currGameCounter = ++gameCounter; // pre -- the increment operator increments and returns the value after incrementing.
console.log(`gameCounter:${gameCounter} and currGameCounter: ${currGameCounter}`);