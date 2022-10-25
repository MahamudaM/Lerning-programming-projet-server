const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('running api'); 
})
app.listen(port,()=>{
    console.log('learn programming server runing on port',port)
})