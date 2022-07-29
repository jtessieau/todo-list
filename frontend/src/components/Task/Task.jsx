import { deleteTask } from '../../services/taskService';

function Task(props) {
    const { task, tasks, setTasks } = props;

    // Format task name to uppercase first letter
    task.name = task.name[0].toUpperCase() + task.name.slice(1);

    const handleClick = () => {
        deleteTask(task)
            .then(() => {
                setTasks(tasks.filter((t) => t.name !== task.name));
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <li>
            <span style={{ width: '100px', display: 'inline-block' }}>
                {task.name}
            </span>
            <button onClick={handleClick}>x</button>
        </li>
    );
}

export default Task;
