import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
// import queryString from 'query-string'
import { io } from 'socket.io-client'
import './chat.scss'
import apiUrl from '../../apiConfig'
// import TextContainer from './TextContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ScrollToBottom from 'react-scroll-to-bottom'

// this is where we will add the heroku app link
const socket = io(apiUrl, {
  withCredentials: true
})

const Chat = ({ user }) => {
  if (!user || !user.profile) {
    return <Navigate to='/' />
  }

  const [chat, setChat] = useState([])
  const [chatState, setChatState] = useState({
    message: '',
    name: user.profile.name
  })

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
    return () => {
      socket.off('message')
    }
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
    return (
      <ScrollToBottom className='chatBox'>
        {chat.map(({ name, message }, index) => (
          <div key={index}>
            <h3>
              {name}: <span>{message}</span>
            </h3>
          </div>
        ))}
      </ScrollToBottom>
    )
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <div className='container'>
          <ul className='chatBox'>{chatMessages()}</ul>
          <div></div>
        </div>
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
