/**
 * Call the get route from api
 * @returns
 */
const fetchTasks = async () => {
    const token = getToken();

    const response = await fetch('/api/v1/tasks', {
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + token,
        },
    });

    if (response.status !== 200) {
        throw new Error(
            'A problem occured while trying to fetch your tasks. Please try again later'
        );
    }

    const allTasks = await response.json();

    return allTasks;
};
/**
 * Call the store route from the api
 * @param {*} newTask
 * @returns
 */
const saveTask = async (newTask) => {
    const token = getToken();

    const response = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: {
            authorization: 'Bearer ' + token,
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
/**
 * Call the edit route from the api
 * @param {*} editedTask
 * @returns
 */
const editTask = async (editedTask) => {
    const token = getToken();

    const response = await fetch('/api/v1/tasks/' + editedTask.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
            editedTask,
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
/**
 * Call the delete route from api
 * @param {*} taskToDelete
 * @returns
 */
const deleteTask = async (taskToDelete) => {
    const token = getToken();

    const response = await fetch('/api/v1/tasks/' + taskToDelete._id, {
        method: 'DELETE',
        headers: {
            authorization: 'Bearer ' + token,
        },
    });

    if (response.status !== 204) {
        throw new Error(
            'A problem occured while trying to delete your task. Please try again later.'
        );
    }

    return true;
};

const getToken = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("Can't authenticate the user.");
    }

    return token;
};

export { fetchTasks, saveTask, editTask, deleteTask };
