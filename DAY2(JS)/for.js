//Write a JavaScript program that uses a for loop to print numbers from 1 to 10.
for(let i=0;i<=10;i++){
    console.log(i);
}
//Write a JavaScript program that uses a for loop to calculate the sum of numbers from 1 to 5.
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);
//Write a JavaScript program that uses a for loop to print all even numbers between 1 and 20
let even;
for(let i=0;i<=20;i++){
    if(i%2==0){
        even=i;
        console.log(even)
    }
}
//Write a JavaScript program that uses a for loop to print the multiplication table of a given number (e.g., 5).
let table;
for(let i=1;i<=10;i++){
    table=i*5;
    console.log("5 X "+i+" = "+table);
}
//Write a JavaScript program that uses a for loop to reverse a given string.
let str = "JavaScript";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; 
}
console.log("Original string: " + str);
console.log("Reversed string: " + reversedStr);

//Write a JavaScript program that uses a for loop to calculate the factorial of a given number (e.g., 5). The factorial of a number n is the product of all positive integers less than or equal to n.
let n = 1; 
let factorial = 1; 
for (let i = 5; i > 0; i--) {
    factorial *= i; 
}
console.log("The factorial of 5 is " + factorial); 
