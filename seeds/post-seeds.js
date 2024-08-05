const { Post } = require('../models');

const postData = [
  {
    title: 'Sample Post 1',
    content: 'This is the content of the first sample post.',
    user_id: 1,
  },
  {
    title: 'Sample Post 2',
    content: 'This is the content of the second sample post.',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
