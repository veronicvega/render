import  express  from "express";

const app =express()

app.listen(3000)
app.get("/" , (req, res) =>{
    res.send('hello world')
})
console.log("server on port", 3000);