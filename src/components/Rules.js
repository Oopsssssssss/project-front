import React from 'react'
import './rules.scss'
import gif from './gif/gif.gif'
const Rules = () => {
  return (
    <>
      <h1 className='rules'>please be nice</h1>
      <img className= 'rulesSock'
        src={gif}
        alt='new'
      />
    </>
  )
}

export default Rules
