const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");

/* GET home page. */
router.get("/", function (req, res, next) {
	Post.find()
		.sort({ createdAt: -1 })
		.then((posts) => res.render("index", { title: "Board", posts }))
		.catch((error) => console.log(error));
});

module.exports = router;
