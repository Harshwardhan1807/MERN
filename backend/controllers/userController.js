const User = require("../models/UserModel");
const Review = require("../models/ReviewModel");
const { hashPassword, comparePassword } = require("../utils/hashPasswords");
const generateAuthToken = require("../utils/generateAuthToken");
const { use } = require("../routes/userRoutes");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!(name && lastName && email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("user exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        name,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      res
        .cookie(
          "access_token",
          generateAuthToken(
            user._id,
            user.name,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          }
        )
        .status(201)
        .json({
          success: "User created",
          userCreated: {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password, doNotLogout } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const user = await User.findOne({ email });
    if (user && comparePassword(password, user.password)) {

      let cookieParams = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      };

      if (doNotLogout) {
        cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }; // 1000=1ms
      }

      return res.cookie(
        "access_token",
        generateAuthToken(
          user._id,
          user.name,
          user.lastName,
          user.email,
          user.isAdmin
        ),
        cookieParams
      ).json({
        success: "user logged in",
        userLoggedIn: { _id: user._id, name: user.name, lastName: user.lastName, email: user.email, isAdmin: user.isAdmin, doNotLogout },
      });
    } else {
      return res.status(401).send("wrong credentials")
    }
  } catch (err) {
    next(err);
  }
};

const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail();
    user.name = req.body.name || user.name;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.address = req.body.address || user.address;
    user.country = req.body.country || user.country;
    user.city = req.body.city || user.city;
    user.zipCode = req.body.zipCode || user.zipCode;
    user.state = req.body.state || user.state;
    if (req.body.password !== user.password) {
      user.password = hashPassword(req.body.password);
    }
    await user.save();
    return res.json({ success: "user updated", userUpdated: user });
  } catch (err) {
    next(err);
  }
}

const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail();
    return res.send(user);
  } catch (err) {
    next(err);
  }
}

const writeReview = async (req, res, next) => {
  try {
    const { comment, rating } = req.body
    if (!comment || !rating) {
      return res.status(400).send("All inputs are required")
    }
    const ObjectId = require("mongodb").ObjectId;
    let reviewId = ObjectId();
    await Review.create({
      _id: reviewId,
      comment: comment,
      rating: Number(rating),
      user: { _id: req.user._id, name: req.user.name + " " + req.user.lastName },
    })
    res.send("Review created")
  } catch (err) {
    next(err);
  }
}

module.exports = { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview };

