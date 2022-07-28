import { deleteTask } from '../../services/tasks';

function Task(props) {
    const { task, tasks, setTasks } = props;

    const handleClick = () => {
        deleteTask(task).then(
            setTasks(
                tasks.filter((actualTask) => actualTask.name !== task.name)
            )
        );
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
