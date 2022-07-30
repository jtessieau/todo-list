const colors = require('colors');
const Task = require('../models/TaskModel');

exports.show = async (req, res) => {
    console.log(colors.cyan('GET request received'));
    const allTasks = await Task.find();

    res.status(200).json(allTasks);
};

exports.store = async (req, res) => {
    console.log(colors.green('POST request received'));

    const taskName = req.body.task.name.trim().toLowerCase();

    if (!taskName) {
        res.status(500).send('Error, name can not be empty!');
    }

    const newTask = new Task({ name: taskName });

    await newTask.save();

    res.status(201).json(newTask);
};

exports.update = async (req, res) => {
    console.log(colors.yellow('PUT task received'));

    const taskToUpdate = req.body.task;
    taskToUpdate.name = taskToUpdate.name.trim().toLowerCase();

    if (!taskToUpdate.name) {
        throw new Error('Error, name can not be empty!');
    }

    const taskToUpdateId = req.params.id;

    if (taskToUpdateId !== taskToUpdate.id) {
        throw new Error('A problem occurs.');
    }

    const updatedTask = await Task.findByIdAndUpdate(
        taskToUpdateId,
        {
            name: taskToUpdate.name,
        },
        { new: true }
    );

    res.status(200).json(updatedTask);
};

exports.destroy = async (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDeleteId = req.params.id;

    await Task.findByIdAndDelete(taskToDeleteId);

    res.status(204).send();
};
