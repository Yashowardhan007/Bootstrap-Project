// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting='Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1 ,b:2});
// console.table({a:1,b:2});

// // To Declare Variables use var,let,const

// var name='Yashowardhan';
// console.log(name);
// let name='John Doe';
// console.log(name);

/* const variable needs to be initialized 
 Once Initialized u cannot reassign it again


*/
//-----------------------------------------//
/*
// TYPE CONVERSION//
let val;
 

//1-Number To String
val=String(5);
 
// String Around Expression
 val=String(4+4); 

 // Boolean To A String
  val=String(true);

// Date To A String
val=String(new Date()); 

// Array To A String
val=String([1,2,3,4,5,6]);

// To String Method

val=(5).toString();

// String To Number

val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello'); // Output is NAN 'NAN':Not A Number
val=Number([1,2,3,4,5,6]);

// parseInt and parseFloat method

val=parseInt('100.30');
val=parseFloat('100.202');

// Examples of Type Coercion
 const val1=String(5);
 const val2=6;
 const sum=val1 + val2;



// OUTPUT//
console.log(val);
console.log(typeof val);
//console.log(val.length);

console.log(val.toFixed(2));

*/



//---------------------------------------//
// NUMBERS AND THE MATH OBJECT//
/*
const num1=100;
const num2=50;
let val;

// Simple Math With Numbers

val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 - num2;
val = num1 % num2;

// Math Objcet

val= Math.PI; // Pi number
val= Math.E;  // Eulers Number
val= Math.round(2.4);
val= Math.ceil(2.4);
val= Math.floor(2.4);
val=Math.sqrt(64); //square root
val=Math.pow(8,2); //power
val=Math.min(44,55,33); // minimum among the arrays
val=Math.max(44,55,33); // maximum among the arrays
val=Math.random(); // genrate a random number

val=Math.floor(Math.random() * 20 + 1);



// Output

console.log(val);
*/


//---------------------------------------------//
// STRINGS AND CONCATENATION // 
/*
 const firstName= 'William';
 const lastName= 'Johnson';
 let val;
 let age=36;

 const str='Hello World how are you doing';
 const college='I Study In VIT';
 val= firstName + lastName;

  //Concatenation
  val=firstName +  ' '  +  ' '  + lastName;

  // Append
  val='Yashowardhan ';
  val +='Dole';
  
  val='Hello I am ' + firstName + ' and  i am '+ age + ' old';
  //Escaping (with a backslash)

  val='That\'s awesome and it can\'t wait';

  // Length

  val=firstName.length;
// concat

val=firstName.concat(' ',lastName)

// Uppercase and Lowercase

val = firstName.toUpperCase();
val=lastName .toLowerCase();

// indexOf()

val=firstName.indexOf('W');
val=firstName.lastIndexOf('i');

// charAt()

val=firstName.charAt('2'); // returns character at specified index position
val=firstName.charAt(firstName.length-1); // returns last char

// to fet subString() out of a given String

val=firstName.substring(0,4);

// Slice()
val=firstName.slice(-3);

// Split()
val=str.split(' ');

// Replaced()

val=college.replace('VIT' , 'COEP'); // 'VIT' is parameter to be searched and 'COEP' is the term which replaces VIT 

// Include

val=college.includes('VIT')
 // output

 console.log(val);
 */

 //-------------------------------------------------------//
 //TEMPLATE LITERALS //

 // To Insert Dynamic Content into the the literals without template literals
 // This is The old ES5 Method
/*
 const name='Yashowaradhan';
 const age=24;
 const job='FULL STACK DEVELOPER';
 const city='pune';
 let html;

 html='<ul><li>Name: ' + name + ' </li><li>Age: ' + age + '</li><li>Job: ' + job+ '</li><li>City: ' +city+ '</li></ul>'

 html='<ul>' +
 '<li>Name: ' + name + ' </li>'+
 '<li>Age: ' + age + '</li>'+
 '<li>Job: ' + job+ '</li>'+
 '<li>City: ' +city+ '</li>'+
 '</ul>'

// TO Perform the above task with template strings also called aas template literals (ES6 method) //

html=`
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>


`

document.body.innerHTML=html;
*/

//------------------------------------------//
//ARRAYS AND ARRAY METHODS IN JAVASCRIPT //
/*

// CREATING ARRAYS

 const numbers=[43,56,33,44,36,6,5];
 const numbers2=new Array(22,45,33,76,54);
 const fruit=['Apple','Orange','Banana'];
 let val;
// Array Of Mixed Data Tyes
const mixed=[22,'hello',true,undefined,null,{a:1 ,b:1},new Date()]


// Array Length/Number of items in the array

val=numbers.length;

// Check if Is Array

val=Array.isArray(numbers);

// Get A Single Value From Array 
val=numbers[3];
// Insert Something In The Array
numbers[3]=444;

//Find Index Of Given Value
val=numbers.indexOf(444);

//Mutating Arrays
// Adding TO The End Of The Array
numbers.push(250);

//Adding to the front of the array
numbers.unshift(350);

// Popping The Elements From The Array
numbers.pop()

// Popping Elements From The Front
numbers.shift();

// Splice/To Delete Array Elements From The Desire Location

numbers.splice(1,1); // DELETE Elments From Staring Postion To End Position given by the two parameters

// Reverse The Array

numbers.reverse();
// Concatenate Arrays
val=numbers.concat(numbers2);

//Sort Word Arrays
 val=fruit.sort();
//Output

console.log(numbers);
console.log(val);
*/

//--------------------------------------------------//
//OBJECT LITERALS// 
/*
const person={
  firstName: 'Yashowardhan',
  lastName:'Dole',
  Age:25,
  email:'Xyz@gmail.com',
  hobies: ['coding','tv-series'],
  // object within an object or embedded object
  address:{
    city:'Pune',
    state:'Maharashtra'
  },
  getBirthYear:function(){
    return 2018 - this.Age;
  }
}
let val;
val=person;
// get specific value
val=person.firstName;
// another way to access the specific  value

val=person['firstName'];
val=person.Age;
val=person.hobies;
val=person.address.city; 
val=person.getBirthYear();
console.log(val)
*/
//---------------------------------------------
// DATE AND tIME FUNVTION IN JAVASCRIPT //
/*
let val;
let val2;

const today=new Date();

const birthday=new Date('9-12-1994 11:25:00');
val=birthday; 
val=today.getMonth();
val2=today.getDay();
console.log(val);
console.log(val2);
*/
//----------------------------------//
//IF STATEMENTS AND COMPARIOSN OPERATORS//
/*
const id=100;
// Equal To
if(id==100)
{
  console.log('CORRECT');

}else{
  console.log('INCORRECT');
}

// NOT Equal to
if(id!=100)
{
  console.log('CORRECT');

}else{
  console.log('INCORRECT');
}

// Equal To Value And Type
if(id==='100')
{
console.log('CORRECT');
}
else
{
  console.log('INCORRECT');
}

//  Not Equal To Value And Type
if(id!=='100')
{
console.log('CORRECT');
}
else
{
  console.log('INCORRECT');
}
*/
//-----------------------------//
//FUNCTIONS IN JAVASCRIPT //
/*
function greet(firstName='Yash',lastName='Dole')
{
  //console.log('Hello');
  return 'Hello ' + firstName  +' ' +  lastName;
}

console.log(greet());  // you can send parameters from here also

// Assigning Function To A Variabale
const square=function(x=9){
  
  return x*x*x;

}
console.log(square());

// IMMIDIATELY INVOKABLE FUNCTIONS  EXPRESSIONS
// THEY ARE CALLLED AS IIFEs

// (function(){
//   console.log('Immediate invokable functions ran');
// })();

const todo={
  add:function(){
    console.log('Add Todo');
  }
}

todo.add()
 */
//------------------------------------------//
//GENERAL LOOPS IN JAVASCRIPT//
// FOR LOOP
//  for(let i=0;i<10;i++)
//  {
//    if(i===2){
//      console.log('2 is my fav number');
//      continue; // continue indicates to cintinbue with the next iteration

//    }
//    if(i===5){
//      break;
//    }
//    console.log('Number ' + i);
//  }

// WHILE LOOP
// let j=0;

// while(j<10)
// {
//   console.log('Number' +j);
//   j++;
// }


// DO WHILE LOOP
// let i=10
// do{
//   console.log('Number ' + i); // This body is executed atleast once
// }while(i<10)


// Loooping through Arrays
/*
const cars=['Ford','Chevy','Honda','Fiat '];

for(let i=0;i<cars.length;i++)
{
  console.log(cars[i]);
}
*/


// For Each Method
/*
const cars=['Ford','Chevy','Honda','Fiat '];
// car argument is the iterator
cars.forEach(function(car){
  console.log(car);
})
*/

// MAP METHOD
/*
const users=[{id:1,name:'John'},
              {id:2,name:'Yashowardhan'},
              {id:3,name:'Dole'}
]
// user is the iterator
const ids=users.map(function(user){
  return user.id;
})
console.log(ids);
*/

// FOR IN LOOP
// Inside of aobjects consists of a key value pair
/*
const user={
  firstName:'John',
  lastName:'Doe',
  age:40


}

for(let x in user)
{
  console.log(x); // logging x just gives us the keys
  // To get the value along with key do the following
  console.log(`${x}=${user[x]}`);
}
*/
//----------------------------------------------//
//WINDOWS METHODS /OBJECTS AND PROPERTIES

//Alert:Its is the little box that pops up
/*
alert('Hello World');
*/
// Prompt:It is similar to alert but takes input
/*
const input=prompt();
alert(input);
*/

//Confirm
/*
if(confirm('Are You Sure'))
{
  console.log('YES');
}
else{console.log('no')};
*/

// Outer height and width
/*
let val;
val=window.outerHeight;
val=window.outerWidth;
console.log(val);
*/

// same way for inner height and width
/*
let val2;
val2=window.innerHeight
console.log(val2);
*/

// Scroll Points
/*
// Along X and Y Axis
val=window.scrollY;
val=window.scrollX;
*/


// location Object/*
/*Location Object Gives values of diff things like
ancestorOrigins: DOMStringList {length: 0}
origin: "http://127.0.0.1:5500"
protocol: "http:"
host: "127.0.0.1:5500"
hostname: "127.0.0.1"
port: "5500"
pathname: "/index.html"
search: ""
hash: ""
href: "http://127.0.0.1:5500/index.html"
*/


/*
val=window.location;
let val2=window.location.hostname;
console.log(val2);
*/

// Redirect to  specified page
/*
window.location.href='http://google.com'
*/

// History object:browsing history
//window.history.go();

//val=window.history.length;

//Navigator Object

//--------------------------------------------//
//BLOCK SCOPE WITH LET AND CONST