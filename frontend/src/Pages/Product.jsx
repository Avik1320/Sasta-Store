import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Navbar from '../Layouts/Navbar';
import { addToCart, checkIfItemIsInCart } from '../store/cartSlice';

const Product = (props) => {
    const [item, setItem] = useState([])
    const { chk } = useSelector((state) => state.cart);

    const dispatch = useDispatch()

    const { id } = useParams()


    const fetchP = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setItem(data);
    }

    const handleCart = (id, title, price, image) => {
        // navigate(`product/${id}`)
        const cred = {
            id: id,
            title,
            price,
            image
        }
        dispatch(addToCart(cred))
        dispatch(checkIfItemIsInCart(id))
        fetchP()
    }



    useEffect(() => {
        fetchP();
        dispatch(checkIfItemIsInCart(id))
    }, []);

    return (
        <>
            <Navbar />
            <div className='product_main'>
                <div className="page_title">Product Details</div>
                <div className="product_det">
                    <div className="product_img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="det">
                        <div className="product_title" >{item.title}</div>
                        <div className="product_price">₹{item.price}</div>
                        <div className="add_product">

                            <div className="add_to_cart" onClick={() => handleCart(id, item.title, item.price, item.image)}>
                                <button disabled={chk == 'true' ? true : false} className='add' >{chk == 'true' ? 'Already in cart' : 'Add to cart'} </button>
                            </div>
                            <div className="buy_now">
                                <button className='buy'>Buy Now</button>
                            </div>
                        </div>
                        <div className="product_details">
                            <div className="heading">Details</div>
                            <ul className="details">
                                <li className="items">SKU: CA78974</li>
                                <li className="items">Brand: Vendor 3</li>
                                <li className="items">Type: Women's Clothing</li>
                                <li className="items">Availability: In Stock</li>
                            </ul>
                        </div>
                        <div className="product_description">
                            <div className="des_heading">Description</div>
                            <p>
                                {item.description}
                            </p>
                            {/* <ul className="des_det">
                                <li className="items">Model is 5</li>
                                <li className="items">Wearing size 2</li>
                                <li className="items">100% Cotton</li>
                                <li className="items">Machine wash cold with like colors, tumble dry low</li>
                                <li className="items">Made in Jiangmen, ChinaSee the factory</li>
                                <li className="items">Questions about fit?Email support@kalatheme.com</li><br />

                                <p>A pant that just works. Made from a 100% non-stretch cotton, the Carpenter Pant has a flattering high-rise, relaxed straight leg, and slightly cropped fit—plus cargo pockets and hammer loop for an original look.</p>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product
