import PropTypes from 'prop-types';
import './TaskListStyle.css'
import TaskShow from '../TaskShow/TaskShow';
function TaskList({tasks , onDelete , onUpdate}) {
    return ( 
    <div className='TaskListStyle'>
        {
            tasks.map((task , index) => {
                return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
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