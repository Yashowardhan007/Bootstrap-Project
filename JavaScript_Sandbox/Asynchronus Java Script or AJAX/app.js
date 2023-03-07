const btn = document.getElementById('button');
btn.addEventListener('click' , loadData);

function loadData()
{
  // create xmlhttprequest object
  const xhr =  new XMLHttpRequest();

  // open

  xhr.open('GET','data.txt',true);

  // optional used for loaders or spinners

  xhr.onprogress = function(){

   console.log('READYSTATE' , xhr.readyState);
  }

  // xhr.onerror
  

  // onloading or when the event is triggered
  
  xhr.onload = function(){
    console.log('Ready state' , xhr.readyState);
    if(this.status === 200){
      //console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1  >${this.responseText}<h1>`;
    }
  
    /*
    xhr.onreadystatechange = function(){
      console.log('Ready state' , xhr.readyState);  
      if(this.status === 200 && this.readyState ===4){
        console.log(this.responseText);
      }
      */
    }  
    // http statuses
    /*
    // 200: "ok"

    // 403: "Forbidden"
    // 404: "Not Found "
    */
    // ReadyState Values

    /*
    
    0:request not initialized
    1:server connection established
    2:request received
    3:processing request
    4: request finished and response is ready

    */
   xhr.send();
  }

