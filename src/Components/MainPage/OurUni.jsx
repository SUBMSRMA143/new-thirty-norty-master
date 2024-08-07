import React from 'react'
import cli1 from '/img/cli1.webp'
// import cli1 from '../../../public/img/cli1.webp'
import cli2 from '/img/cli2.webp'
// import cli2 from '../../../public/img/cli2.webp'
import './OurUni.css'

const OurUni = () => {

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
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="client-logo education-logo">
                            <img src={cli1} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="client-logo education-logo">
                            <img src={cli2} className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default OurUni
