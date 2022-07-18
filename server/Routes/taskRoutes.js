const express = require('express')
const router = express.Router()

let tasks = []

router.post('/', (req, res) => {
    console.log('post request received')
    const task = req.body
    console.log(task)

    tasks.push(task)

    res.send('task added to db')
})

router.get('/', (req, res) => {
    console.log('get request received')
    res.json(tasks)
})

router.delete('/', (req, res) => {
    console.log('delete task received')
    const taskToDelete = req.body
    console.log(taskToDelete)

    // delete the task from array
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task == taskToDelete.task) {
            tasks.splice(i, 1)
            res.send('task deleted')
        }
    }
})

module.exports = router
