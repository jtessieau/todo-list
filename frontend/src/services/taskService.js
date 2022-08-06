import handleError from './htmlStatusErrorService';

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
        await handleError(response);
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
        handleError(response);
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
    console.log(response);

    if (response.status !== 200) {
        handleError(response.status);
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
        handleError(response);
    }

    return true;
};

const getToken = () => {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.token;
    }

    throw new Error('User not logged in.');
};

export { fetchTasks, saveTask, editTask, deleteTask };
