import TaskCreate from '../public/Components/TasksCreate/TaskCreate';
import { TaskContext } from '../public/Components/Context/Task';
import TaskList from '../public/Components/TaskList/TaskList';
import { useEffect ,useContext} from 'react';
import './App.css'
function App() {
  const {fetchTask} = useContext(TaskContext);
  useEffect(()=>{
    fetchTask();
  },[]);
  return (
    <>
    <div className='App'>
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
    </>
  )
}

export default App
