const http = new easyHTTP;

// Get Post
/*
http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
if(err){
  console.log('Error');
  
}else{console.log(response);}

  
});
*/

 //  Post Request
//1-Create data
 const data = {
      title:'Custom Post' ,
      body:'This Is A Custom Post' 
 };

 // 2-Create Post
/*
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
 if(err)
 {
   console.log(err);
 }else {console.log(post);}

})
*/

// Put Request or update request
/*
http.put('https://jsonplaceholder.typicode.com/posts/10',data, function(err,post){
  if(err){
    console.log(err);
  }else{
    console.log(post)
  }
})
*/

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,posts){
  if(err){
    console.log(err);
  }else {
    console.log(posts);
  }
})


