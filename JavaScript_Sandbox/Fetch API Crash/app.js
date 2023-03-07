document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);
// get local Text
function getText()
{
  fetch('test.txt') // fetch returns promises
  .then(function(res){
    return res.text();
  })
  .then(function (data){
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  })
}

//get JSON data
function getJson()
{
  fetch('post.json') // fetch returns promises
  .then(function(res){
    return res.json();
  })
  .then(function (data){
    console.log(data);
    let output = '';
    data.forEach(function(posts){
      output += `<li>${posts.title}</li>`;
      document.getElementById('output').innerHTML = output;
    });

 
  })
  .catch(function(err){
    console.log(err);
  })
}

// get data from github api

function getExternal()
{
  fetch('https://api.github.com/users') // fetch returns promises
  .then(function(res){
    return res.json();
  })
  .then(function (data){
    console.log(data);
    let output = '';
    data.forEach(function(posts){
      output += `<li>${posts.login}</li>`;
      document.getElementById('output').innerHTML = output;
    });

 
  })
  .catch(function(err){
    console.log(err);
  })
}

