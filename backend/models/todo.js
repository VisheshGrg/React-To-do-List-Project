const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {type: String, required: true, minlength:3, maxlength: 200},
    author: String,
    uid: String,
    isComplete: Boolean,
    date: {type: Date, default: new Date()},
    // deadline: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

exports.Todo = Todo;