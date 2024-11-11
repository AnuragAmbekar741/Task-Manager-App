const Task = require('../models/taskSchema');

exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch {
        res.status(500).json({
            error: 'Failed to create task'
        })
    }
}