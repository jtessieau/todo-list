const fetchTasks = async () => {
    const response = await fetch('/api/v1/tasks');
    const json = await response.json();
    return json;
};

const saveTask = async (task) => {
    await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
};

const deleteTask = async (task) => {
    await fetch('/api/v1/tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
};

export { fetchTasks, saveTask, deleteTask };
