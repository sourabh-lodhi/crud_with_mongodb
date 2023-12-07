const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
   
     user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
     },
     commit:{
        type : String,
     }

})

module.exports = mongoose.model("Post",postSchema)