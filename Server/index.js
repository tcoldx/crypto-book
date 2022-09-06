const express = require('express');
const cors = require('cors');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const port = process.env.PORT || 3001 
app.use(cors())
app.get("/", (req, res) => {
    res.send("server up and runnin");
})
const io = new Server(server, {
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket) => {
    socket.on("loggedin", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })
    socket.on("send-message", (data) =>  {
 socket.to(data.room).emit("recieve-message", data)
    })
})
server.listen(port, () => console.log("happy hacking!"))
    
