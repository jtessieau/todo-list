const express = require('express');
const colors = require('colors');
const cors = require('cors');
const taskRoutes = require('./api/v1/Routes/taskRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(
        colors.bold.italic.bgGreen.white(`Server listening on port ${port}`)
    );
});
