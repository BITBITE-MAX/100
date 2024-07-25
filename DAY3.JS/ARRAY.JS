//Remove Duplicates from an Array
let arrayWithDuplicates = [1, 2, 3, 4, 5, 1, 2, 3, 6];
let newArray=[];
for(i=0;i<arrayWithDuplicates.length;i++){
    if(!newArray.includes(arrayWithDuplicates[i])){
        newArray.push(arrayWithDuplicates[i]);
    }
}
console.log(newArray)

//Write a JavaScript program that flattens the following nested array:
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let nonnstedArray = nestedArray.flat(Infinity);
console.log(nonnstedArray);