import React, { Component, useEffect, useState } from 'react'
import '../Style/css/main.css'
import logo from '../Assets/nav_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUser } from '../store/userSlice';
import { useNavigate } from "react-router-dom";





const Navbar = ({ page }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  // const { data, status } = useSelector((state) => state.buyer);
  const { data, status } = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };





  const [user, setUser] = useState({
    isAdmin: "false",
    fname: "User"
  })


  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(fetchUser(localStorage.getItem('token')))
    navigate('/')
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchUser(localStorage.getItem('token')))
    }
    // }
  }, [])





  return (
    <div className='navbar'>

      <div className="nav_logo">
        {
          data.isAdmin ?
            <span >Admin</span>
            :
            <img src={logo} alt="sastastore logo" />
        }
        <FontAwesomeIcon icon={faBars} className='hamburger' />
        <Link to="/" className="title">SastaStore</Link>
      </div>
      <div className="nav_acc">
        {page === "seller" ? "" : <Link to={localStorage.getItem('token') ? `/cart` : `/auth`} className="profile">
          <FontAwesomeIcon icon={faCartShopping} />
          <span >Cart</span>
        </Link>}

        { page === "home" ?<Link to="seller" className="profile">
          <span >Seller</span>
        </Link>:""}

        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="dropdown-toggle">
            <FontAwesomeIcon icon={faUser} />
            <span className="text">{data.username ? data.username : "User"}</span>
          </div>
          {isOpen && (
            <div class="dropdown-content">
              {localStorage.getItem('token') ? "" : <Link to='/auth'>Sign In</Link>}
              {localStorage.getItem('token') ? "":<Link to='/auth/signup'>Sign Up</Link> }
              {localStorage.getItem('token') ? <Link to='/'span onClick={handleLogout}>Logout</Link>:""}
              {localStorage.getItem('token') ? <a href="#contact">Veiw Profile</a>:""}
            </div>
          )} 
        </div>




        {/* <Link to="/auth" className="profile" style={{ pointerEvents: `${localStorage.getItem('token') ? "none" : ""}` }}>
          <FontAwesomeIcon icon={faUser} />
          <span className="text">{data.username ? data.username : "User"}</span>
        </Link> */}
        {/* {localStorage.getItem('token') ? <div className="profile" onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} /></div> : ""} */}
        {page === "seller" && <button className='additem'>Add Product</button>}
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className='faSearch'></FontAwesomeIcon>
        <input type="text" name="" id="" />
      </div>







    </div>
  )
}

export default Navbar