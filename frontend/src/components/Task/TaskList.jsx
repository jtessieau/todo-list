import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTasks } from '../../services/tasks';

function TaskList(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then((data) => {
            setTasks(data);
        });
    }, []);

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default TaskList;
