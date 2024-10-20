//1. Javascript is a dynamic language,used to create dynmaic and interactive webpages.plays a key role on client side. It's a web of browser

//2.
let userage=19
let userName="Kiruthika"

/* 
This function calculates area of rectangle,takes two parameters length,breadth,return area by multiplying l and b and then logged in the console
 */

function area(l,b){
    let area=l*b
    console.log(area)
}
area(10,10)

//4.
let num1=8
let num2=10
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

//5.
var num=3                        //int - used to represent numeric values
console.log(num)           
var personname="kirthika"            //string - used to repersent textual data
console.log(personname)
var day=true                   //boolean - logical entities only two values true r false
console.log(day)               
var car;                    //undefined - car is declared but not initialized
console.log(car)
var person=null              //null - person has no value
console.log(person)
var values=[1,"hi",false]      //arr- collection of elements of diff data types
console.log(values[2])

//6. function
function greetUser(name){
    console.log("hello " + name)
}
greetUser("kir")

//7.if else
let temperature=60
if(temperature>30){
    console.log("greater than 30")
}else{
    console.log("less than 30")
}

//8.loop
for(let i=1;i<=5;i++){
    console.log(i)
}

//9.loose equality- compares two values are same
console.log(5 == "5") //true
//strict equality- checks both values and datatype
console.log(5 === "5") //false