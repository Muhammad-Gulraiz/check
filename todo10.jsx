import React, { useState } from 'react'
import '../styleCss/todo2.css'

function todo10() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const saveTask = () => {
    if (editingIndex !== null && newTask.trim()) {
      tasks[editingIndex] = newTask.trim();
      setTasks([...tasks]);
      setNewTask('');
      setEditingIndex(null);
    }
  };

  return (
    <div className='div1'>
      <h3 className='div2'>Todo List</h3>
      <input
        type="text" className='div3'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={editingIndex !== null ? saveTask : addTask} className='div4'>
        {editingIndex !== null ? 'Save' : 'Add'}
      </button>
      <ul className='div5'>
        {tasks.map((task, index) => (
          <li className='div6' key={index}>
            {task}
            <div className='div7'>
              <button className='delete' onClick={() => deleteTask(index)}>Delete</button>
              <button className='edit' onClick={() => editTask(index)}>Edit</button>
            </div>

          </li>
        ))}
      </ul>
    </div>

  )
}

export default todo10
