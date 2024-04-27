import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1'>{children}</div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout