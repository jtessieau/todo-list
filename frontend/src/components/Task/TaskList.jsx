import { useEffect } from 'react';
import { fetchTasks } from '../../services/tasks';
import Task from './Task';

function TaskList(props) {
    const { tasks, setTasks } = props;

    useEffect(() => {
        fetchTasks().then((data) => {
            setTasks(data);
        });
    }, [setTasks]);

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <Task
                            key={index}
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
