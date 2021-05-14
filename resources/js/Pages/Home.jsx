import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react'
import AppLayout from '../Layouts/AppLayout'
import AddTaskButton from '../components/AddTaskButton'
import TaskList from '../components/TaskList'
import PreviousDayTaskButton from '../components/PreviousDayTaskButton'
import NextDayTaskButton from '../components/NextDayTaskButton'
import moment from 'moment'
import { TasksContextProvider } from '../contexts/TasksContext'

const Home = (props) => {
	
	const tasksDate = dateFormat(props.date);
	const todaysDate = dateFormat();
	const tommorowsDate = dateFormat(moment().add(1, 'days'));
	const yesterdaysDate = dateFormat(moment().subtract(1, 'days'));
	
	const isTasksToday = moment(todaysDate).isSame(tasksDate, 'day');
	const isTasksTommorow = moment(tommorowsDate).isSame(tasksDate, 'day');
	const isTasksYesterday = moment(yesterdaysDate).isSame(tasksDate, 'day');
	const isTasksPast = moment(todaysDate).isAfter(tasksDate, 'day');

	function dateFormat(date=null) {
        const dateObj = date == null ? new Date() : new Date(date);
        return moment(dateObj).format('DD MMM YYYY');
    }

    return (
		<TasksContextProvider value={{
			tasksDate:tasksDate,
			todaysDate:todaysDate,
			tommorowsDate:tommorowsDate,
			yesterdaysDate:yesterdaysDate,
			isTasksToday:isTasksToday,
			isTasksTommorow:isTasksTommorow,
			isTasksYesterday:isTasksYesterday,
			isTasksPast:isTasksPast,
			user: props.user
		}}>
    		<AppLayout>
	    		<div>
	    			<div className="section-heading text-center">
	    				<span><PreviousDayTaskButton value={tasksDate}/></span>
	    				<span className="d-inline-block w-220">{( isTasksToday ? "Today's" : ( isTasksTommorow ? "Tommorow's" : ( isTasksYesterday ? "Yesterday's" : tasksDate ) ) )+" Tasks"}</span>
	    				<span><NextDayTaskButton value={tasksDate}/></span>
	    			</div>
					<div className="d-flex justify-content-center flex-wrap">
						<div className="todo-tasks mx-auto mx-sm-4">
							<div className={(isTasksToday || !isTasksPast ? "" : "mt-3 pb-2 " )+"section-heading text-left"}>To Dos {(isTasksToday || !isTasksPast) && <AddTaskButton />}</div>
							<div className="bg-white shadow-sm w-300">
								<TaskList value={props.tasks.pending}/>
							</div>
						</div>
						<div className="completed-tasks mx-auto mx-sm-4">
							<div className="section-heading text-left mt-3 pb-2">Completed</div>
							<div className="bg-white shadow-sm w-300">
								<TaskList value={props.tasks.completed}/>
							</div>
						</div>
					</div>
				</div>
    		</AppLayout>
		</TasksContextProvider>
    );
};

export default Home;