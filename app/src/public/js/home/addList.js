let ItemList=[] 
const InputButton = document.querySelector('button')
let Todo = document.querySelector('input')
  
Todo.focus(); 
InputButton,addEventListener('keydown', function(e){  
    if(e.key === "Enter"){
        Click();
    }
})

InputButton,addEventListener("click", Click); 


function Click (){
    let ListHouse = document.querySelector('.list')
    let TodoList = document.createElement('div');
    TodoList.className="todoList" 
    
    TodoList.innerHTML = Todo.value;
    ListHouse.appendChild(TodoList);

    if(TodoList.innerHTML != "" ){
        ItemList.push(TodoList.innerHTML); 
        Todo.value = ""; 
    }
     console.log(ItemList);       
    
    TodoList.addEventListener("click",Delete)
    function Delete() {
        let todoList = document.querySelector('.todoList')
        let ListHouse = document.querySelector('.list')
        
        ListHouse.removeChild(this); 
        
        ItemList.pop(this);
        console.log(ItemList);
    }
}
