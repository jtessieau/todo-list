const fetchTasks = async () => {
    console.log('Getting all tasks ...');

    const response = await fetch('/api/v1/tasks', {
        method: 'GET',
    });

    if (response.status !== 200) {
        throw new Error(
            'A problem occured while trying to fetch your tasks. Please try again later'
        );
    }

    const allTasks = await response.json();

    return allTasks;
};

const saveTask = async (newTask) => {
    console.log('Posting task to server ...');
    console.log(newTask);

    const response = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            task: newTask,
        }),
    });

    if (response.status !== 201) {
        throw new Error(await response.text());
    }

    const createdTask = await response.json();

    return createdTask;
};

const editTask = async (editedTask) => {
    const response = await fetch('/api/v1/tasks/' + editedTask.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            task: {
                id: editedTask.id,
                name: editedTask.name,
            },
        }),
    });

    if (response.status !== 200) {
        throw new Error(
            'Oupss, something wrong happened... Please try again later.'
        );
    }

    const updatedTask = await response.json();

    return updatedTask;
};

const deleteTask = async (taskToDelete) => {
    const response = await fetch('/api/v1/tasks/' + taskToDelete._id, {
        method: 'DELETE',
    });

    if (response.status !== 204) {
        throw new Error(
            'A problem occured while trying to delete your task. Please try again later.'
        );
    }

    return true;
};

export { fetchTasks, saveTask, editTask, deleteTask };
