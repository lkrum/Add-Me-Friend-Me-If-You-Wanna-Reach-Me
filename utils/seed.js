const connection = require('../config/connection');
const { User, Thought } = require('../models');
const users = require('./data');
const thoughts = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.info('Seeding complete!');
  process.exit(0);
});