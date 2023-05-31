const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts }= require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Add users to the collection and await the results
  await User.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.insertMany(thoughts);

  console.table(users);
  console.info('Seeding complete!');
  process.exit(0);
});