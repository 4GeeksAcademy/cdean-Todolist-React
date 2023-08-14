import React, {useState} from "react";


const TodoList = () => {
const [itemList, setItemList] = useState("");
const [todoList, setTodoList] = useState([]);

function handleInput(event) {
    setItemList(event.target.value);
}

function agregar(event) {
    if (event.key === "Enter" && itemList != "") {
        setTodoList([...todoList, itemList]);
        setItemList(""); 
    } 
}


function suprimir(index) {
    const newList = todoList.filter((item, i) => index !== i);
    setTodoList(newList)
}
return (
    <div className="text-center">
        <h1>ToDo List</h1>
        <ul className="list-group w-25 mx-auto">
            <li className="list-group-item">
                <input className="form-control" value={itemList} onChange={handleInput} onKeyDown={agregar} type="text" placeholder="Escribe la tarea" aria-label="default input example"/>
            </li>
            {todoList.map((todo, index) => <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{todo}

            <span className="badge rounded-pill" onClick={function() {suprimir(index)}}>X</span>
            </li>
            )}
            <li class="list-group-item">{todoList.length + " items left"}</li>
        </ul>
	</div>
)
}

export default TodoList;