import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getOneProfile, deleteProfile } from '../../api/profile'

import Button from 'react-bootstrap/Button'
import { profileDeleteSuccess } from '../AutoDismissAlert/messages'

const Profile = ({ user, msgAlert }) => {
  const [profile, setProfile] = useState(null)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getOneProfile(user, id)
          .then(res => setProfile(res.data.profile))
      } catch (error) {
        msgAlert({
          heading: 'Finding Profile failed with error: ',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchProfile()
  }, [])

  const onDeleteProfile = async () => {
    try {
      await deleteProfile(user, id)
        .then(
          msgAlert({
            heading: 'Profile Deleted Successfully',
            message: profileDeleteSuccess,
            variant: 'success'
          })
        )
        .then(<Navigate to='/' />)
    } catch (error) {
      msgAlert({
        heading: 'Delete Profile failed with error: ',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  return (
    <>
      <h2>{profile.name}</h2>
      <h4>About Me:</h4>
      <p>{profile.aboutMe}</p>
      <Button onClick={onDeleteProfile} variant='danger' type='button'>Delete Profile</Button>
    </>
  )
}

export default Profile
