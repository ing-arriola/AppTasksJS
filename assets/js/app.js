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

    //Listener to wait until the document is loaded... because when the document is 100% loaded we must show the task on the LS
    document.addEventListener('DOMContentLoaded',showLocalStorage)
    
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
    
    //Add task to the LocalStorage
    addTaskToLocalStorage(task)
}

function deleteTask (e){
    e.preventDefault
    //The link to delete the task has the name of "delete-task"; then we only need to validate the name of the className
    console.log('hola')
    if(e.target.className === 'delete-task'){
        e.target.parentElement.remove()//It's necesary to removethe li that contains the delete-task link

    }
    
}

//Show data from the LS on the DOM
function showLocalStorage(){
    let tasksFromLS

    tasksFromLS=getTasksFromLocalStorage()

    tasksFromLS.forEach(task => {
        //Add a link to delete the task
    const deleteLink=document.createElement('a')
    deleteLink.classList='delete-task'//Add a class to style the link
    deleteLink.innerText='X'

    //Creating a new li element to list the task in the HTML
    const li=document.createElement('li')
    li.innerText=task//Add the text of the task to the li
    li.appendChild(deleteLink)//Add the child for every task... i.e. when you add a task you will be able to delete them one by one
    TaskList.appendChild(li)//Add the new child element
        
    });


}

function addTaskToLocalStorage (task){
    let tasks//This will be an array to hold the task from the LS

    tasks=getTasksFromLocalStorage()//Here we get all the task from the LS, if the LS has no one task the function will return a void array
    
    tasks.push(task)//Add the new task to the previous array of task
    //add to localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks))//Save into the LS
}

function getTasksFromLocalStorage(){
    let tasks
    if(localStorage.getItem('tasks') === null ){//Query to the LS .... Do you have any task?
        tasks=[]//LS: No i don't  have task yet.. :(
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'))//LS: Yes i have some task... DEV:OK!!, let's parse into a JSON :)
    }
    return tasks
}