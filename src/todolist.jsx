// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Todolist = () => {

    const [tasks, setTasks] = useState([]);  // Renamed to 'tasks' for clarity
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            // Add the new task as a separate item in the array
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        } else {
            alert("Write a task first!....");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todolist">
            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="addbtn" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className='deletebtn' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='upbtn' onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className='downbtn' onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Todolist