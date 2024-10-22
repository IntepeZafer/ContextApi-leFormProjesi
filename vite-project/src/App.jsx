import TaskCreate from '../public/Components/TasksCreate/TaskCreate'
import TaskList from '../public/Components/TaskList/TaskList'
import { useState } from 'react'
import './App.css'


function App() {
  const [task, setTask] = useState([])

  const createTask = (title , taskDesc) => {
    const createdTask = [
      ...task,{
        id : Math.round(Math.random()*9999),
        title : title,
        taskDesc : taskDesc,
      }
    ];
    setTask(createdTask)
  };
  
  return (
    <>
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={task}/>
    </div>
    </>
  )
}

export default App
