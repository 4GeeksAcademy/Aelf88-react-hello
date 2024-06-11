import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
    const [newTodo, setNewestTodo] = useState("New todo example");
    const [todos, setTodos] = useState(["First test task", "Second test task"]);
    const handleClick = () => {
        console.log("New todo example:", newTodo);
        setTodos([...todos, newTodo]);
        setNewestTodo("");
    }
    const deleteTask = (index) => {
        const newList = todos.filter((todo, i) => i !== index)
        console.log(index)
        setTodos(newList)
    }
    const handleChange = (event) => {
        setNewestTodo(event.target.value);
    }
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">To-do List with Fetch!</h1>
            <div className="container">
                <div className="d-flex gap-2">
                    <input type="text" className="form-control " value={newTodo} onChange={handleChange} />
                    <button className="btn btn-primary"onClick={handleClick}>
                        Add task
                    </button>
                </div>
                <p>New task: {newTodo}</p>
                <ul> 
                    {todos.map((todo, index) => (
                        <li className="list-group-item d-flex justify-content-between .bg-secondary"key={index}>
                            {todo} <button className="btn btn-danger " onClick={() => deleteTask(index)} >Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Home;
















