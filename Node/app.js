const express=require('express')
const app=express()

app.get('/',(req,res)=>{
res.write('<a href="/rice">Click here to go to rice page</a>')
res.write('<h1>Welcome to the home page</h1>'   )
})

app.get('/rice',(req,res)=>{
    res.write('<a href="/">Click here to go to home page</a>')
    res.write('<h1>Rice is a staple food in many countries</h1>')
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})