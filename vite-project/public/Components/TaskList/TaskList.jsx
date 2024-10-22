import PropTypes from 'prop-types';
import TaskShow from '../TaskShow/TaskShow';
function TaskList({tasks}) {
    return ( 
    <div>
        {
            tasks.map((task) => {
                return <TaskShow></TaskShow>
            })
        }
    </div> 
);
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired, 
};


export default TaskList;