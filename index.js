const express = require('express')
const app = express();
const postRouter = require('./routes/post')
const {connectDB} = require('./connectDB')
const PORT = 5000

connectDB().then(()=>console.log("Database Connected"))

app.use('/post', postRouter)

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));
