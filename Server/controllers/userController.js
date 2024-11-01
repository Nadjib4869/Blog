const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

//! Without image processing (resizing)
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/users");
//   },
//   filename: (req, file, cb) => {
//     // user-user.id-timeStamp.extension In Order To make the img name UNIQUE
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// });

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

exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

const filterObj = (body, ...allowedFields) => {
  const newObj = {};
  Object.keys(body).forEach((e) => {
    if (allowedFields.includes(e)) newObj[e] = body[e];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  // console.log(req.body);

  //* 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }
  //* 2) Filter out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email");

  //? Add the photo property to the object that is going to be updated (filteredBody)
  //? REMEMBER : In the db we are storing oly the filename, the actual photo is in our file system
  if (req.file) filteredBody.photo = req.file.filename;

  //* 3) Update user doc
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: "false" });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createUser = catchAsync(async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  });
});

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User, { path: "posts" });
//! Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
