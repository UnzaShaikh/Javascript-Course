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
console.log(typeof stringIsOff);
console.log(stringIsOff);

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