import TaskShow from '../TaskShow/TaskShow';
import TasksContext from '../Context/Task';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import './TaskListStyle.css'

function TaskList() {
    const {task} = useContext(TasksContext);
    return ( 
    <div className='TaskListStyle'>
        {
            task.map((task , index) => {
                return <TaskShow key={index} task={task}/>
            })
        }
    </div> 
);
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired, 
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};


export default TaskList;