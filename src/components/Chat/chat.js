import React, { useState, useEffect } from 'react'
// import queryString from 'query-string'
import { io } from 'socket.io-client'
// import './chat.scss'
// import TextContainer from './TextContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// this is where we will add the heroku app link
const socket = io('http://localhost:4741', {
  withCredentials: true
})

const Chat = ({ user }) => {
  const [chat, setChat] = useState([])
  const [chatState, setChatState] = useState({ message: '', name: user.profile.name })

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const handleChange = event => {
    setChatState({ ...chatState, [event.target.name]: event.target.value })
    console.log('name ', event.target.name, '  val ', event.target.value)
  }

  const onMessageSubmit = event => {
    event.preventDefault()
    const { name, message } = chatState
    socket.emit('message', { name, message })
    setChatState({ message: '', name })
  }

  const chatMessages = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <ul>{chatMessages()}</ul>
        <Form onSubmit={onMessageSubmit}>
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              type='text'
              name='message'
              value={chatState.message}
              placeholder='Enter message'
              onChange={e => handleChange(e)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default Chat
