const express = require("express");
const postController = require("./../controllers/postController");
const authController = require("./../controllers/authController");

const router = express.Router();

//? Public Routes
router
  .route("/")
  .get(postController.getAllPosts)
  .post(
    authController.protect,
    postController.uploadPostImages,
    postController.resizePostImages,
    postController.createPost
  );

//? Some Protected Routes
//router.route("/user/:userId").get(postController.getPostsByUser);

router
  .route("/my-posts")
  .get(
    authController.protect,
    postController.setUserFilter,
    postController.getAllPosts
  );

router
  .route("/:id")
  .get(postController.getPost)
  .patch(
    authController.protect,
    authController.setPost,
    authController.isPostCreator,
    postController.uploadPostImages,
    postController.resizePostImages,
    postController.updatePost
  )
  .delete(
    authController.protect,
    authController.setPost,
    authController.isPostCreator,
    postController.deletePost
  );

module.exports = router;
