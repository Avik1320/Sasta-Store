import React from 'react'
import Card from '../components/Card';
import Navbar from '../Layouts/Navbar';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import SellerProducts from '../components/SellerProducts';
import { Link, useParams } from 'react-router-dom';
import Modalform from '../Layouts/Modalform';

const Seller = () => {
    const param = useParams();
    const params = param["*"];

    return (
        <div className='seller'>
            <Navbar page="seller" /><Modalform />
            <div className="seller_main">
                <div className="sellercat">
                    <div className="seller_catagory">
                        <Link to="" className={`typ-cata ${params === "" ? "active" : ""}`}>All</Link>
                        <Link to="electronics" className={`typ-cata ${params === "electronics" ? "active" : ""}`}>Electronics</Link>
                        <Link to="food" className={`typ-cata ${params === "food" ? "active" : ""}`}>Food</Link>
                        <Link to="baby" className={`typ-cata ${params === "baby" ? "active" : ""}`}>Baby</Link>
                        <Link to="cloths" className={`typ-cata ${params === "cloths" ? "active" : ""}`}>Cloths</Link>
                    </div>
                </div>
                <div className="sellerprod">
                    <div className="seller_product">
                        <h1>{params === undefined ? "All" : params}</h1>
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                        <SellerProducts imageurl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" p_id="1" price="6000" title="Bara Chodna Laudar Matha" id="test" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Seller
