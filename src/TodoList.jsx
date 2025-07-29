import{useState} from "react";
import "./TodoList.css";

export default function TodoList(){

  let [todos, setTodos]=useState([]);
  let [newTodo, setNewTodo]=useState("");

  let addNewTask=()=>{
    console.log("add tasked");
    if (newTodo.trim() !== ""){
      setTodos([...todos, newTodo]);
      setNewTodo("");
   }
 };


  let deleteTask=(indexToDelete)=>{
    setTodos(todos.filter((todo, index)=>index !== indexToDelete));
 };

  let updateTodoVal=(event)=>{
    setNewTodo(event.target.value);
 };

  let handleKeyPress=(event)=>{
    if (event.key==="Enter"){
      addNewTask();
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">TODO APP</h1>
        <input
          className="todo-input"
          value={newTodo}
          placeholder="What needs to be done?"
          onChange={updateTodoVal}
          onKeyPress={handleKeyPress}
        ></input>
        <button className="add-button" onClick={addNewTask}>
          Create Task
        </button>

        <h4>My Tasks ({todos.length})</h4>
       {todos.length===0 ? (
          <p
            style={{textAlign: "center", color: "#666", fontStyle: "italic"}}
          >
            No tasks yet. Add one above! 📝
          </p>
        ) : (
          <ul className="todo-list">
           {todos.map((todo, index)=>(
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <button
                  onClick={()=>deleteTask(index)}
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "8px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    position: "absolute",
                    right: "16px",
                 }}
                  title="Delete task"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h3
        style={{
          position: "fixed",
          bottom: "10px",
          left: "45%",
          margin: "0",
       }}
      >
        Made By Sourabh
      </h3>
    </>
  );
}
