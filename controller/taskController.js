const { Task } = require('../model');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, assignedTo } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      assignedTo,
      createdBy: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message});
  }
};