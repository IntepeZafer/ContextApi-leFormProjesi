import PropTypes from 'prop-types';
import { useState } from 'react';
import './TaskCreateStyle.css'
function TaskCreate({onCreate , task , taskFormUpdate , onUpdate}) {
    
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    };
    
    const handleClick = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id , title , taskDesc)
        }else{
            onCreate(title , taskDesc);
        }
        setTitle("");
        setTaskDesc("");
    };
    
    return ( 
        <div>
            {taskFormUpdate ? <div className='taskContainer taskUpdate'>
        <h3>Lütfen Taskı Düzenleyiniz!</h3>
        <form className='taskForm'>
            <label className='taskLabel'>Başlığı Düzenleyiniz</label>
            <input value={title} onChange={handleChange} className='taskInput' type="text" />
            <label className='taskLabel'>Taskı Düzenleyiniz!</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className='taskInput' rows={5}></textarea>
            <button className='taskButton' onClick={handleClick}>Düzenle</button>
        </form>
    </div> : <div className='taskContainer'>
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className='taskForm'>
            <label className='taskLabel'>Başlık</label>
            <input value={title} onChange={handleChange} className='taskInput' type="text" />
            <label className='taskLabel'>Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className='taskInput' rows={5}></textarea>
            <button className='taskButton' onClick={handleClick}>Oluştur</button>
        </form>
    </div>}
        </div> 
    );
}

TaskCreate.propTypes = {
    onCreate: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    taskFormUpdate: PropTypes.bool.isRequired,
    onUpdate : PropTypes.func.isRequired,
};

export default TaskCreate;