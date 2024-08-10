import React, { lazy, Suspense } from "react";
import ServicesComp from "./ServicesComp";

const list = [
  { id: 1, linkdesc: "Join-Our-Academy", name: "Join Our Academy" },
  { id: 2, linkdesc: "Register-For-Tennis-&-Education", name: "Register For Tennis & Education" },
  { id: 3, linkdesc: "Scholarship-in-USA-&-Europe", name: "Scholarship in USA & Europe" },
  { id: 4, linkdesc: "Tennis-Camp-in-Spain", name: "Tennis Camp in Spain" },
  { id: 5, linkdesc: "Career-Counseling", name: "Career Counseling" },
  { id: 6, linkdesc: "Book-a-course", name: "Book a course" },
];

// const ServicesComp = lazy(() => import("./ServicesComp"));

const Services = () => {
  return (
    <div id="2" className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Services</h6>
          <h2 className="display-5 text-uppercase mb-0">
            Our Excellent Tennis Services
          </h2>
        </div>
        <div className="row" style={{ rowGap: "30px" }}>
          {list.map((e) => (
            <ServicesComp key={e.id} id={e.id} linkdesc={e.linkdesc} name={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
