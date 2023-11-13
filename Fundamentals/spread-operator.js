var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// spread operator 
var originalArray = [1, 2, 3];
var newArray = __spreadArray(__spreadArray([], originalArray, true), [4, 5], false);
console.log(newArray);
// console.log(originalArray);
// spread operator for object
var originalObject = { name: 'Milesh', age: 25, city: 'Port Louis' };
var copyObject = __assign({}, originalObject);
// console.log(copyObject);
//modify the object 
copyObject.age = 50;
// console.log(copyObject)
var object1 = { first_name: 'Milesh', age: 24 };
var object2 = { last_name: "Taukoorah", occupation: "Developer" };
// now we are going to merge object1 with object 2 using spread operator
var mergedObject = __assign(__assign({}, object1), object2);
console.log(mergedObject);
