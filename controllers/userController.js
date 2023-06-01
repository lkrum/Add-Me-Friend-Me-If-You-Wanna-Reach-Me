// requiring User and Thought model
const { User, Thought } = require('../models');

// exporting CRUD methods
module.exports = {
  // GET all users 
  async getUsers(req, res) {
    try {
      const users = await User.find().select('-__v');
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // GET a single user by its _id with populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE a user by its id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE a user by its id AND remove associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id' });
      }

      const thoughts = await Thought.deleteMany({ _id: { $in: user.thoughts } });
      if (!thoughts) {
        return res.status(404).json({
          message: 'No thoughts found from this user',
        });
      }
      res.json({ message: 'User and thoughts successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to add a new friend to a user's friend list
  async addFriend(req, res) {
    console.log('You are adding a friend!');
    console.log(req.body);
    try {
      const mainUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      // adding user to friend's friend list for reciprocation
      const secondUser = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: { friends: req.params.userId } },
        { runValidators: true, new: true }
      );

      if (!mainUser || !secondUser) {
        return res.status(404).json({ message: 'No user found with that ID :(' });
      }
      res.json(mainUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE to remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const mainUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )
// deleting from main user's friend list as well
      const secondUser = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $pull: { friends: req.params.userId } },
        { runValidators: true, new: true }
      )

      if (!mainUser || !secondUser) {
        return res.status(404).json({ message: 'Oops, no user found with that ID!' });
      }
      console.log(mainUser, secondUser)
      res.json({ message: 'Friend successfully removed.' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};










