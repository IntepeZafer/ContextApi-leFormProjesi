import TaskCreate from '../public/Components/TasksCreate/TaskCreate'
import TaskList from '../public/Components/TaskList/TaskList'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [task, setTask] = useState([])

  const createTask = async (title , taskDesc) => {
    const response = await axios.post('http://localhost:3000/task' , {
      title : title,
      taskDesc : taskDesc,
    });
    const createdTask = [...task,response.data,];
    setTask(createdTask)
  };
  const fetchTask = async () => {
    const response = await axios.get('http://localhost:3000/task')
    setTask(response.data);
  };
  useEffect(()=>{
    fetchTask();
  },[]);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/task/${id}`)
    const afterDeletingTask = task.filter((task) => {
      return task.id!== id;
    })
    setTask(afterDeletingTask);
  };
  const editTaskById = async (id , updateTitle ,updateTaskDesc) => {
    try{
      await axios.put(`http://localhost:3000/task/${id}` , {
        title : updateTitle,
        taskDesc : updateTaskDesc,
      })
      const updatedTask = task.map((task) => {
        if(task.id === id){
          return {id : id , title : updateTitle , taskDesc : updateTaskDesc};
        }
        return task;
      })
      setTask(updatedTask);
    }catch(error){
      console.error("Görev güncellenirken bir hata oluştu:", error);
    };
    
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
