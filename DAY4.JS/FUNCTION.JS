//Write a function named subtract that takes two parameters, a and b, and returns their difference.
function subtract(a,b){
    let result=a-b;
    return result;
}
subtract(99,-1);

//Define a function multiply that accepts a single number and returns its product with 10. Call this function with the number 7 and print the result.
function multiply(a){
    return 10*a;
}
console.log(multiply(7));

//Create a function named concatStrings that takes two string parameters and returns their concatenation. If only one string is provided, the function should concatenate it with the string "Default". Test this function with different arguments.
function concatStrings(str1="Hello,",str2){
    return str1+str2;
}
console.log(concatStrings(undefined,"Bitebit"));
console.log(concatStrings("HI,","FUNCTION"));

//Write a function sumAll that takes any number of arguments and returns their sum. Use the arguments object to achieve this.
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(3, 2, 4)); // Output: 9

//Create a function makeMultiplier that takes a number factor and returns another function. The returned function should take a number x and return the result of multiplying x by factor. Test the function with different factor values.
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const multiplyBy2 = makeMultiplier(2);
console.log(multiplyBy2(5)); 

const multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(5)); 

//Write a function createGreeting that takes a greeting message as an argument and returns another function. The returned function should take a name and return the complete greeting message. Test the function with different greetings and names.
function createGreeting(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}
const greetHello = createGreeting("Hello");
console.log(greetHello("Alice")); 
const greetHi = createGreeting("Hi");
console.log(greetHi("Bob"));      

//Implement a function that takes two arguments: a number and a callback function. The function should call the callback with the number as an argument.
function processNumber(num, callback) {
    callback(num);
}
function printNumber(num) {
    console.log(num);
}
processNumber(5, printNumber); // Output: 5
