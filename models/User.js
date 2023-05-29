// Define Mongoose
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`]
    },
    thoughts: {
      thought: _id

    },
    friends: {


    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual property `friendCount` that retrieves the length of the friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// initialize our User model
const User = model('user', userSchema);

module.exports = User;