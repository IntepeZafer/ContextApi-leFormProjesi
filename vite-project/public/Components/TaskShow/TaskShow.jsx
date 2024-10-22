import PropTypes from 'prop-types';
import { useState } from 'react';
import './TaskShowStyle.css'
import TaskCreate from '../TasksCreate/TaskCreate';

function TaskShow({task , onDelete , onUpdate}) {
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        onDelete(task.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleClick = (id , updateTitle , updateTaskDesc) => {
        setShowEdit(false);
        onUpdate(id, updateTitle, updateTaskDesc);
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

