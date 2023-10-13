import React from 'react'
import NavbarComponent from '../../components/utils/NavbarComponent'
import FooterComponent from '../../components/utils/FooterComponent'
import FavoritesContainer from '../../components/User/FavoritesContainer'

const FavoritesPage = () => {
  return (
    <div className='page'>
      <NavbarComponent />
      <FavoritesContainer />
      <FooterComponent/> 
    </div>
  )
}

export default FavoritesPage