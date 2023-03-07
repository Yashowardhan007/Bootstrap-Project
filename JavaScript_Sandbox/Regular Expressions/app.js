// let re;
// re = /hello/i  // i is a flag in regular expressions that maks case insensitive
//re = /hello/g  // g is globa flag that will search fro all instances of hello
/*
console.log(re); // logs the regular expressions
console.log(re.source); // logs the actual souce 
*/
// exec() -Returns the result in an Array Or Null
/*
const result = re.exec('hello World');
console.log(result);
console.log(result[0]);
console.log(result.index); // logs the index at which pattern is matched
console.log(result.input);
*/

 //test()  returns true or false 
 /*
 const result = re.test('Hello');
 console.log(result);
 */
 

 // match() returns result similar to exec()
 /*
 const str = "Hello There";

 const result =  str.match(re);
 console.log(result);
*/
let re;
// Literal Characters
re = /hello/i;

// Metacharacter symbols

re = /^h/i;  //Must start with
re = /d$/i;   //Must End With
re = /^hello$/i  // Must Begin And End With  
re = /h.llo/i    // Matches any one Character
re = /h*llo/i    // Matches Any character Zero or more times
re = /gre?y/i
re = /gre?a?y/i  //Optional Charcater

// Brackets[] - Charcters Set

re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/i  // Must Be An UpperCase G Or F
re = /[^GF]ray/i  // Match ANythging Except G Or F
re = /[A-Z]ray/i  // Match Any Uppercase letter 
re = /[a-z]ray/i  // Match Any Lowercase letter 
re = /[A-Za-z]ray/i  // Match Any  letter 
re = /[0-9]ray/i  // Match Any  letter 

//Paranthesis
 

// Curly Braces {} Quantifiers
re = /Hel{2}o/  // Must Occusr Excactly {m} times
re = /Hel{2,4}o/  // Must Occur between 2-4 Excactly {m} times
re = /Hel{2,}o/   //Must Occur minimum 2 times and maximum n times
//String To Match

const str = 'Hello ';
  
// Log Results



// Logging The Results

const result = re.exec(str);
console.log(result);

function reTest(re,str)
{
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  }
  else
  {
    console.log(`${str} does not match ${re.source }`)
  }
}
reTest(re,str);