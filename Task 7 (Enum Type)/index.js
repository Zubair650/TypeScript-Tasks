"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumType;
(function (enumType) {
    enumType[enumType["firstValue"] = 5] = "firstValue";
    enumType[enumType["secondValue"] = 6] = "secondValue";
    enumType[enumType["thirdValue"] = 7] = "thirdValue";
})(enumType || (enumType = {}));
console.log(enumType.secondValue);
