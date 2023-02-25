const { Schema, model } = require("mongoose");
const reactionSchema = require('./reaction')
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
