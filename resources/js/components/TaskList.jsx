import React from 'react';
import TaskListItem from './TaskListItem'

const TaskList = (props) => {
	const tasks = props.value;
	const taskListItems = tasks.map((task) => 
		<TaskListItem key={task.id} value={task} />
	);
    return (
    	<ul className="list-group rounded-0">
    		{tasks.length != 0 ? taskListItems : <li className="text-gray-light list-group-item text-center">No Tasks</li>}
    	</ul>
    );
}

export default TaskList;

