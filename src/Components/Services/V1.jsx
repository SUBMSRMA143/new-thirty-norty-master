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
      <NavBar page={"Tennis Academies"} />
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
      <FloatingWhatsApp />
      <ScrollRestoration />
    </>
  )
}

export default V1