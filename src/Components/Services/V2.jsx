import React from 'react'
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import EnquirePageForm from '../EnquireNow/EnquirePageForm';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';


const V2 = () => {
  return (
    <div>
      <NavBar page={"Register-For-Tennis-and-Education"} />
      <EnquirePageForm campus={"spain"} />
      <Footer />
      <FloatingWhatsApp phoneNumber="+91-7892650335" accountName="Thirty40" />
      <ScrollRestoration />
    </div>
  )
}

export default V2