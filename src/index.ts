import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

interface Users {
    socket: WebSocket,
    room: string
}

let all_sockets: Users[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {

        const mess = JSON.parse(message.toString());

        if (mess.type == "join") {

            console.log("The client has joined room no: " + mess.payload.roomId);
            socket.send("You are connected");

            all_sockets.push({
                socket,
                room: mess.payload.roomId
            })
        }

        if (mess.type == "chat") {

            console.log("User wants to Chat");

            let room_id = null;

            for (let i = 0; i < all_sockets.length; i++) {
                if (all_sockets[i].socket == socket) {
                    room_id = all_sockets[i].room;
                }
            }


            for (let y = 0; y < all_sockets.length; y++) {
                if (all_sockets[y].room == room_id) {
                    all_sockets[y].socket.send(mess.payload.message);
                }
            }
        }
    })
})