const colors = require('colors');
const Task = require('../models/TaskModel');

exports.show = async (req, res) => {
    console.log(colors.cyan('GET request received'));
    if (!req.user) {
        return res.status(401).json({
            message: 'Not authorized',
        });
    }
    const allTasks = await Task.find({ userId: req.user._id });

    res.status(200).json(allTasks);
};

exports.store = async (req, res) => {
    console.log(colors.green('POST request received'));

    const taskName = req.body.task.name.trim().toLowerCase();

    if (!taskName) {
        res.status(500).send('Error, name can not be empty!');
    }

    const newTask = new Task({
        name: taskName,
        userId: req.user._id,
    });

    await newTask.save();

    res.status(201).json(newTask);
};

exports.update = async (req, res) => {
    console.log(colors.yellow('PUT task received'));

    const taskToUpdate = req.body.editedTask;
    taskToUpdate.name = taskToUpdate.name.trim().toLowerCase();

    if (!taskToUpdate.name) {
        throw new Error('Error, name can not be empty!');
    }

    const taskToUpdateId = req.params.id;

    if (taskToUpdateId !== taskToUpdate.id) {
        throw new Error('A problem occurs.');
    }

    const updatedTask = await Task.findOneAndUpdate(
        { _id: taskToUpdateId, userId: req.user._id },
        { name: taskToUpdate.name },
        { new: true }
    );

    res.status(200).json(updatedTask);
};

exports.destroy = async (req, res) => {
    console.log(colors.red('DELETE task received'));

    const taskToDeleteId = req.params.id;

    await Task.findOneAndDelete({ _id: taskToDeleteId, userId: req.user._id });

    res.status(204).send();
};
