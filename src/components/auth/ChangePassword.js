import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// Access the signUp function through a `named import`
import { changePassword } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  changePasswordSuccess,
  changePasswordFailure
} from '../AutoDismissAlert/messages'

const ChangePassword = ({ user, msgAlert }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onChangePassword = async event => {
    event.preventDefault()

    try {
      // Call the signUp function to make an axios request
      // to create a user
      await changePassword(oldPassword, newPassword, user)
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
      console.error(error)
      setOldPassword('')
      setNewPassword('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>

        <Form onSubmit={onChangePassword}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Old Password'
              required
              value={oldPassword}
              onChange={event => setOldPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              value={newPassword}
              type='password'
              placeholder='New Password'
              onChange={event => setNewPassword(event.target.value)}
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

export default ChangePassword
