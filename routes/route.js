const express = require("express");
const {
  getUserPost,
  getUserprofile,
  createPost,
  createUser,
} = require("../controllers/controller");
const { upload } = require("../helper/uploadImage")

const router = express();


router.post("/creteUserprofile", upload, createUser)
router.post("/getUserprofile", getUserprofile)
router.post("/creteUserPost", createPost)
router.get("/getUserPost", getUserPost)
module.exports = router;
