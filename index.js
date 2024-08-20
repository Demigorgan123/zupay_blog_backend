const express = require('express')
const cors = require('cors')
const app = express();
const postRouter = require('./routes/post')
const {connectDB} = require('./connectDB')
const PORT = process.env.PORT

connectDB().then(()=>console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/post', postRouter)

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));