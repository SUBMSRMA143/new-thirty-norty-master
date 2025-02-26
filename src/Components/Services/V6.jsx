import React from 'react'
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import EnquirePageForm from '../EnquireNow/EnquirePageForm';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';


const V6 = () => {
    return (
        <div>
            <NavBar />
            <EnquirePageForm campus={"spain"} />
            <Footer />
            <FloatingWhatsApp phoneNumber="+91 96826 39541" accountName="Shubham Parashar" />
            <ScrollRestoration />
        </div>
    )
}

export default V6