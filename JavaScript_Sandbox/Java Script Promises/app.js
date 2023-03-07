// callbacks explained

const posts = [
  {title:'Post One', body:'This Is The Post One'},
  {title:'Post Two' ,body:'This Is Post Two'}
]

function createPost (post , callback){
  setTimeout(function(){
    posts.push(post);
    callback();
  },2000);
}

function getPosts()
{
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output = output + `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title:'Post Three',body:'This Is Post Three'},getPosts);