/* ways to write vaiables names:
accountId
account_id
account_ID
*/

const accountId  = 12345; // value unchangeable
let accountEmail = "unza@gmail.com" // value changeable
var accountCity = "Karachi" // value changable
accountState= "Pakistan"
let accountName; // undefined

// accountID  = 2345; not allowed

// console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountState,accountName])

/* var is not used
because of issue of block scope and functional scope*/ 