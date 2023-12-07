const UserModel = require("../model/user");
const PostModel = require("../model/post");

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const createUser = await UserModel.create({
      name,
      email,
      phone,
      profile: req.file.filename,
    });

    return res.status(201).json({
      success: true,
      message: "Create User Profile Successfully",
      data: [],
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: error,
    });
  }
};
const getUserprofile = async (req, res) => {
  try {
    const { search } = req.body;

    let filter = {};
    if (!isNaN(search)) {
      filter = { phone: search };
    } else {
      filter = {
        $or: [{ name: { $regex: search } }, { email: { $regex: search } }],
      };
    }
    const getUserprofile = await UserModel.find({$text: {$search: search}}).limit(3);
    // const getUserprofile = await UserModel.aggregate([
    //   //   { $match: { name: search } },
    //   { $sort: { name: 1 } },
    //   { $group: { _id: { name: "$name", email: "$email" } } },
    //   { $limit: 2 }
    // ]);
// console.log("before response",new Date())
// return setTimeout(()=>{
//   console.log("after response",new Date())
//   return res.status(200).json({
//     success: true,
//     message: "get user Profile Successfully",
//     data: getUserprofile,
//   });
// },5000)
    return res.status(200).json({
      success: true,
      message: "get user Profile Successfully",
      data: getUserprofile,
    });
  } catch (error) {
    console.log("====>",error)
    return res.status(201).json({
      success: false,
      message: error,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { user_id, commit } = req.body;

    const createPost = await PostModel.create({ user_id, commit });

    return res.status(201).json({
      success: true,
      message: "Create User Post Successfully",
      data: [],
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: error,
    });
  }
};
const getUserPost = async (req, res) => {
  try {
    const getUserPost = await PostModel.find().populate("user_id");

    return res.status(200).json({
      success: true,
      message: "Get User Post Successfully",
      data: getUserPost,
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  createUser,
  getUserprofile,
  createPost,
  getUserPost,
};
