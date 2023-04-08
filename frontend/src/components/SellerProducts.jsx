import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';


const SellerProducts = ({ imageurl, p_id, price, title, id, onRemove }) => {
    const dispatch = useDispatch();
    const param = window.location.pathname;

    const [quatity, setquatity] = useState(1);

    const handleincrement = () => {
        setquatity(quatity + 1);
    }

    const handledecrement = () => {
        if (quatity <= 1) {
            setquatity(1);
        }
        else {
            setquatity(quatity - 1);
        }

    }
    const handleClick = (id) => {
        onRemove(id);
    }



    return (
        <>
            <div className='seller_card'>
                <Link to={`/product/${p_id}`} className="seller-prod-img">
                    <img src={imageurl} alt="" />
                </Link>
                <div className="seller-prod-title">
                    <Link to={`/product/${p_id}`}>
                        {`${title.slice(0, 35)}${title.length > 35 ? "..." : ""}`}
                    </Link>
                    <span> <b>Price :</b> {price}</span>
                </div>
                <div className="seller-prod-quan">
                    <button className="ctrl minus" onClick={handledecrement}><span className="minus">-</span></button>
                    <span className='quatity'>{quatity}</span>
                    <button className="ctrl plus" onClick={handleincrement}><span className="plus">+</span></button>
                </div>
                <button className='remove-btn' onClick={() => handleClick(id)}>Remove</button>
            </div>
            <hr />


        </>
    )
}

export default SellerProducts
