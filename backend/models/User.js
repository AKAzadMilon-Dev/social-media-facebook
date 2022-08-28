const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, "First name is required"],
    },
    picture: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
    },
    birthYear: {
      type: Number,
      required: [true, "Year is required"],
      trim: true,
    },
    birthMonth: {
      type: Number,
      required: [true, "Month is required"],
      trim: true,
    },
    birthDay: {
      type: Number,
      required: [true, "Day is required"],
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workPlace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      relationship: {
        type: String,
        engageNun: ["Single", "In a relationship", "Married", "Divorced"],
      },
      instagram: {
        type: String,
      },
      relationship: {
        type: String,
      },
    },
    savesPosts: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
