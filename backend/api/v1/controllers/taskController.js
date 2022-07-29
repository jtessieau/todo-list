const colors = require('colors');
const { v4: uuidv4 } = require('uuid');

const tasks = [];

exports.show = (req, res) => {
    console.log(colors.green('GET request received'));

    res.status(200).json(tasks);
};

exports.store = (req, res) => {
    console.log(colors.cyan('POST request received'));

    const task = req.body;
    const uuid = uuidv4();

    const taskObject = {
        id: uuid,
        name: task.name,
    };

    tasks.push(taskObject);

    console.log(tasks);

    res.status(201).json(taskObject);
};

exports.destroy = (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDelete = req.body;

    const indexOfTaskToDelete = tasks.findIndex(
        (actualTask) => taskToDelete.id == actualTask.id
    );

    tasks.splice(indexOfTaskToDelete, 1);

    console.log(tasks);

    res.status(200).send('task deleted');
};
