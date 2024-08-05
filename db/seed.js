const sequelize = require('../config/connection');
const seedUsers = require('../seeds/user-seeds');
const seedPosts = require('../seeds/post-seeds');
const seedComments = require('../seeds/comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('Database synced!');

  await seedUsers();
  console.log('Users seeded!');

  await seedPosts();
  console.log('Posts seeded!');

  await seedComments();
  console.log('Comments seeded!');

  process.exit(0);
};

seedAll();
