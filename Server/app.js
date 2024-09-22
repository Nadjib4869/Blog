const express = require("express");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//? Body parser, reading data from body into req.body + limit the size of the body to 10kb (won't accept a bigger body)
app.use(express.json({ limit: "10kb" }));

//? Cookie Parser, reading data from cookies
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the server side!", app: "blog" });
// });

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...");
// });

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)); //! So it will escape all middlewares in the stack and send this error in the arg to our global error handler middleware
});

app.use(globalErrorHandler);

module.exports = app;
