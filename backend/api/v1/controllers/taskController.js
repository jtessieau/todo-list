const colors = require('colors');

const tasks = [];

exports.show = (req, res) => {
    console.log(colors.green('GET request received'));

    res.status(200).json(tasks);
};

exports.store = (req, res) => {
    console.log(colors.cyan('POST request received'));

    const task = req.body;
    tasks.push(task);

    console.log(tasks);

    res.status(201).send('task added to db');
};

exports.destroy = (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDelete = req.body;

    const indexOfTaskToDelete = tasks.findIndex(
        (actualTask) => taskToDelete.name == actualTask.name
    );

    tasks.splice(indexOfTaskToDelete, 1);

    console.log(tasks);

    res.send('task deleted');
};
