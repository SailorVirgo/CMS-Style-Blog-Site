const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'johnDoe',
    password: 'password123',
  },
  {
    username: 'janeDoe',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
