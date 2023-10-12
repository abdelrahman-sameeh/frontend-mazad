import React from 'react'
import CreateProductContainer from '../../components/Product/CreateProductContainer'
import NavbarComponent from '../../components/utils/NavbarComponent'
import FooterComponent from '../../components/utils/FooterComponent'

const CreateProductPage = () => {
  return (
    <div className='page'>
      <NavbarComponent />
      <CreateProductContainer />
      <FooterComponent />
    </div>
  )
}

export default CreateProductPage