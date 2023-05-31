// Define Mongoose
const { Schema, type } = require('mongoose');

// Creating Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }
)

// virtual property `dateCreated` that formats the timestamp on a query
reactionSchema.virtual('dateCreated').get(function () {
  let dateCreated = new Date().toLocaleDateString();
  return dateCreated;
});

module.exports = reactionSchema;