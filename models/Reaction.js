// Define Mongoose
const { Schema, Types } = require('mongoose');

// Creating Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString()
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

// // virtual property `dateCreated` that formats the timestamp on a query
// reactionSchema.virtual('dateCreated').get(function () {
//   let dateCreated = new Date().toLocaleDateString();
//   return dateCreated;
// });

module.exports = reactionSchema;