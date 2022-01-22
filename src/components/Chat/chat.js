// import React from 'react'
import './chat.scss'
// import { io } from 'socket.io-client'
import { io } from 'socket.io-client'
// import socketClient from 'socket.io-client'
const SERVER = 'http://localhost:4741'

const socket = io(SERVER, {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd'
  }
})

const Chat = socket.on('connect', () => {
  console.log(socket.connected) // true
})

export default Chat
