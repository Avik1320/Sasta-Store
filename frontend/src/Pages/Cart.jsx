import React, { useEffect } from 'react'
import Navbar from '../Layouts/Navbar'
import '../Style/css/main.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart,removeFromCart } from '../store/cartSlice'
import { MagnifyingGlass } from 'react-loader-spinner'
import { STATUSES } from '../store/buyersSlice';
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import CartList from '../components/CartList'



const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status } = useSelector((state) => state.cart);
  const { data: users, status: us } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <div className='cart_main'>
      <Navbar page="cart" />
      <div className="cart_product">
        <div className="products">
          <span className="title">My Cart</span>
          {status === STATUSES.LOADING ?
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperclassName="MagnifyingGlass-wrapper"
              glassColor='#c0efff'
              color='#e15b64'
            />
            :
            <>
            {
              data.map((itm, idx) => {
                return (<CartList imageurl={itm.imageurl} p_id={itm.p_id} price={itm.price} title={itm.title} key={idx} id={itm._id} onRemove={handleRemove} />)
              })
            }
            < div className="place-order">Place Order</div>
            </>
          }
          
        </div>
      </div>
      
    </div>
  )
}

export default Cart
