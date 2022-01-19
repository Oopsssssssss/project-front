import axios from 'axios'
import apiUrl from '../apiConfig'

export const getOneProfile = (user, id) => {
  return axios.get(`${apiUrl}/profiles/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createProfile = (user, name, aboutMe) => {
  return axios.post(`${apiUrl}/profiles/`,
    {
      profile: {
        name,
        aboutMe
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const editProfile = (user, id, name, aboutMe) => {
  return axios.patch(`${apiUrl}/profiles/${id}/edit`,
    {
      profile: {
        name,
        aboutMe
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const deleteProfile = (user, id) => {
  return axios.delete(`${apiUrl}/profiles/${id}/delete`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
