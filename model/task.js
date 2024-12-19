const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  dueDate: { type: DataTypes.DATE, allowNull: false },
  status: {
    type: DataTypes.ENUM('To-Do', 'In Progress', 'Completed'),
    defaultValue: 'To-Do',
  },
  assignedTo: { type: DataTypes.INTEGER, allowNull: true }, // User ID
  createdBy: { type: DataTypes.INTEGER, allowNull: false }, // User ID
});

module.exports = Task;