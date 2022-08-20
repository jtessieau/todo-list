import { saveTask } from '../../services/taskService';

function TaskForm(props) {
    const { tasks, setTasks } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formInput = document.getElementById('task-name');
        const taskName = formInput.value.trim().toLowerCase();

        if (!taskName) return;

        const task = {
            name: taskName,
        };

        saveTask(task)
            .then((newTask) => {
                setTasks([...tasks, newTask]);
                formInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="container">
            <form id="task-form" className="mt-2 mb-4 mx-6">
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            type="text"
                            id="task-name"
                            placeholder="Task to add in the list"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add task
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
