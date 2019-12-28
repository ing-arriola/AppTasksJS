//Vars of the app
const TaskList=document.getElementById('Tasks-List')


//Event Listeners 
eventListeners();

function eventListeners(){
    //This executes when the form is submitted
    document.querySelector('#formulario').addEventListener('submit',addTask)
}

//Functions

function addTask(e){
    e.preventDefault
    console.log('Form submitted')
}