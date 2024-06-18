import React, { useState,useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskup(index) {
    if (index > 0) {
      const updatedTask = [...tasks];

      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }


 

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        value={newTask}
        placeholder="enter the task..."
        onChange={handleInputChange}
      />

      <button className="add-button" onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="move-btn" onClick={() => moveTaskup(index)}>
              👆
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
