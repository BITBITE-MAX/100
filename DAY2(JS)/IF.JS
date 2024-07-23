//Write a JavaScript program that checks if a given number is positive, negative, or zero.
let number= 4;// OR number=prompt("Enter your number");
if(number>0){
    console.log("It is a positive number");
}
else if(number<0){
    console.log("It is a negative number");
}
else if(number==0){
    console.log("The numer is zero")
}
else{
    console.log("Invalid number")
}

//Write a JavaScript program to check if a given year is a leap year.
let leapYear = 200;
if((leapYear%4==0 && leapYear%100!=0) || (leapYear%400==0)){
    console.log("It is a leap year");
}
else{
    console.log("Not a leap year");
}

//Write a JavaScript program that checks if a given number is divisible by both 3 and 5.
let multiple = 15;
if(multiple%3==0 && multiple%5==0){
    console.log("It is divisible by both 3 and 5");
}
else{
    console.log("It is not divisible by both 3 and 5");
}

//Write a JavaScript program to calculate the discount for a customer based on the total purchase amount.
// If the purchase amount is above $500, apply a 20% discount.
// If the purchase amount is between $200 and $500, apply a 10% discount.
// If the purchase amount is below $200, no discount is applied.

let purchaseAmount=450;
discount=0;
if(purchaseAmount>=500){
    discount=0.20;
}
else if (purchaseAmount >= 200 && purchaseAmount < 500) {
    discount = 0.10; 
} else {
    discount = 0; }
let discountAmount = purchaseAmount * discount;
let finalAmount = purchaseAmount - discoun;
console.log("Original amount: $" + purchaseAmount.toFixed(2));
console.log("Discount amount: $" + discount.toFixed(2));
console.log("Final amount after discount: $" + finalAmount.toFixed(2));
