const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a text."],
    },
    // important: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  {
    timestamps: true,
    // timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("Goal", goalSchema);
