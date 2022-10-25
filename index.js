const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const courses = require("./courses.json")
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('running api'); 
});
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.listen(port,()=>{
    console.log('learn programming server runing on port',port)
})