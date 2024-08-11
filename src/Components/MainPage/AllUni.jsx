import React from 'react'
import './OurUni.css'

const images = [
    { key: 1, addr: "/img/cli1.webp" },
    { key: 2, addr: "/img/cli2.webp" },
    { key: 3, addr: "/img/cli3.webp" },
    { key: 4, addr: "/img/cli4.webp" },
    { key: 5, addr: "/img/cli5.webp" },
    { key: 6, addr: "/img/cli6.webp" },
    { key: 7, addr: "/img/cli7.webp" },
    { key: 8, addr: "/img/cli8.webp" },
    { key: 9, addr: "/img/cli9.webp" },
    { key: 10, addr: "/img/cli10.webp" },
    { key: 11, addr: "/img/cli11.webp" },
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
