/*
let val;

val = document;
val = document.all; // html collection from entire document
val = document.all[2];// element at index 2 in the dom
val = document.all.length; //give count of all elements
val = document.head; // gives only head
val = document.body; // gives body
val = document.doctype; //  gives document type of html
val = document.domain; // gives domain name
val = document.URL;  // gives url
val = document.characterSet; // returns character set
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

//-------------------------//
//DOM SELECTORS FOR SINGLE ELEMENTS

//documents.getElementsByClassName
/*
const items=document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color='blue';

const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); 
*/

//document.getElementByTagName
/*
let lis=document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color='grey';

let list=Array.from(lis);
list.reverse();

list.forEach(function(li,index){
  console.log(li);
  li.textContent=`${index}:Hello`
})
console.log(list);
*/

//document.querySelectorAll

/*
const items=document.querySelectorAll('ul.collection li.collection-items');

items.forEach(function(item,index){
  item.textContent=`${index}:Hello`;
 
})
console.log(items);
*/
//-----------------------------------------//
//TRAVERSING THE DOM//
/*
let val;
const list=document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');

val=listItem;
val=list;
// Get Child Nodes
val=list.childNodes;
/* Console Output For childNodes
NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]

*/
//  val=list.childNodes[0];
//  val=list.childNodes[3].nodeName;
//  val=list.childNodes[0].nodeType;

 // 1-Element
 // 2-Attribute
 // 3-Text Node
 // 8-Comment
 // 9-Document
 // 10-Doctype
 //

// get childern element nodes
// val=list.children;
// val=list.children[1];
// list.children[1].textContent='Hello';

// //children of children node
// // To get actual elemenmts which excludes the text use the following
// val=list.children[3].children[0];
// val=list.firstChild;
// val=list.firstElementChild;

//Get Parent Node
// val=listItem.parentNode;
// val=-listItem.parentElement;
// val=listItem.parentElement.parentElement;
// val=list.childNodes; 

// console.log(val);

//----------------------------------//
//CREATING AND INSERTING ELEMENTS INSIDE THE DOM//
/*
const li = document.createElement('li');
//Add Class
li.className = 'collection-item'; 

//Add id
li.id = 'new-item';

//Add attribute

li.setAttribute('title','New Item');

// Create a text and append
li.appendChild(document.createTextNode('Hello World'));

// Create a new Link ELement

const link=document.createElement('a');
// Add Class

link.className='delete-item secondary content';
link.innerHTML='<i class="fa fa-remove"></i>'

// Append Link TO Li

li.appendChild(link);  

 
// Append Li as child to ul
console.log(li);
*/

//------------------------------//
//REPLACE ELEMENTS//
/*
//create element

const newHeading = document.createElement('h2');
//id
newHeading.id = 'task-title';

//New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

//Get Old Heading

const oldHeading=document.getElementById('task-title');

// Calling on a parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading,oldHeading);
console.log(newHeading);

//Remove  Element

const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');
// Remove List Item
lis[2].remove();

// Remove child
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTE

const firstLi=document.querySelector('li:first-child');
const link=firstLi.children[0];

// Classes
let val;
val=link.className;
val=link.classList;
val=link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val=link;

// Attributes

val=link.getAttribute('href');

// To set a Attribute
val=link.setAttribute('href','http://google.com');

// To check whether it has attribute

val=link.hasAttribute('href'); // returns true coz its consiste of href attribute

console.log(val);
*/


//----------------------------------//
// EVENT LISTERNERS AND EVENT OBJECTS//
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//   e.preventDefault();
// })

/*
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e)
{
  //console.log('Hey There!!!How are You Doing');

  let val;
  val = e;
  e.preventDefault();
  val=e.target;
  val=e.target.className;
  val=e.target.classList;

 
  
  

  console.log(val);
}
*/

//------------------------------------//
//MOUSE EVENTS //

// const clearBtn=document.querySelector('.clear-tasks');
// const card=document.querySelector('.card');
// const heading=document.querySelector('h5');

// Event Handler click
//clearBtn.addEventListener('click',runEvent);

// Double Click
//clearBtn.addEventListener('dblclick',runEvent);

//MouseDown
//clearBtn.addEventListener('mousedown',runEvent);

//MouseUp
//clearBtn.addEventListener('mouseup',runEvent);

// MouseEnter
//card.addEventListener('mouseenter',runEvent);

// MouseOut
//card.addEventListener('mouseleave',runEvent)

//Mouseover

//card.addEventListener('mouseout',runEvent)

//mouseleave

//card.addEventListener('mouseout',runEvent)

//mousemove
/*
card.addEventListener('mousemove',runEvent);

function runEvent(e)
{
  console.log(`EVENT TYPE= ${e.type}`);
    
}
*/

//-------------------------------------------//
//KEYBOARD EVENTS //

//const form=document.querySelector('form');
//const taskInput=document.querySelector('#task');
//Submit Event
//form.addEventListener('submit',runEvent);

//KeyDown Event

//taskInput.addEventListener('keydown',runEvent);

//Keyup
//taskInput.addEventListener('keyup',runEvent);

// Keypress

//taskInput.addEventListener('keypress',runEvent);

//Focus and Blurr

//taskInput.addEventListener('focus',runEvent);

//taskInput.addEventListener('blur',runEvent);
// function runEvent(e)
// {
//   console.log(`Event Type Is: ${e.type}`);

//   // To Get Input value
//   console.log(taskInput.value);
//   e.preventDefault();
// }

// document.body.addEventListener('click',deleteItem);

// function deleteItem(e)
// {
//   if(e.target.parentElement.classList.contains('delete-item'))
//   {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

//------------------------------------------------//
// LOCAL AND SESSION STORAGE//
localStorage.setItem('name' ,'Yashowardhan'); // Key,Value Pair
localStorage.setItem('age' ,'25'); // Key,Value Pair

//set session storage item
sessionStorage.setItem('surname','Dole'); //Item will be Cleared after the sessions ends

// remove from storage

localStorage.removeItem('name');

//get Items From Local Storage

const name=localStorage.getItem('name');
const age=localStorage.getItem('age');

console.log(name,age);





