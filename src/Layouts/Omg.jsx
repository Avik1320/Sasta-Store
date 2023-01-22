import React from 'react'
import Image from '../Assets/omg-deal.jpg';
import Image2 from '../Assets/best-deals/phone1.jpg';
import { useState, useEffect } from 'react';

export const Omg = () => {

    const [users, setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        // console.log(response);
        setUser(await response.json());
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='omg'>
            <div className="omg_logo">
                <img src={Image} alt="" />
            </div>
            <span className='omg_title'>Lowest Prices On The Best Brands</span>

            <div className="omg_products">
                {
                    users.map((currEle) => {
                        return (
                            <div className="card">
                                <img src={currEle.image} alt="" /><br />
                                <div class="container">
                                    <span className='dis'>Up to 29% off</span>
                                    <div className='price'>₹{currEle.price}</div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className="all-pro">See All Product</div>

        </div>
    )
}