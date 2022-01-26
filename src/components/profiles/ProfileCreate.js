import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createProfile } from '../../api/profile'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  profileCreateSuccess,
  profileCreateFailure
} from '../AutoDismissAlert/messages'

const ProfileCreate = ({ user, setUser, msgAlert }) => {
  const [name, setName] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  const onProfileCreate = async event => {
    event.preventDefault()

    try {
      await createProfile(user, name, aboutMe).then(res => {
        user.profile = res.data.profile
      })
      msgAlert({
        heading: 'Profile Creation Success',
        message: profileCreateSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Profile Creation failed with error: ' + error.message,
        message: profileCreateFailure,
        variant: 'danger'
      })
      setName('')
      setAboutMe('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Your Profile</h3>

        <Form onSubmit={onProfileCreate}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Profile Name'
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='aboutMe'>
            <Form.Label>About Me</Form.Label>
            <Form.Control
              required
              value={aboutMe}
              type='aboutMe'
              placeholder='Tell us a bit about yourself'
              onChange={event => setAboutMe(event.target.value)}
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

export default ProfileCreate
