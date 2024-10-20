import TaskCreate from '../public/Components/TasksCreate/TaskCreate'
import { useState } from 'react'
import './App.css'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  const createTask = (title , taskDesc) => {
    console.log(`Task created: ${title} - ${taskDesc}`);
  };

  return (
    <>
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
    </div>
    </>
  )
}

export default App
