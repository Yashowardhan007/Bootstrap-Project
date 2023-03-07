/* User Interface Variables Needed */
const form  =document.querySelector('#task-form')
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

//Load All Event Listeners

function loadEventListeners(){
  //Add Task Event
  form.addEventListener('submit',addTask);
  // Remove Task Event

  taskList.addEventListener('click',removeTask);

  clearBtn.addEventListener('click',clearTask)

  filter.addEventListener('keyup',filterTask);

}

// Adding The Task

function addTask(e)
{
    if(taskInput.value === ''){
      alert('Add A Task');
    }

    //Creata a list('li') element

    const li=document.createElement('li');
    li.className = "collection-item";

    // Create Text Node And Append li

    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link

    const link=document.createElement('a')
    link.className = 'delete-item secondary-content';

    //Add Icon Html
    
    link.innerHTML='<i class="fa fa-remove"></i>';

    // Append The Link To Li

    li.appendChild(link);

    // Append The Li To The UL
    taskList.appendChild(li);

    //Store In Local Storage

    storeTaskInLocalStorage(taskInput.value);

    // Clear Input

    taskInput.value = '';

    e.preventDefault();
}



 // Remove Task

 function removeTask(e)
 {
     if(e.target.parentElement.classList.contains=('delete-mite')){
       if(confirm('Are You Sure')){
        e.target.parentElement.parentElement.remove();
       }
     }
    //console.log(e.target);
 }

 // Clear Task

 function clearTask()
 {
   taskList.innerHTML='';

   // Alternate Method To clear The List

   while(taskList.firstChild)
   {
     taskList.removeChild(taskList.firstChild)
   }
 }

 // Filter Task

 function filterTask(e)
 {  
   const text=e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
        task.getElementsByClassName.display='block';
        }else{
          task.style.display='none';
        }
   });

   // Store Task In Local Storage

 function storeTaskInLocalStorage(task){
  let task;
  if(localStorage.getItem('tasks') === null)
  {
    tasks=[];

  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));

  }
  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}
  

 }