const posts = [
  {title:'Post One', body:'This Is Post 1 '},
  {title:'Post Two' , body:'This Is Post 2'}
];

function createPost(post,callback){
  setTimeout(function(){
    posts.push(post);
    callback()
  },2000);
}

function getPost(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  },1000);
}

createPost({title:'Post Three',body:'This Is Post 3'},getPost)