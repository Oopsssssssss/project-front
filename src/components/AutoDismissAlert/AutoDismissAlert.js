import './AutoDismissAlert.scss'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'

function AutoDismissAlert ({ variant, heading, message }) {
  const [show, setShow] = useState(true)
  const [timeoutId, setTimeOutId] = useState(null)

  useEffect(() => {
    // we want to create a timer that closes our alert after 5 seconds
    const id = setTimeout(() => setShow(false), 5000)
    setTimeOutId(id)

    return function cleanup () {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <Alert
      variant={variant}
      onClose={() => setShow(false)}
      dismissible
      show={show}
    >
      <div className='container'>
        <Alert.Heading>{heading}</Alert.Heading>
        <p className='alert-body'>{message}</p>
      </div>
    </Alert>
  )
}

export default AutoDismissAlert
