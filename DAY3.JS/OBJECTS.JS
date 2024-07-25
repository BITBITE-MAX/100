//Write a JavaScript program to access and print the properties of the following object:
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(Object.keys(person))

//Write a JavaScript program to add a new property country with the value "USA" to the following object:
let person1 = {
    name: "John",
    age: 30,
    city: "New York"
};
person1.country="USA";
console.log(person1)

//Write a JavaScript program to iterate over all properties of the following object and print each key and value:
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
for(let key in car){
    console.log(key +": "+car[key]);}

//Write a JavaScript program to merge the following two objects into one object:
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergeOnj = {...obj1,...obj2};
console.log(mergeOnj);