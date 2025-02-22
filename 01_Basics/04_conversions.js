// <<<<<<<<<< comparision operators >>>>>>>>>

// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);  checks only value
// console.log(2==1);  checks value and data type 

// Comparision between two different data types 
    // Comparision operators act differently and does not give predictable results.
console.log("02" > 1);
console.log("3" < 1);

console.log(null > 0);
console.log(null < 0)
// equality comparison operators converts the value to 0 and gives output on that basis
console.log(null = 0)
console.log(null >= 0)

// Note: Avoid to write such type if conversions which makes the code ugly!

console.log(null === 0)  // it checks strictly and gives output after checking both the value and data type