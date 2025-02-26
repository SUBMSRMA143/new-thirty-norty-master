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
      <div className="p-3"></div>
      <CC1 />
      <Footer />
      <FloatingWhatsApp phoneNumber="+91 96826 39541" accountName="Shubham Parashar" />
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
