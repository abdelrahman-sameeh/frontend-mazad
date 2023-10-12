import React from 'react'
import ProductsContainer from '../../components/Product/ProductsContainer'
import NavbarComponent from '../../components/utils/NavbarComponent'
import FooterComponent from '../../components/utils/FooterComponent'

const ProductsPage = () => {
  return (
    <div className='page'>
      <NavbarComponent />
      <ProductsContainer />
      <FooterComponent />
    </div>
  )
}

export default ProductsPage