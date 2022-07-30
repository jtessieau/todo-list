const colors = require('colors');
const { v4: uuidv4 } = require('uuid');

const tasks = [];

exports.show = (req, res) => {
    console.log(colors.cyan('GET request received'));

    res.status(200).json(tasks);
};

exports.store = (req, res) => {
    console.log(colors.green('POST request received'));

    const taskName = req.body.task.name.trim().toLowerCase();

    if (!taskName) {
        res.status(500).send('Error, name can not be empty!');
    }

    const newTask = {
        id: uuidv4(),
        name: taskName,
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

exports.update = (req, res) => {
    console.log(colors.yellow('PUT task received'));

    const updatedTask = req.body.task;
    updatedTask.name = updatedTask.name.trim().toLowerCase();

    const taskToUpdateId = req.params.id;

    if (!updatedTask.name) {
        throw new Error('Error, name can not be empty!');
    }

    if (taskToUpdateId !== updatedTask.id) {
        throw new Error('A problem occurs.');
    }

    const indexOfTaskToUpdate = tasks.findIndex(
        (actualTask) => taskToUpdateId === actualTask.id
    );

    tasks[indexOfTaskToUpdate].name = updatedTask.name;

    res.status(200).json(tasks[indexOfTaskToUpdate]);
};

exports.destroy = (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDelete = req.params.id;
    const indexOfTaskToDelete = tasks.findIndex(
        (actualTask) => taskToDelete === actualTask.id
    );

    tasks.splice(indexOfTaskToDelete, 1);

    res.status(204).send();
};
