const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let tasks = []

app.use(cors())
app.use(express.json())

app.post('/tasks', (req, res) => {
    console.log('post request received')
    const task = req.body
    console.log(task)

    tasks.push(task)

    res.send('task added to db')
})

app.get('/tasks', (req, res) => {
    console.log('get request received')
    res.json(tasks)
})

app.delete('/tasks', (req, res) => {
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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
