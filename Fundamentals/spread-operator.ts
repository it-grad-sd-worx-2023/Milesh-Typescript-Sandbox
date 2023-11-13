// spread operator 
const originalArray = [1,2,3];
const newArray = [...originalArray,4,5];
console.log(newArray);
// console.log(originalArray);



// spread operator for object
const originalObject = { name : 'Milesh', age: 25, city: 'Port Louis'};

const copyObject = {...originalObject};
// console.log(copyObject);


//modify the object 

copyObject.age = 50;
console.log(copyObject)