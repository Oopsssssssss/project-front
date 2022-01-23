import React from 'react'
import '../Home.scss'
import '../img/Message.png'
const Home = () => {
  return (
    <>
      <div className='title'>
        <h1>Socket to Me</h1>
      </div>
      <div className='image-container'>
        <img className='photo' src={require('../img/Message.png').default} />
      </div>
      <p>Unique</p>
      <p>Socket</p>
    </>
  )
}

export default Home
