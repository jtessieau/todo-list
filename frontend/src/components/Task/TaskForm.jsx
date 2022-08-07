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
        <>
            <form id="task-form">
                <label htmlFor="task-name">Task name</label>
                <input type="text" id="task-name" />
                <button type="submit" onClick={handleSubmit}>
                    Add task
                </button>
            </form>
        </>
    );
}

export default TaskForm;
