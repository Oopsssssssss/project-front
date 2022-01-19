import axios from 'axios'
import apiUrl from '../apiConfig'

export const getOneProfile = (user, id) => {
  return axios.get(`${apiUrl}/profiles/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createProfile = (user, name, about) => {
  return axios.post(`${apiUrl}/profiles/`,
    {
      profile: {
        name,
        about
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const editProfile = (user, id, name, about) => {
  return axios.patch(`${apiUrl}/profiles/${id}`,
    {
      profile: {
        name,
        about
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const deleteProfile = (user, id) => {
  return axios.delete(`${apiUrl}/profiles/${id}`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
