import { createContext , useState} from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
const TasksContext = createContext();

function Provider({ children }) { 
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
  const sharedValuesAndMethods = {
    deleteTaskById ,
    editTaskById,
    createTask , 
    fetchTask , 
    task
};
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.array.isRequired,
}
export { Provider };
export default TasksContext;