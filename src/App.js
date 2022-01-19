/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
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

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
	      <main className='container'>
          <Routes>
	        <Route
              path='/sign-up'
              element={
                <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
              }
            />
            <Route
              path='/sign-in'
              element={
                <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
              }
            />
            <Route
              user={user}
              path='/sign-out'
              element={
                <SignOut
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  user={user}
                />
              }
            />
            <Route
              user={user}
              path='/change-password'
              element={
                <ChangePassword msgAlert={this.msgAlert} user={user} />
              }
            />
            <Route
              user={user}
              path='/profiles/:id'
              element={
                <Profile msgAlert={this.msgAlert} user={this.user} />
              }
            />
            <Route
              user={user}
              path='/profiles/:id/edit'
              element={
                <Profile msgAlert={this.msgAlert} user={this.user} />
              }
            />
          </Routes>
        </main>
      </Fragment>
    )
  }
}

export default App
