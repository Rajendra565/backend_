let fs=require('fs')
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})  


// fs .writeFile('demo.txt','Hello World',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('File written successfully')
//     }
// })  
fs.appendFile('demo.txt','\nHello World Again',(err)=>{
    if(err){
        console.log(err)
    }               
    else{
        console.log('File appended successfully')
    }
})
fs.readFileSync('demo.txt','utf-8',(err,date)=>{
    if(err) cons
})


console.log('Program Ended')