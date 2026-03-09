import { IEmployee } from "./ObjectDemo";
console.log(" Typescript learning...!")
 
let myVar:any=120;
console.log(`now myVar is a numerical with value - ${myVar}`);

let x:number=44;
console.log(` X = ${x}`);

let company:string="Tesla";
console.log(` X = ${x}`);


myVar="Morris Garage";
console.log(`now myVar is a String with value - ${myVar}`);

let flag:boolean=true;
if(flag)
{
    console.log("Now the condition has satisfied");  
}

let numArr:number[]=[1,2,3,4,5,6]
for(let z of numArr){
    console.log(` Element - ${z}`)
}

let colors:string[]=["white","blue","peach","purple","orange"];
for(let myvar in colors){
    console.log(` Color - ${colors[myvar]}`)
}


let emp2:IEmployee={
    empCode:"E12",
    empName:"PQR",
    designation:"Solution Engg.",
    salary:200000  
}       
console.log("Code - "+emp2.empCode+" Name - "+emp2.empName+" Role - "+emp2.designation+" Salary - "+emp2.salary)        

