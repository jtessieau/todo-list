import { useState } from 'react';
import TaskForm from '../components/Task/TaskForm';
import TaskList from '../components/Task/TaskList';

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default Dashboard;
