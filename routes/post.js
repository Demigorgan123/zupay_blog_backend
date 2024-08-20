const express = require('express')
const postRouter = express.Router();
const {getAllPost, getPostById, createNewPost, updatePostById, deletePostById} = require('../controller/post')

router.route('/').get(getAllPost).post(createNewPost)

router.route('/:id').get(getPostById).patch(updatePostById).delete(deletePostById)

module.exports = postRouter;