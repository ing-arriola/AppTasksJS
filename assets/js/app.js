//Vars of the app
const TaskList=document.getElementById('Tasks-List')


//Event Listeners 
eventListeners();

function eventListeners(){
    //This executes when the form is submitted
    document.querySelector('#formulario').addEventListener('submit',addTask)

    //Delete Tasks: We need attend all the clicks on the Tasks-List div, this is because the tasks will add
    //to the list and we don't have previously the code of the task... it add to the DOM on the fly..
    TaskList.addEventListener('click',deleteTask)
}

//Functions

function addTask(e){
    e.preventDefault
    console.log('Form submitted')//Send message to the console 
    //Well the message works.. then lets get the message from the text-area task
    const task=document.getElementById('task').value

    //Add a link to delete the task
    const deleteLink=document.createElement('a')
    deleteLink.classList='delete-task'//Add a class to style the link
    deleteLink.innerText='X'

    //Creating a new li element to list the task in the HTML
    const li=document.createElement('li')
    li.innerText=task//Add the text of the task to the li
    li.appendChild(deleteLink)//Add the child for every task... i.e. when you add a task you will be able to delete them one by one
    TaskList.appendChild(li)//Add the new child element

    console.log(task)
}

function deleteTask (e){
    e.preventDefault
    //The link to delete the task has the name of "delete-task"; then we only need to validate the name of the className
    console.log('hola')
    if(e.target.className === 'delete-task'){
        e.target.parentElement.remove()//It's necesary to removethe li that contains the delete-task link
        
    }
    
}