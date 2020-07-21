var list = document.querySelector("#app ul");
var input = document.querySelector("#write")
var btn = document.querySelector("#button")

var todos = [];


function renderList(){
    list.innerHTML = ""
    
    for(todo of todos){
        var createTodo = document.createElement("li")
        var todoText = document.createTextNode(todo)

        var linkTodo = document.createElement("a")
        linkTodo.setAttribute("href", "#")

        var pos = todos.indexOf(todo)
        linkTodo.setAttribute("onclick", "deleteTodo("+ pos +")")

        var textDelete = document.createTextNode("Excluir")

        linkTodo.appendChild(textDelete)

        createTodo.appendChild(todoText)
        createTodo.appendChild(linkTodo)
        list.appendChild(createTodo)
    }
}

function addTodo(){
    var todoText = input.value

    todos.push(todoText)
    input.value = ""
    renderList()
}

btn.addEventListener("click", addTodo)

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderList()
}
