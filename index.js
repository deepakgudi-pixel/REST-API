const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())//JSON middleware

// GET END POINT
app.get("/comic",(req, res)=>{
 res.send({
     comic:"Spider-Man",
     author: "Jake"
 })
})

// POST END POINT
app.post("/comic/:id", (req, res)=>{
 const {id} = req.params
 const {author} =  req.body

 if(!author){
res.send("we need a author's name!")
 }else{
     res.send({
         comic:`Book  with author's name ${author} and ID of ${id}`,
     })
 }

})

app.listen(PORT, () => console.log(`server running on ${PORT}`))