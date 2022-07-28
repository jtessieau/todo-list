import { saveTask } from '../../services/tasks';

function TaskForm(props) {
    const { tasks, setTasks } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name');

        const task = {
            name: taskName.value,
        };
        saveTask(task)
            .then(() => {
                setTasks([...tasks, task]);
            })
            .then(() => {
                taskName.value = '';
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
