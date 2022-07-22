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

    res.send('task added to db');
};

exports.destroy = (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDelete = req.body;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task == taskToDelete.task) {
            tasks.splice(i, 1);
            res.send('task deleted');
        }
    }
};
