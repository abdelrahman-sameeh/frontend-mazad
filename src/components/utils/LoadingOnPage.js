import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingOnPage = () => {
  return (
    <div className='loading-page'>
      <Spinner animation='grow' variant='success' />
    </div>
  )
}

export default LoadingOnPage