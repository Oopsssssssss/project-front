import React, { useState, useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { getOneProfile, deleteProfile } from '../../api/profile'
import { Spinner } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import {
  profileDeleteSuccess,
  profileFindError
} from '../AutoDismissAlert/messages'

const Profile = ({ user, msgAlert }) => {
  const [profile, setProfile] = useState(null)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getOneProfile(user, id).then(res => setProfile(res.data.profile))
      } catch (error) {
        msgAlert({
          heading: 'Finding Profile failed with error: ',
          message: profileFindError,
          variant: 'danger'
        })
      }
    }
    fetchProfile()
  }, [])

  const onDeleteProfile = async () => {
    try {
      await deleteProfile(user, id).then(
        delete user.profile,
        setShouldNavigate(true),
        msgAlert({
          heading: 'Profile Deleted Successfully',
          message: profileDeleteSuccess,
          variant: 'success'
        })
      )
    } catch (error) {
      msgAlert({
        heading: 'Delete Profile failed with error: ',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  if (profile === null) {
    return (
      <>
        <h4>Fetching Profile</h4>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <Button
          onClick={() => setShouldNavigate(true)}
          variant='primary'
          type='button'
        >
          Return Home
        </Button>
      </>
    )
  } else {
    return (
      <>
        <h2>{profile.name}</h2>
        <h4>About Me:</h4>
        <p>{profile.about}</p>
        <Button onClick={onDeleteProfile} variant='danger' type='button'>
          Delete Profile
        </Button>
        <Link to={`/profiles/${id}/edit`}>
          <Button variant='primary' type='submit'>
            Edit Profile
          </Button>
        </Link>
      </>
    )
  }
}

export default Profile
