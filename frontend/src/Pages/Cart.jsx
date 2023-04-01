import React from 'react'
import SellerProducts from '../components/SellerProducts'
import Navbar from '../Layouts/Navbar'

const Cart = () => {
  return (
    <div className='cart_main'>
      <Navbar page="cart" />
      <div className="cart_product">
        <div className="products">
          <span className="title">My Cart</span>
          <SellerProducts />
          <SellerProducts />
          <div className="place-order">Place Order</div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
