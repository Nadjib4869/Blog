const multer = require("multer");
const sharp = require("sharp");
const Post = require("../models/postModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("../utils/appError");

//! With image processing (resizing)
const multerStorage = multer.memoryStorage(); // So the image will be stored as a buffer

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

//! Middlewares

//? single file : upload.single("image") | req.file
//? multiple files : upload.array("images", 5) | req.files
//? Mix : upload.fields([{name: "", maxCount: }...]) | req.files
exports.uploadPostImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

exports.resizePostImages = catchAsync(async (req, res, next) => {
  //console.log(req.files);
  if (!req.files || !req.files.imageCover || !req.files.images) return next();

  //* 1) Cover image
  req.body.imageCover = `post-${req.params.id}-${Date.now()}-cover.jpeg`;

  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/posts/${req.body.imageCover}`);

  //* 2) Images
  req.body.images = [];

  // await until processing all images is done
  await Promise.all(
    req.files.images.map(async (file, idx) => {
      const filename = `post-${req.params.id}-${Date.now()}-${idx + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/posts/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

//? Middleware to set the user who created the post
exports.setUserFilter = (req, res, next) => {
  req.query.user = req.user.id;
  next();
};

//? Middleware to get all posts by the user
exports.getPostsByUser = async (req, res, next) => {
  try {
    const posts = await Post.find({ user: req.params.userId });
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//! ROUTE HANDLERS
exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
