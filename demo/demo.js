let fs=require('fs')
let os=require('os')
let text=os.userInfo()


fs.unlink('demo.text',(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log('file deleted')
    }
})
fs.appendFile('demo.txt',text.homedir,(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log('file updated')
    }
})

fs.readFile('demo.txt',(err,data)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log(data.toString())
        
    }
})