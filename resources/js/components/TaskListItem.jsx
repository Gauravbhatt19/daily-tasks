import React, { useContext } from 'react';
import CheckCircle from './CheckCircle'
import Circle from './Circle'
import EditTaskButton from './EditTaskButton'
import TasksContext from '../contexts/TasksContext'

const TaskListItem = (props) => {
    const task = props.value;
    const tasksContext = useContext(TasksContext);
    return (
        <li className="text-gray list-group-item">
            <span className={ (tasksContext.isTasksToday ? "w-220 ": "w-full " )+ "d-inline-block"}>
                <span className="d-block"><span className={ (tasksContext.isTasksToday ? "w-180 ": "w-220 " )+ "fz-24 d-inline-block"}>{task.name}</span><EditTaskButton value={task}/></span>
                <span className="d-block fz-16 text-justify white-space-pre-line">{task.description}</span>
            </span>
            { tasksContext.isTasksToday &&
                <span className="d-inline-block align-top">
                    {task.completed_at ? <CheckCircle href={route('task.pending', task.id)} /> : <Circle href={route('task.completed', task.id)} />}
                </span>
            }
        </li>
    );
}

export default TaskListItem;

