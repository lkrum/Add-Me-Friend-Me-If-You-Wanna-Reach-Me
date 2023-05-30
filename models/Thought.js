// Define Mongoose
const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {

    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's reaction array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;