import PropTypes from 'prop-types';
import { useState } from 'react';
import './TaskCreateStyle.css'
function TaskCreate({onCreate}) {
    
    const [title, setTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    };
    
    const handleClick = (event) => {
        onCreate(title , taskDesc);
        setTitle("");
        setTaskDesc("");
        event.preventDefault();
    };
    
    return ( 
    <div className='taskContainer'>
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className='taskForm'>
            <label className='taskLabel'>Başlık</label>
            <input value={title} onChange={handleChange} className='taskInput' type="text" />
            <label className='taskLabel'>Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className='taskInput' rows={5}></textarea>
            <button className='taskButton' onClick={handleClick}>Oluştur</button>
        </form>
    </div> 
);
}

TaskCreate.propTypes = {
    onCreate: PropTypes.func.isRequired, // search bir fonksiyon ise bu şekilde tanımlanır
  };

export default TaskCreate;