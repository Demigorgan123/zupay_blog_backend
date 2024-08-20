const {connectDB} = require('./connectDB')

connectDB().then(()=>console.log("Database Connected"))