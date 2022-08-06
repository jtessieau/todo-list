import { useEffect } from 'react';
import { fetchTasks } from '../../services/taskService';
import Task from './Task';

function TaskList(props) {
    const { tasks, setTasks } = props;

    useEffect(() => {
        fetchTasks()
            .then((data) => {
                setTasks(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setTasks]);

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => {
                    return (
                        <Task
                            key={task._id}
                            task={task}
                            setTasks={setTasks}
                            tasks={tasks}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TaskList;
