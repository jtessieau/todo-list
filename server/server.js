const express = require('express')
const cors = require('cors')
const taskRoutes = require('./Routes/taskRoutes')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/tasks', taskRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
