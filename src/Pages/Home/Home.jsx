import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
    <Header />
    <Banner />
    <RowList />
    <Footer />
    </div>
  )
}

export default Home