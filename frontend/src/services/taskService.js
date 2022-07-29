const fetchTasks = async () => {
    const response = await fetch('/api/v1/tasks');
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(
            'A problem occured while trying to fetch your tasks. Please try again later'
        );
    }
};

const saveTask = async (task) => {
    const response = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    if (response.status === 201) {
        return response.json();
    } else {
        throw new Error(
            'A problem occured while trying to save your task. Please try again later.'
        );
    }
};

const deleteTask = async (task) => {
    const response = await fetch('/api/v1/tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error(
            'A problem occured while trying to delete your task. Please try again later.'
        );
    }
};

export { fetchTasks, saveTask, deleteTask };
