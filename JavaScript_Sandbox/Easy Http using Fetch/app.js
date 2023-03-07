const http = new EasyHTTP;

// Get Users
/*
 http.get('https://jsonplaceholder.typicode.com/users').then(data =>console.log(data))
 .catch(err => console.log(err));
*/
// -------------------//
// Post
//1-creating data
const data = {
  name:'abc xyz',
  username:'abxxyz',
  email:'abc@xyz.com'
}

// 2-Actually creating the post
/*
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data =>console.log(data))
.catch(err =>console.log(err));
*/

 // Update Post
/*
 http.put('https://jsonplaceholder.typicode.com/users/2',data)
 .then(data =>console.log(data)).then(err => console.log(err));
 */

 // Delete Post

 http.delete('https://jsonplaceholder.typicode.com/users/2')
 .then(data =>console.log(data))
 .then(err => console.log(err));