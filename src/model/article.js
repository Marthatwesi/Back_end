import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: String,
  likes:{
    numberLikes:{type:Number, default:0},
    clients:[]
  },
  comments: [{
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  }, ],
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

const Article = mongoose.model("Article", articleSchema);
export default Article;