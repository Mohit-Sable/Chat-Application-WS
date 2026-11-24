# Real-Time Chat Application

A lightweight, room-based real-time messaging application built with **Node.js, TypeScript, and WebSockets**. It enables multiple clients to establish persistent connections, join chat rooms, and exchange messages instantly through a WebSocket server.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Language-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/WebSocket-Communication-010101?style=for-the-badge&logo=websocket&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Development-orange?style=for-the-badge" />
</p>

## Overview

This project demonstrates how real-time communication can be implemented using the WebSocket protocol.

Unlike traditional HTTP request-response communication, WebSockets maintain a persistent connection between the client and server, allowing messages to be exchanged without repeatedly creating new connections.

The application uses a room-based architecture to ensure that messages are delivered to clients belonging to the same room.

## Features

- **Real-Time Communication:** Exchange messages through persistent WebSocket connections.
- **Room-Based Messaging:** Clients can join specific chat rooms using a room ID.
- **Message Broadcasting:** Messages are delivered to connected clients in the same room.
- **Connection Handling:** Manage incoming WebSocket client connections.
- **TypeScript Support:** Leverage static typing for better code organization and maintainability.
- **Lightweight Backend:** Built using Node.js and the `ws` WebSocket library.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Server-side runtime |
| TypeScript | Type-safe development |
| WebSocket (`ws`) | Real-time communication |
| npm | Dependency management |

## Architecture

```text
             WebSocket Clients
              /      |      \
             /       |       \
          Client 1 Client 2 Client 3
             \       |       /
              \      |      /
          WebSocket Server
               Port 3001
                   |
             Room Management
                   |
          Message Broadcasting
                   |
           Connected Room Users
```

## How It Works

The application follows a simple event-driven communication flow.

**1. Establish Connection**
- A client establishes a WebSocket connection with the server.
- The server listens for incoming connections on port `3001`.

**2. Join a Room**

Clients send a JSON message containing the room ID.

```json
{
  "type": "join",
  "payload": {
    "roomId": "room-101"
  }
}
```

**3. Send a Chat Message**

A connected client sends a message using the chat event.

```json
{
  "type": "chat",
  "payload": {
    "message": "Hello everyone!"
  }
}
```

**4. Broadcast Messages**
- The server identifies the sender's room.
- It finds connected clients belonging to that room.
- The message is broadcast to those clients.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Mohit-Sable/Chat-Application-WS.git
```

**2. Navigate to the project directory**

```bash
cd Chat-Application-WS
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the WebSocket server**

```bash
npm run dev
```

The server will start listening on port `3001`.

### WebSocket Connection

Connect your WebSocket client to:

```text
ws://localhost:3001
```

You can use a WebSocket testing client to establish connections and send the JSON messages described above.

## Project Structure

```text
Chat-Application-WS/
│
├── src/
│   └── index.ts          # WebSocket server implementation
│
├── dist/                 # Compiled JavaScript output
│
├── package.json          # Dependencies and scripts
├── package-lock.json     # Dependency lock file
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Learning Objectives

This project was developed to explore and understand:

- WebSocket protocol and its working.
- Persistent client-server connections.
- Event-driven programming in Node.js.
- Room-based communication architecture.
- Message serialization and JSON parsing.
- TypeScript interfaces and type safety.
- Broadcasting messages across connected clients.

## Future Improvements

- User authentication and authorization.
- Unique usernames and user identification.
- Private one-to-one messaging.
- Message history and database integration.
- Online/offline user status.
- Automatic cleanup of disconnected clients.
- Frontend integration with React.
- Improved error handling and connection management.

## Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

## Author

**Mohit Sable**

GitHub: [@Mohit-Sable](https://github.com/Mohit-Sable)

Project Repository: [Chat-Application-WS](https://github.com/Mohit-Sable/Chat-Application-WS)

---

<p align="center">
  If you find this project interesting, consider giving it a ⭐ on GitHub.
</p>
