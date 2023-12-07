const express = require("express")

const connectDB = require("./config/dbConnection")
const demoRouter = require("./routes/route")

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",demoRouter)


app.listen(8080,async()=>{
    await connectDB()
    console.log("server is running on 8080")
})