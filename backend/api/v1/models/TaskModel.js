const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Task', taskSchema);
