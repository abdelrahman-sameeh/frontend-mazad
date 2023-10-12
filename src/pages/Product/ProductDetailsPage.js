import React from 'react'
import ProductDetailsContainer from '../../components/Product/ProductDetailsContainer'
import NavbarComponent from '../../components/utils/NavbarComponent'
import FooterComponent from '../../components/utils/FooterComponent'

const ProductDetailsPage = () => {
  return (
    <div className='page'>
      <NavbarComponent />
      <ProductDetailsContainer />
      <FooterComponent />
    </div>
  )
}

export default ProductDetailsPage