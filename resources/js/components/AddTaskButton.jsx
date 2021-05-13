import React, { useContext } from 'react';
import logo from '../../svg/plus-square.svg';
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'
import InputText from './InputText'
import InputTextArea from './InputTextArea'
import TasksContext from '../contexts/TasksContext'

const AddTaskButton = () => {
	
    const tasksContext = useContext(TasksContext);
	
	const { data, setData, post, processing, errors, reset } = useForm({
		taskname: "",
        taskdescription: "",
        taskdate: tasksContext.tasksDate,
	});
    
    function submit(e) {
        e.preventDefault();
        post(route('task.store'), {
        	onSuccess: () => {
        		reset('taskname');
        		reset('taskdescription');
        		$('#add-task-form-modal').modal('hide');
        	}
        });
    }

    return (
    	<div className="d-inline-block">
	    	<form onSubmit={submit}>
		    	<button type="button" className="nav-link bg-transparent border-0 font-weight-bolder text-red-light fz-24" data-toggle="modal" data-target="#add-task-form-modal"><span className="d-inline-block w-25 h-25"><img src={logo} alt="AddTaskButton"/></span>
		    	</button>
		    	<div className="modal fade" id="add-task-form-modal">
			      <div className="modal-dialog modal-dialog-centered w-full max-w-340 m-auto">
			        <div className="modal-content rounded-0">
			          <div className="modal-header border-0 px-4 pt-5">
			            <h5 className="modal-title font-roboto-bold fz-16">Add Task</h5>
			            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			              <span aria-hidden="true">&times;</span>
			            </button>
			          </div>
			          <div className="mx-auto">
			          	<div>
			          		<InputText className="input-text" id="taskname" value={data.taskname} onChange={e => setData('taskname', e.target.value)} className={(errors.taskname ? "is-invalid " : '') + "form-control input-text"} placeholder="Task Name" required/>
			          		<div className="invalid-feedback text-left ml-2">
                                { errors.taskname ? errors.taskname : "Task name is required!" } 
                            </div>
                        </div>
			          	<div>
			          		<InputTextArea rows="3" className="input-textarea" id="taskdescription" value={data.taskdescription} onChange={e => setData('taskdescription', e.target.value)} className={(errors.taskdescription ? "is-invalid " : '') + "form-control input-textarea"} placeholder="Task Description"/>
			          		<div className="invalid-feedback text-left ml-2">
                                { errors.taskdescription ? errors.taskdescription : "Task description is invalid!" } 
                            </div>
                        </div>
			          </div>
			          <div className="modal-footer border-0">
			            <PrimaryButton type="submit" value="Add" addClass="w-full w-md-290 mx-auto mb-3"/>
			          </div>
			        </div>
			      </div>
			    </div>
	    	</form>
    	</div>
    );
}

export default AddTaskButton;