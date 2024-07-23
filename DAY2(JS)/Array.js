//Write a JavaScript program that calculates the sum of all elements in an array
let numbers = [1, 2, 3, 4, 5];
let sum=0;
for(i=0;i<=numbers.length;i++){
    sum+=number[i];
    console.log(sum);
}
console.log(sum);

//Write a JavaScript program that uses a for loop to print each element of the following array:
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}

//Write a JavaScript program that finds and prints the maximum number in the following array:
let number = [3, 5, 7, 2, 8, 6];
let max=0;
for(i=0;i<=number.length;i++){
    if(number[i]>max){
        max=number[i];
    }
}
console.log(max);

// Write a JavaScript program that reverses the following array:
let letters = ["a", "b", "c", "d", "e"];
for(i=letters.length-1;i>=0;i--){
    console.log(letters[i]);
}
// OR  
let reversed = [];

for (let i = letters.length - 1; i >= 0; i--) {
    reversed.push(letters[i]);
}

console.log("The reversed array is: " + reversed);
