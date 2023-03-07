const posts = [
  {title:'Post One', body:'This Is Post 1 '},
  {title:'Post Two' , body:'This Is Post 2'}
];

function createPost(post /*callback*/){
  // To Create A Promise
  return new Promise(function(resolve,reject){ setTimeout(function(){
    posts.push(post);

    const error = true;
    if(!true){
      resolve() //in Promises instead of callback resolve is used

    }else{
      reject('Error:Somerthing is Wrong');
    }
    //callback();
    
  },2000);})
 
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

createPost({title:'Post Three',body:'This Is Post 3'}).then(getPost).catch(function(err){
  console.log(err)
})