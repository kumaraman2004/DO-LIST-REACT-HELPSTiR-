import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        text: newTask,
        completed: false,
        expanded: false,
        timestamp: new Date().toISOString()
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleExpanded = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, expanded: !task.expanded } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="search-input">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
        />
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div className="task-header">
              <input
                type="text"
                value={task.text}
                onChange={(e) => {
                  const updatedTasks = tasks.map((t, i) =>
                    i === index ? { ...t, text: e.target.value } : t
                  );
                  setTasks(updatedTasks);
                }}
                placeholder="Task description"
                disabled={task.completed}
              />
              <button onClick={() => toggleCompleted(index)}>
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => toggleExpanded(index)}>
                {task.expanded ? 'Collapse' : 'Expand'}
              </button>
            </div>
            {task.expanded && (
              <div className="task-details">
                <p>{task.text}</p>
                <p>{`Last updated: ${new Date(task.timestamp).toLocaleString()}`}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
