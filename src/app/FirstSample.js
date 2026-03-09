"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" Typescript learning...!");
var myVar = 120;
console.log("now myVar is a numerical with value - ".concat(myVar));
var x = 44;
console.log(" X = ".concat(x));
var company = "Tesla";
console.log(" X = ".concat(x));
myVar = "Morris Garage";
console.log("now myVar is a String with value - ".concat(myVar));
var flag = true;
if (flag) {
    console.log("Now the condition has satisfied");
}
var numArr = [1, 2, 3, 4, 5, 6];
for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
    var z = numArr_1[_i];
    console.log(" Element - ".concat(z));
}
var colors = ["white", "blue", "peach", "purple", "orange"];
for (var myvar in colors) {
    console.log(" Color - ".concat(colors[myvar]));
}
var emp2 = {
    empCode: "E12",
    empName: "PQR",
    designation: "Solution Engg.",
    salary: 200000
};
console.log("Code - " + emp2.empCode + " Name - " + emp2.empName + " Role - " + emp2.designation + " Salary - " + emp2.salary);
