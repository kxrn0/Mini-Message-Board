const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res, next) => {
	res.render("new", { title: "New Post" });
});

router.post("/", (req, res, next) => {
	const post = new Post({
		name: req.body.name,
		message: req.body.message,
		date: new Date(),
	});

	post.save()
		.then(() => res.redirect("/"))
		.catch((error) => console.log(error));
		
});

module.exports = router;
