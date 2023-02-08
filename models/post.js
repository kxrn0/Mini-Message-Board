const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{ timestampts: true }
);
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
