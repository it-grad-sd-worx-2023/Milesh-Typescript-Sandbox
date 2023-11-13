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
console.log(originalArray);
