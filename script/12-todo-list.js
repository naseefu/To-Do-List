const todoList = JSON.parse(localStorage.getItem('todo')) || [];
renderTodoList()
function renderTodoList(){
  let todoListHTML = '';
  document.querySelector('.div1').innerHTML = todoListHTML;
  
  todoList.forEach(function(todoObject,index){
    const {nameobject,dateobject}  = todoObject;
    const html = `
    <div class="c1">

     ${nameobject}</div><div class="c1"> ${dateobject} </div>
    <div class="c1"><button onclick="
      todoList.splice(${index}, 1);
      
      renderTodoList();
      localStorage.setItem('todo',JSON.stringify(todoList));
    " class="bt2">Delete</button>
    </div>`;
    todoListHTML+=html;

  })
  document.querySelector('.div1').innerHTML = todoListHTML;
}

function addtodo(){
  const inpueElement = document.querySelector('.inp1');
  const nameobject = inpueElement.value;
  const dateobject = document.querySelector('.inp2').value;
  todoList.push({
    nameobject,dateobject
  });
  inpueElement.value = '';
  localStorage.setItem('todo',JSON.stringify(todoList))
  renderTodoList();
  
}
  