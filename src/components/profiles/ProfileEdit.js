import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { editProfile } from '../../api/profile'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  profileEditSuccess,
  profileEditFailure
} from '../AutoDismissAlert/messages'

const ProfileEdit = ({ user, msgAlert }) => {
  const [name, setName] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  const onProfileEdit = async event => {
    event.preventDefault()

    try {
      await editProfile(user, id, name, aboutMe)
      msgAlert({
        heading: 'Profile Edit Success',
        message: profileEditSuccess,
        variant: 'success'
      })
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Profile Edit failed with error: ' + error.message,
        message: profileEditFailure,
        variant: 'danger'
      })
      setName('')
      setAboutMe('')
    }
  }

  if (updated) {
    return <Navigate to={`/profiles/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Your Profile</h3>

        <Form onSubmit={onProfileEdit}>
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

export default ProfileEdit
