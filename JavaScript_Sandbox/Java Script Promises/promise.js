// Promises in java script

const posts = [
  {title:'Post One', body:'This Is The Post One'},
  {title:'Post Two' ,body:'This Is Post Two'}
]

function createPost (post){

  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);

      const error = true;
      if(!error){
        resolve();
      }else{
        reject('Error');
      }
     
    },2000);
  });
 
}

function getPosts()
{
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output = output + `<li>${post.title}:${post.body}</li>`
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title:'Post Three',body:'This Is Post Three'}).then(getPosts).catch(function(err){
  console.log(err);
});