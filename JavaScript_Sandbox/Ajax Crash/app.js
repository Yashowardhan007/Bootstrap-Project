// Event Listner For Button
document.getElementById('button').addEventListener('click',loadData);


// functions

function loadData(){
  // Create XMLHttpRequest  Object
  
  const xhr = new XMLHttpRequest();

  // open Functionality

  xhr.open('GET','data.txt',true);

  // Optional - Used For Spinners and Loaders
  /*
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.onreadystatechange);
  }
  */
  // onload
 
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`; 

       }
       
    }
    
  
 

  // onreadystate change which an old method
  /*
  xhr.onreadystatechange = function(){
      if(this.status === 200 && this.readyState ===4){
        console.log(this.responseText);
      }
  }
  */
  //readystate values
  // 0:request not initialised
  // 1: Server Connection Established
  // 2: request received
  // 3: processing request
  // 4: request completed

  // onerror
  xhr.onerror = function(){
    console.log('Error');
  } 
  // Send
  xhr.send();

  

}