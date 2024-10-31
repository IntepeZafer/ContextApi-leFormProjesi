import TaskCreate from '../TasksCreate/TaskCreate';
import { TasksContext } from '../Context/Task';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './TaskShowStyle.css'


function TaskShow({task}) {
    const {deleteTaskById , editTaskById} = useContext(TasksContext);
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTaskById(task.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleClick = (id , updateTitle , updateTaskDesc) => {
        setShowEdit(false);
        editTaskById(id, updateTitle, updateTaskDesc);
    }
    return ( 
        <div className='TaskShowStyle'>
            {showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleClick}/> : <div>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div className='tasShowkbutton'>
                    <button onClick={handleDeleteClick}>Sil</button>
                    <button onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>}
        </div>
     );
}

TaskShow.propTypes = {
    task: PropTypes.object.isRequired, 
    onDelete: PropTypes.func.isRequired, 
    onUpdate: PropTypes.func.isRequired,
};

export default TaskShow;

