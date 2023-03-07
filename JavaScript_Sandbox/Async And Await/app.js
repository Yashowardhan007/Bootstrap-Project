 // Async and Await 
 // It is The Part Of ES 2016 update

 async  function myFunc(){
   //return 'Hello';

   const promise = new Promise((resolve,reject) => {
     setTimeout( () => resolve('Hello') ,1000);
   });

   const res = await promise;
   console.log(res);
 }

 //console.log(myFunc());

 myFunc().then(res => console.log(res));