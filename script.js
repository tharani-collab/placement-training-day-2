//function ShowMyMessage(){
    console.log("Hello");
//}

//1.Number

let b=20;
let d=60.0;
console.log(d);

//2.String

let str1="Hello World";
let str2='Hello World';
console.log(typeof str1);
console.log(typeof str2);

//3.Boolean

let isTrue=true;
console.log(isTrue);
console.log(typeof isTrue);

//4.Null

let isValid=null;
let a=20;
if(a>=18)
{
    isValid=true;
}
console.log(a);
console.log(isValid);
console.log(typeof a);

//5.Undefined

let c;
console.log(a);
console.log(typeof a);

//6.Symbol

let sym=Symbol("Hello");
console.log(sym);
console.log(typeof sym);

//7.Bigint

let bigInt=BigInt(1234567891011121314151617181920);
console.log(bigInt);
console.log(typeof bigInt);

//Non Primitive 

//1.Object

const person={
    name:"John",
    age:30,
    isStudent :false,
    college: "Sri Eshwar College of Engineering",
    address:{
        city:"Chennai",
        state:"Tamil Nadu"
    },
    contactNumbers: [9994400804, 8489738089]

}
person.college="SECE";
delete person.isStudent;
person.isGraduate=true;
console.log(person.name);
console.log(person);


//2.Array

const arr=[1,2,3,4,5];


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Build in array Menthod
//1.Push

arr.push(6);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//2.unshift

arr.unshift(0);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//3.pop

arr.pop();
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//4.Shift

arr.shift(1);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//5.include

console.log(arr.includes(5));

//6.indexof

console.log(arr.indexOf(5))

//7.slice

const arr_copy=arr.slice(2,5);
console.log(arr_copy);

//Functions
function name(){
   console.log("Helo World");
}
name();
name();

function add(a)
{
    console.log("Hello "+a)
}
add("Gokul");
add("Arun");
