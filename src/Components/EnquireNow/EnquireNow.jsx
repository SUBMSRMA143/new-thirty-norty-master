import React from 'react'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import EnquireNowPage from './EnquireNowPage'
import NavBar from '../NavBar/NavBar'

const EnquireNow = () => {
  return (
    <div>
      <NavBar page={"EnquireNow"} />
      <div className='pt-5' ></div>
      <EnquireNowPage />
      <Footer />
      <FloatingWhatsApp phoneNumber="+91 96826 39541" accountName="Shubham Parashar" />
      <ScrollRestoration />
    </div>
  )
}

export default EnquireNow