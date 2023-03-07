// event for Button
document.querySelector('#get-jokes').addEventListener('click',getJokes);

// Event Handler Function
function getJokes(e){
 // console.log('HII');  // console succesfully logged
  const number = document.querySelector('input').value;
  console.log(number);
  const xhr = new XMLHttpRequest();
  // open

  xhr.open('GET',`http://api.icndb.com/jokes/random/5`,true);
  
  xhr.onload() = function(){
    if(this.status === 200)
    {
      const response = JSON.parse(this.responseText());
      console.log(response);
    }
  }
  
  xhr.send();
  e.preventDefault();
  
}
