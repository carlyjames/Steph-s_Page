import React from 'react'
import Header from './Header'
// import FixedBottomNav from './BottomNav'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        {/* <FixedBottomNav /> */}
    
    </>
  )
}

export default Layout