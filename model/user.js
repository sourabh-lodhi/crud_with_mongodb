const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  email: {
    type: String,
    index: true
  },
  phone: {
    type: Number,
  },
  profile: {
    type: String,
    index:true
  },
},
{
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      // delete ret.password;
      delete ret.__v;
    },
  },
});

// userSchema.index({"$**":"text"}, {unique: true})
// const data = userSchema.index({"name": 'text', 'profile': 'text'})
// userSchema.
userSchema.index({name: "text", email: "text"});
// console.log("🚀 ~ file: user.js:30 ~ data", userSchema.indexes())
module.exports = mongoose.model("User", userSchema);
