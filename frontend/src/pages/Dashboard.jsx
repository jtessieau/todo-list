import { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import TaskForm from '../components/Task/TaskForm';
import TaskList from '../components/Task/TaskList';

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <Navbar />
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default Dashboard;
