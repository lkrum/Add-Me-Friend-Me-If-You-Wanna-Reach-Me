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
      validate: {
        validator: function (e) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e);
        },
        message: email => `${email.value} is not a valid email!`
      },
    },
  // creating array of ObjectIds referencing the Thought model
  thoughts: [
  {
    type: Schema.Types.ObjectId,
    ref: 'thought'
  },
],
  // creating array of ObjectIds referencing the User model (self-reference)
  friends: [
  {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
],
  },
{
  toJSON: {
    virtuals: true,
    },
  id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// initialize our User model
const User = model('user', userSchema);

module.exports = User;