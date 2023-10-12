import React from 'react'
import MazadContainer from '../../components/Mazad/MazadContainer'
import NavbarComponent from '../../components/utils/NavbarComponent'
import FooterComponent from '../../components/utils/FooterComponent'

const MazadPage = () => {
  return (
    <div className='page'>
      <NavbarComponent />
      <MazadContainer />
      <FooterComponent />
    </div>
  )
}

export default MazadPage