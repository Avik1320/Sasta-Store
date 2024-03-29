import React from 'react'
import Navbar from "../Layouts/Navbar"
import '../Style/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Catagory } from '../Layouts/Catagory'
import { Banner } from '../Layouts/Banner'
import { Omg } from '../Layouts/Omg'
import Foods from '../Layouts/Foods'
import Card from '../components/Card'
// import '@fortawesome/fontawesome-svg-core/styles.css';
import Product from './Product'
import { useEffect } from 'react'




const Home = () => {




  return (
    <div className='home'>
      <Navbar page="home"/>
      <Catagory/>
      <Banner/>
      <Omg link='https://fakestoreapi.com/products' />
      <Foods title="Buy Foods, Toys and More" link='https://fakestoreapi.com/products' /> 
      <Foods title="Electronics and electrical" link='https://fakestoreapi.com/products' />
      <Foods title="Grocery and more " link='https://fakestoreapi.com/products' /> 

      
    </div>
  )
}

export default Home