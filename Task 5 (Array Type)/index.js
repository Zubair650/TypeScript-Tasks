"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr1;
var arr2;
var arr3;
arr1 = ['rahim', 'karim', 'jashim'];
arr2 = ['rahima', 'karima', 'jashima'];
arr3 = [5, 'karima', 'jashima'];
console.log(arr1.sort());
arr2.map(function (a) {
    console.log(a);
});
var filtered = arr3.filter(function (a) {
    return typeof (a) == 'number';
});
console.log(filtered.join(''));
