import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import content from '../data/content.json'

const ShopApplicationWrapper = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer content={content?.footer}/>

    </div>
  )
}

export default ShopApplicationWrapper
