let myString = 'Javascript+es+super+cool'
let myArray = myString.split("+")
let arrayLength=myArray.length
let lastitem=myArray[arrayLength-1]
let myinversearray = myArray.reverse()

myinversearray.push(11)

console.log(myArray)
console.log(arrayLength)
console.log(lastitem)
console.log(myinversearray)
