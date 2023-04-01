import React, { useRef } from 'react'
import Image from '../Assets/omg-deal.jpg';
import Image2 from '../Assets/best-deals/phone1.jpg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { MagnifyingGlass } from 'react-loader-spinner'
import { STATUSES } from '../store/buyersSlice';
import Card from '../components/Card';

export const Omg = (props) => {
    const dispatch = useDispatch();
    const { data: users, status } = useSelector((state) => state.product);


    // const getUser = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     setUser(await response.json());
    // }

    const [scrollPosition, setScrollPosition] = useState(0);
    const overflowDivRef = useRef(null);
    const scrollWidth = 500;

    useEffect(() => {
        dispatch(fetchProducts(`https://fakestoreapi.com/products`));
        console.log(users);
        console.log(overflowDivRef.current.offsetWidth  );
        

    }, []);

    
    const handleMoveLeft = () => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const scrollDistance = vw * 0.5;
        const newScrollPosition = Math.max(0, scrollPosition - scrollDistance);
        setScrollPosition(newScrollPosition);
        overflowDivRef.current.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
      };
    
      const handleMoveRight = () => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const scrollDistance = vw * 0.5;
        const newScrollPosition = Math.min(overflowDivRef.current.scrollWidth - overflowDivRef.current.offsetWidth, scrollPosition + scrollDistance);
        setScrollPosition(newScrollPosition);
        overflowDivRef.current.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
      };

    return (
        <div className='omg'>
            <div className="omg_logo">
                <img src={Image} alt="" />
            </div>
            <span className='omg_title'>Lowest Prices On The Best Brands</span>

            <button onClick={handleMoveLeft}>Left</button>
            <div className="product_slider" ref={overflowDivRef}>
                {status === STATUSES.LOADING ?
                    (<MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperclassName="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />)
                    :
                    users.map((itm, idx) => {
                        return (
                            <Card img={itm.image} title={itm.title} price={itm.price} id={itm.id} key={idx} />
                        )

                    })

                }
            </div>
            <button onClick={handleMoveRight}>Right</button>
            <div className="all-pro">See All Product</div>

        </div>
    )
}
