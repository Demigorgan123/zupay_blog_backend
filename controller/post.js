const post = require('../models/post')

const getAllPost = async(req, resp)=>{
    const posts = await post.find({})
    return resp.json(posts);
}

const getPostById = async(req, resp)=>{
    const post = post.findById(req.params.id);
    if(!post) return resp.status(404).json({error: "Post not found"})
    return resp.json(post)
}

const createNewPost = async(req, resp)=>{
    const reqBody = req.body
    if(!reqBody || !reqBody.author || !reqBody.title || !reqBody.body){
        return resp.status(400).json({error: "All fields are required"})
    }
    const result = await post.create({
        author: reqBody.author,
        title: reqBody.title,
        body: reqBody.body
    })
    return resp.status(201).json({msg: "success"})
}

const updatePostById = async(req, resp)=>{
    const reqBody = req.body
    if(!reqBody || !reqBody.author || !reqBody.title || !reqBody.body){
        return resp.status(400).json({error: "All fields are required"})
    }
    await post.findByIdAndUpdate(req.params.id, reqBody)
    return resp.json({status: "success"})
}

const deletePostById = async(req, resp)=>{
    await post.findByIdAndDelete(req.params.id)
    return resp.json({status: "success"})
}

module.exports = {
    getAllPost,
    getPostById,
    createNewPost,
    updatePostById,
    deletePostById
}