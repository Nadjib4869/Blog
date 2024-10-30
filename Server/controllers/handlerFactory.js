const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    //! if (Id is valid but no doc found for it) doc == null == false
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      //* options
      new: true, //? to return the updated doc
      runValidators: true, //? to run the validators again
    });

    //! if (Id is valid but no post found for it) post == null == false
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // create a doc then calling the save method on the new doc
    // const newPost = new Post({}); //* Here newPost is Post.prototype (instance of Post model)
    // newPost.save();

    // calling the create method directly on the Post model
    req.body.user = req.user.id; //? to set the user who is creating the post
    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        post: newDoc, //? to send the newly created obj as a respond (Classic thing we doing a post)
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    //! if (Id is valid but no doc found for it) doc == null == false
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //? To allow for nested GET reviews on post (hack)
    let filter = {};
    if (req.params.postId) filter = { post: req.params.postId };

    //? EXECUTE QUERY
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    //const docs = await features.query.explain(); //? to show the statistics of the query
    const docs = await features.query;

    //? SEND RESPONSE
    res.status(200).json({
      //? Jsend
      status: "success",
      results: docs.length,
      data: {
        data: docs,
      },
    });
  });
