import React from 'react'
import './rules.scss'
import gif from './gif/gif.gif'
const Rules = () => {
  return (
    <>
      <div className='rulesSock'>
        <h1 className='rules'>please be nice</h1>
        <img className='socket' src={gif} alt='new' />
      </div>
    </>
  )
}

export default Rules
