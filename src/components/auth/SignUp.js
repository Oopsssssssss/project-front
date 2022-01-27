import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// Access the signUp function through a `named import`
import { signIn, signUp } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

const SignUp = ({ setUser, msgAlert }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async event => {
    event.preventDefault()

    try {
      // Call the signUp function to make an axios request
      // to create a user
      await signUp(email, password, passwordConfirmation)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
      console.error(error)
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign Up</h3>

        <Form onSubmit={onSignUp}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              value={password}
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={(event) => setPasswordConfirmation(event.target.value)}
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

export default SignUp
