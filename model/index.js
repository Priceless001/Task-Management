const sequelize = require('../config/database');
const User = require('./user');
const Task = require('./task');
const Tag = require('./tag');
const Comment = require('./comment');

// User-Task Relationships
User.hasMany(Task, { foreignKey: 'createdBy', as: 'createdTasks' });
User.hasMany(Task, { foreignKey: 'assignedTo', as: 'assignedTasks' });
Task.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Task.belongsTo(User, { foreignKey: 'assignedTo', as: 'assignee' });

// Task-Tag Relationship
Task.hasMany(Tag, { foreignKey: 'taskId', as: 'tags' });
Tag.belongsTo(Task, { foreignKey: 'taskId' });

// Task-Comment Relationship
Task.hasMany(Comment, { foreignKey: 'taskId', as: 'comments' });
Comment.belongsTo(Task, { foreignKey: 'taskId' });

// User-Comment Relationship
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
Comment.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Task, Tag, Comment };

