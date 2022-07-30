require('dotenv').config();

const express = require('express');
const colors = require('colors');
const cors = require('cors');
const taskRoutes = require('./api/v1/Routes/taskRoutes');

const db_connect = require('./api/v1/database/db');
db_connect();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

app.listen(port, () => {
    console.log(
        colors.bold.italic.bgGreen.white(`Server listening on port ${port}`)
    );
});
