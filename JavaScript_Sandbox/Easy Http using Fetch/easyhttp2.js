/*
*Easy http library
*Library For Making Http Request
*
* @version 2.0
* @author Yashowardhan Dole
* @license MIT

*/

class EasyHTTP
{ 
    // Make Http GET Request
    get(url){
      return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err ));
      });
     
    }

    // Post Http Request

    post(url,data)
    {
        return new Promise((resolve,reject) => {
          fetch(url , {
            method:'POST',
            headers:{
              'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        })
    }

    
    // Put Request

    put(url,data){

      return new Promise((resolve,reject) =>{

        fetch(url,{
            method: 'PUT',

            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
      })
    }

    // Make AN HTTP Delete Request

    delete(url){
      return new Promise((resolve,reject) => {

         fetch(url ,{
           method: 'DELETE',

           headers: {
             'Content-type':'application /json',

             body: JSON.stringify(data)
           }
         }).then(res => res.json()).then((data) => console.log('Resource Deleted')).catch(err => console.log(err));
      })
    }

   
    
   
}