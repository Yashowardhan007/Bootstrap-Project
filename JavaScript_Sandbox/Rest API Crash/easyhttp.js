function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make An Http GET Request
/*
easyHTTP.prototype.get  = function(url,callback){
  // open 
  this.http.open('GET',url,true);
  
  // onload

  let self = this;

  this.http.onload = function(){
      if(self.http.status === 200){
        callback(self.http.responseText);
      }else{
        callback('Error:' + self.http.status); 
      }

  }

  

  //send

  this.http.send();    

}
*/

//Make Http Post Request

easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    
    this.http.onload = function(){
      if(self.http.status === 200){
        callback(null,self.http.responseText);

      }else{
        callback('Error:' + self.http.status);
      }
    }

    this.http.send(JSON.stringify(data));

}

// Make Http Put Request

easyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let self = this;
  
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,self.http.responseText);

    }else{
      callback('Error:' + self.http.status);
    }
  }

  this.http.send(JSON.stringify(data));

}

// Make Http Delete Request

easyHTTP.prototype.delete  = function(url,callback){
  // open 
  this.http.open('DELETE',url,true);
  
  // onload

  let self = this;

  this.http.onload = function(){
      if(self.http.status === 200){
        callback(null,'Post Deleted');
      }else{
        callback('Error:' + self.http.status); 
      }

  }

  

  //send

  this.http.send();    

}

