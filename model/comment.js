const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.STRING, allowNull: false },
  taskId: { type: DataTypes.INTEGER, allowNull: false }, // Foreign key to Task
  userId: { type: DataTypes.INTEGER, allowNull: false }, // Foreign key to User
});

module.exports = Comment;