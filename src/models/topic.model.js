const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

topicSchema.plugin(uniqueValidator);

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
