const post = require('../models/post')

const getAllPost = async(req, resp)=>{
    const posts = await post.find({})
    return resp.json(posts);
}

const getPostById = async(req, resp)=>{
    const postRes = await post.findById(req.params.id);
    if(!postRes) return resp.status(404).json({error: "Post not found"})
    return resp.json(postRes)
}

const createNewPost = async(req, resp)=>{
    const {author, title, body} = req.body
    if(!author || !title || !body){
        return resp.status(400).json({error: "All fields are required"})
    }
    const result = await post.create({
        author: author,
        title: title,
        body: body
    })
    return resp.status(201).json({msg: "success"})
}

const updatePostById = async(req, resp)=>{
    const {author, title, body} = req.body
    if(!author || !title || !body){
        return resp.status(400).json({error: "All fields are required"})
    }
    await post.findByIdAndUpdate(req.params.id,{
        author: author,
        title: title,
        body: body
    })
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