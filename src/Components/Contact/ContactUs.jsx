import React from "react";
import Footer from "../Footer/Footer";
import CC1 from "./CC1";
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import NavBar from "../NavBar/NavBar";

const ContactUs = () => {
  return (
    <div>
      <NavBar page={"contact"} />
      <div className="p-5"></div>
      <CC1 />
      <Footer />
      <FloatingWhatsApp phoneNumber="+91-7892650335" accountName="Thirty40" />
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
