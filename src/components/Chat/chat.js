import React, { useState, useEffect } from 'react'
// import queryString from 'query-string'
import { io } from 'socket.io-client'
import './chat.scss'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const socket = io('http://localhost:4741', {
  withCredentials: true
})

const Chat = ({ user }) => {
  const [name, setName] = useState('')
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    setName(user.profile.name)
    socket.on('message', (chatObject) => {
      setChat(chat.push(chatObject))
      console.log(chatObject)
    })
    console.log('name is ', name)
  })
  socket.on('connect', () => {
    console.log(socket.id)
  })

  const handleChange = event => {
    setMessage(event.target.value)
    console.log('message ', message, '  val ', event.target.value)
  }

  const onMessageSubmit = event => {
    event.preventDefault()
    const chatObject = { name, message }
    console.log(chatObject)
    socket.emit('message', chatObject)
  }

  // const renderChat = () => {
  //   return chat.map(({ name, message }, index) => (
  //     <div key={index}>
  //       <h3>
  //         {name}: <span>{message}</span>
  //       </h3>
  //     </div>
  //   ))
  // }

  const chatMessages = chat.map(({ name, message }, index) => (
    <div key={index}>
      <li>
        {name}: <span>{message}</span>
      </li>
    </div>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Messenger</h3>
        <Form onSubmit={onMessageSubmit}>
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              type='text'
              name='message'
              value={message}
              placeholder='Enter message'
              onChange={e => handleChange(e)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <ul>{chatMessages}</ul>
      </div>
    </div>
  )
}

export default Chat
