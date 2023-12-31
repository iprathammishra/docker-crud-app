const express = require('express');

const postController = require("../controllers/postController");

const router = express.Router();

router.route("/").get(postController.getAllPosts).post(postController.createPost);

router.route("/:id").get(postController.getOnePosts).patch(postController.updatePost).delete(postController.deletePost);

module.exports = router;