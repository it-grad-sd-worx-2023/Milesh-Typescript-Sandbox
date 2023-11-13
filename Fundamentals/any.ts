const json = `{"latitude": 10.1240, "longitude": 50.71}`;
const currentLocation = JSON.parse(json);

// this is console logging out the currentLocation
// this mean the longtitude and latitude of json
console.log(currentLocation);



// here we are console loggin the currentLocation latitude

console.log(currentLocation.latitude);


//this will give us why because x doesnt exist in currentLocation
// when you get undefined error is because the data you are trying to check or fetch is not present in the code .

console.log(currentLocation.x);


let result: any;
result ="test";
console.log(result);

result = 10;
console.log(result);
result = ["patate", 1000,51.123, "hello its me "];



let resultAny: any;
resultAny = 10.23;
// console.log(resultAny.willExist());
// resultAny.willExist();

