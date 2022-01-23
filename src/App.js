/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Profile from './components/profiles/Profile'
import Home from './components/Home'
import Chat from './components/Chat/chat'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  console.log(setMsgAlerts)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    console.log(id)
    setMsgAlerts(prevMsgAlerts => {
      return [...prevMsgAlerts, { heading, message, variant, id }]
    })
  }

  return (
    <>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
        />
      ))}
      <Header user={user} />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/sign-up'
            element={<SignUp setUser={setUser} msgAlert={msgAlert} />}
          />
          <Route
            path='/sign-in'
            element={<SignIn setUser={setUser} msgAlert={msgAlert} />}
          />
          <Route
            path='/change-password'
            element={<ChangePassword user={user} msgAlert={msgAlert} />}
          />
          <Route
            path='/sign-out/'
            element={
              <SignOut user={user} clearUser={clearUser} msgAlert={msgAlert} />
            }
          />
          <Route
            path='/profiles/'
            element={<Profile user={user} msgAlert={msgAlert} />}
          />

          <Route
            path= '/chat'
            element= {<Chat/>}
          />

        </Routes>
      </main>
    </>
  )
}

export default App
