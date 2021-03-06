import React from 'react'
import './chat.js'
import './TextContainer.css'

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Realtime Chat Application{' '}
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{' '}
        <span role='img' aria-label='emoji'>
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{' '}
        <span role='img' aria-label='emoji'>
          ⬅️
        </span>
      </h2>
    </div>
    <div>
      <h1>Socket-To-Me Chat</h1>
      <div className='activeContainer'>
        <h2>
          {users.map(({ name }) => (
            <div key={name} className='activeItem'>
              {name}
            </div>
          ))}
        </h2>
      </div>
    </div>
  </div>
)

export default TextContainer
