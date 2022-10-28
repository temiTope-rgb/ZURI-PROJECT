const path =require("path")
const fs = require("fs");

const http= require("http");

const server = http.createServer(function(req,res) {
    let emptyPagePath  = fs.readFileSync(__dirname + "/public/404.html")
   let filePath = fs.readFileSync(__dirname + "/public/index.html")
   if(req.url === '/portfolio'){
        fs.readFileSync(filePath, function(error, content){
            if(error){
                res.writeHead(404);
               res.write(emptyPagePath)
           }else{
            res.writeHead(200,{"Content-Type": 'text/html'});
               res.write(content)
           }
            res.end();
    })
    }else{
        res.writeHead(200,{"Content-Type": 'text/html'});
       res.write(filePath)
     res.end();
    }
})

const port=5000
server.listen(port,()=>{
     console.log(`server is running on port ${port}`)
})
