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
      get: (Date) => {
        if (Date) return Date.toISOString().split('T')[0];
      },
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters : true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
