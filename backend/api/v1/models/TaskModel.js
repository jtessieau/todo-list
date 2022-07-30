const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);
