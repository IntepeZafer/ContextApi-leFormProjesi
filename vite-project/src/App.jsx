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

  const deleteTaskById = (id) => {
    const afterDeletingTask = task.filter((task) => {
      return task.id!== id;
    })
    setTask(afterDeletingTask);
  };
  const editTaskById = (id , updateTitle ,updateTaskDesc) => {
    const updatedTask = task.map((task) => {
      if(task.id === id){
        return {id : id , title : updateTitle , taskDesc : updateTaskDesc};
      }
      return task;
    })
    setTask(updatedTask);
  };
  
  return (
    <>
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={task} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
    </>
  )
}

export default App
