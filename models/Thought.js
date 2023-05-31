// Define Mongoose
const { Schema, model } = require('mongoose');
// Requiring the Reaction schema to include in the reaction array below
const reactionSchema = require('./Reaction');

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
      default: Date.now,
      get: (date) => date.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
      ref: 'user'
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's reaction array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// // virtual property `dateCreated` that formats the timestamp on a query
// thoughtSchema.virtual('dateCreated').get(function () {
//   let dateCreated = new Date().toLocaleDateString();
//   return dateCreated;
// });

// initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;