

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Exemple de route pour créer une tâche
router.post('/add', async (req, res) => {
  const { user, title, description, deadline } = req.body;
  const task = new Task({ user, title, description, deadline });
  await task.save();
  res.status(201).json({ message: 'Task created' });
});

module.exports = router;
