import React from 'react'
import './OurUni.css'

const images = [
    { key: 1, addr: "/img/cli1.png" },
    { key: 2, addr: "/img/cli2.jpg" },
    { key: 3, addr: "/img/cli3.png" },
    { key: 4, addr: "/img/cli4.png" },
    { key: 5, addr: "/img/cli5.png" },
    { key: 6, addr: "/img/cli6.png" },
    { key: 7, addr: "/img/cli7.jpg" },
    { key: 8, addr: "/img/cli8.png" },
    { key: 9, addr: "/img/cli9.png" },
    { key: 10, addr: "/img/cli10.jpg" },
    { key: 11, addr: "/img/cli11.jpg" },
];

const AllUni = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div
                    className="border-start border-5 border-primary ps-5 mb-5"
                    style={{ maxWidth: 600 + "px" }}
                >
                    <h6 className="text-primary text-uppercase">Services</h6>
                    <h1 className="display-5 text-uppercase mb-0">
                        Our Overseas Academies Partners
                    </h1>
                </div>
                <div className="row g-lg-3 g-2">
                    {images.map((e) => (
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="client-logo education-logo">
                                <img src={e.addr} key={e.key} className="img-fluid" alt="sponsors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllUni
