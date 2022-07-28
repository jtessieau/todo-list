import { saveTask } from '../../services/tasks';

function TaskForm(props) {
    const { tasks, setTasks } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name');

        if (!taskName.value.trim()) return;

        let taskNameString = taskName.value.trim();
        taskNameString =
            taskNameString[0].toUpperCase() + taskNameString.slice(1);

        console.log(taskNameString);

        const task = {
            name: taskNameString,
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
