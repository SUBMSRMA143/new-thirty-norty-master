import React from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import EnquirePageForm from "./EnquirePageForm";
import NavBar from "../NavBar/NavBar";

const PlaceEnquire = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  let place = currentUrl.split("/");
  place = place[2].toLowerCase();
  console.log(place);


  return (
    <div>
      <NavBar />
      <EnquirePageForm campus={place} />
      <Footer />
      <FloatingWhatsApp phoneNumber="+91-7892650335" accountName="Thirty40" />
      <ScrollRestoration />
    </div>
  );
};

export default PlaceEnquire;
