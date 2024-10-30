const mongoose = require("mongoose");
const slugify = require("slugify");
const User = require("./userModel");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A post must have a title"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A post title must have less or equal then 40 characters",
      ],
      minlength: [
        10,
        "A post title must have more or equal then 10 characters",
      ],
    },
    slug: String,
    category: {
      type: String,
      required: [true, "A post must have a category"],
      enum: {
        values: ["coding", "job", "travel", "learning"],
        message: "Category is either: coding, job, travel, learning",
      },
    },
    description: {
      type: String,
      required: [true, "A post must have a description"],
      maxlength: [
        40,
        "A post description must have less or equal then 40 characters",
      ],
      minlength: [
        10,
        "A post description must have more or equal then 10 characters",
      ],
    },
    content: {
      type: String,
      required: [true, "A post must have a content"],
      maxlength: [
        1000,
        "A post content must have less or equal then 1000 characters",
      ],
      minlength: [
        100,
        "A post content must have more or equal then 100 characters",
      ],
    },
    imageCover: {
      //? here we will store the name of the image in the file system (not the image itself)
      type: String,
      required: [true, "A post must have a cover image"],
    },
    images: [String], //? array of strings
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      //? Parent Referencing (Normalization)
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A post must belong to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//? Indexes
postSchema.index({ title: 1, user: 1 });

//? DOCUMENT MIDDLEWARE: runs before .save() and .create()
postSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

//? QUERY MIDDLEWARE
postSchema.pre(/^find/, function (next) {
  this.populate("user");
  next();
});

postSchema.post("save", async function (doc, next) {
  await mongoose.model("User").findByIdAndUpdate(doc.user, {
    $push: { posts: doc._id },
  });
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
