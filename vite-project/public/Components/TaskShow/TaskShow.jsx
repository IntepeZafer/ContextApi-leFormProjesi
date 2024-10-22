import PropTypes from 'prop-types';
function TaskShow({task}) {
    console.log(task);
    return ( 
        <div></div>
     );
}

TaskShow.propTypes = {
    task: PropTypes.object.isRequired, 
};

export default TaskShow;