const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        name: String,
        userId: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);
