import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import TaskForm from '../components/Task/TaskForm';
import TaskList from '../components/Task/TaskList';
import { getUserInformations } from '../services/authService';

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login');
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            getUserInformations(user.token);
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default Dashboard;
