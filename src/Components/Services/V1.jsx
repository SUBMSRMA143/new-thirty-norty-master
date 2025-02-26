import React, { Suspense, lazy } from 'react'
import NavBar from '../NavBar/NavBar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import OurCenter from '../MainPage/OurCenter'
import V1Services from './V1Services'

const Youtube = lazy(() => import("../MainPage/Youtube"));
const Instagram = lazy(() => import("../MainPage/Instagram"));
const Footer = lazy(() => import("../Footer/Footer"));
const Owner = lazy(() => import("../MainPage/Owner"));

const V1 = () => {
  return (
    <>
      <NavBar page={"Join-Our-Academy"} />
      <div className='p-5'></div>
      {/* <About/> */}
      <V1Services />
      <OurCenter />
      <Suspense>
        <Youtube />
        <Instagram />
        <Owner />
        <Footer />
      </Suspense>
      <FloatingWhatsApp phoneNumber="+91-7892650335" accountName="Thirty40" />
      <ScrollRestoration />
    </>
  )
}

export default V1