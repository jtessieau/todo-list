import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import TaskForm from '../components/Task/TaskForm';
import TaskList from '../components/Task/TaskList';
import { getUserInformations } from '../services/authService';

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            getUserInformations(token)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        localStorage.removeItem('token');
                        navigate('/login');
                    }
                })
                .then((data) => console.log(data));
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
