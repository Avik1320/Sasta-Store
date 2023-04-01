import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SellerProducts = () => {
    const param = window.location.pathname;

    const [quatity, setquatity] = useState(1);

    const handleincrement = () => {
        setquatity(quatity+1);
    }

    const handledecrement = () => {
        if(quatity<=1){
            setquatity(1);
        }
        else{
            setquatity(quatity-1);
        }
        
    }

    return (
        <>
            {/* <div className="seller_card">
                <Link to="/product" className="seller-prod-img">
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
                </Link>
                <div className="seller-prod-title">
                    <Link to="/product">Lorem ipsum dolor sit amet consectetur.
                    </Link>
                    <span> <b>Price :</b> ₹1999</span>
                </div>
                <div className="seller-prod-quan">
                    <button className="ctrl minus" ><span className="minus">-</span></button>
                    <input type="number" />
                    <button className="ctrl plus"><span className="plus">+</span></button>
                </div>
                {param==="/cart"?"":<FontAwesomeIcon icon={faPen} className="edi" />}
                <FontAwesomeIcon icon={faTrash} className="del" />
            </div> */}


            <div className="seller_card">
                <Link to="/product" className="seller-prod-img">
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
                </Link>
                <div className="seller-prod-title">
                    <Link to="/product">Lorem ipsum dolor sit amet consectetur.
                    </Link>
                    <span> <b>Price :</b> ₹1999</span>
                </div>
                <div className="seller-prod-quan">
                    <button className="ctrl minus" onClick={handledecrement}><span className="minus">-</span></button>
                    <span className='quatity'>{quatity}</span>
                    <button className="ctrl plus" onClick={handleincrement}><span className="plus">+</span></button>
                </div>
                <button className='remove-btn'>Remove</button>
            </div>
            <hr />


        </>
    )
}

export default SellerProducts
