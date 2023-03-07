const http = new easyHTTP;

// Get Posts
/*
http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
  console.log(response);
  if(err){
      console.log(err); 
  }else{ 
    console.log(response);  
  }


});
*/ 

// Create data

const data = {
  title: 'Custom Post',
  body:'This Is A Custom Post'
};
/*
// Create Post

http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
  if(err){
    console.log(err);

    
  }else{console.log(post);}

});
*/

// Update Post

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{console.log(post)}
// })

//DElete

http.delete('https://jsonplaceholder.typicode.com/posts/1})',function(err,response){
  console.log(response);
  if(err){
      console.log(err); 
  }else{ 
    console.log(response);  
  }

})