import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({Children}) => {
  return (
    <>
      <Navbar/>
      {Children}
      <Footer/>
    </>
  )
}

export default Layout
