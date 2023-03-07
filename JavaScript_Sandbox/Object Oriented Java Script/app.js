/*
function person(name,dob){
  this.name = name;
  this.birthday = new Date(dob);
  const diff=Date.now();
  console.log(diff);
  
}
let yash = new person('Yashowardhan' , '12 September 1994');
//console.log(yash);
*/

// const name1 = 'Yash';
// console.log(typeof name1);

// const name2 = new String('Yash');

// console.log(typeof name2);

//---------------------------------//

// PROTOTYPES ExPLAINED //
/*
function Person(firstName,lastName,dob){

  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function(){

  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate =  new Date(diff);

    

  //   return Math.abs(ageDate.getUTCFullYear() - 1994);
  // }
}

// Calculate Age

Person.prototype.calculateAge = function(){

  const diff = Date.now() - this.birthday.getTime();
  const ageDate =  new Date(diff);

  

  return Math.abs(ageDate.getUTCFullYear() - 1994);
}

const john = new Person('John' , 'Doe' , '8-12-1994');
const mary = new Person('Yashowardhan', 'Dole' ,'12-19-1994');

console.log(mary);
console.log(john.calculateAge());
*/

//----------------------------//
//Protypal Inheritance //

// Person Constructor

function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;

}

// Greeting

Person.prototype.greeting = function (){

  return `Hello There ${this.firstName} ${this.lastName}`;

}

const person1 = new Person('Yashowardhan', 'Dole');

console.log(person1.greeting());

// customer Constructor

function Customer(firstName,lastName,phone,membership){

  Person.call(this,firstName,lastName);

  this.phone=phone;

  this.membership=membership;
}

// Inherit Methods From Person Prototype

Customer.prototype = Object.create(Person.prototype);

const customer1 = new Customer('Yash','Dole','8149109554','standard');

console.log(customer1.greeting);