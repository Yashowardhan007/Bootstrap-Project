document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);



function loadCustomer(e){

  const xhr = new XMLHttpRequest();

  // open

  xhr.open('GET','customer.json',true);
  // onload
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      // Parse Json Data as Object

      const customer = JSON.parse(this.responseText);

      const output = `<ul>
       <li>ID:${customer.id}</li>
       <li>Name:${customer.name}</li>
       <li>Company:${customer.company}</li>
       <li>Phone Number:${customer.phone}</li>
      </ul>`;
      document.getElementById('output').innerHTML = output;

    }
  }
  //send
  xhr.send();
}

function loadCustomers(e){
  const xhr = new XMLHttpRequest;
  //open
  console.log('Hiii')
  xhr.open('GET','customers.json',true);

  //onload

  xhr.onload = function(){
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      // Looping Through Array Of Customer Objects
      let output = " ";
      customers.forEach(function(customer){
        output += `<ul>
       <li>ID:${customer.id}</li>
       <li>Name:${customer.name}</li>
       <li>Company:${customer.company}</li>
       <li>Phone Number:${customer.phone}</li>
      </ul>`;

      });
       
      document.getElementById('customers').innerHTML = output;

    }

    
  }

  //send 
  xhr.send();    

}