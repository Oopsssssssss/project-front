import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// Access the signUp function through a `named import`
import { signIn } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'
import '../auth/SignIn.scss'

const SignIn = ({ setUser, msgAlert }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async event => {
    event.preventDefault()

    try {
      // Call the signUp function to make an axios request
      // to create a user
      const res = await signIn(email, password)
      setUser(res.data.user)
      console.log(res.data.user)
      msgAlert({
        heading: 'Sign In Success!',
        message: signInSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
      console.error(error)
      setEmail('')
      setPassword('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>

        <Form onSubmit={onSignUp}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              value={password}
              type='password'
              placeholder='Password'
              onChange={event => setPassword(event.target.value)}
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

export default SignIn
