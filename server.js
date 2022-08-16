const http = require("http");

const {authors, books} = require("./fixtures")

const HOSTNAME = 'localhost'
const PORT = 8080;

function handleRquest(req, res){
    res.setHeader("Content-Type", "application/json")
    switch(req.url){
        case "/books":
            res.end(JSON.stringify(books))
            break;
        
    
        case "/authors" :
            res.end(JSON.stringify(authors));
            break;
        
        default: 
            res.writeHead(404)
            res.end(JSON.stringify({
                message: "Not found"   
            }))
    }

}
const server = http.createServer(handleRquest)

server.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server started at http://${HOSTNAME}:${PORT}`)
})
