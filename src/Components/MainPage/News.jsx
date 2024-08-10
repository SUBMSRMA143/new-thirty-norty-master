import React from "react";
import sn1 from "/img/n1.webp";
import sn2 from "/img/n2.webp";
import sn3 from "/img/n3.webp";
import sn4 from "/img/n4.webp";
import sn5 from "/img/n5.webp";
import sn6 from "/img/n6.webp";
import sn7 from "/img/n7.webp";
import sn8 from "/img/n8.webp";
import sn9 from "/img/n9.webp";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OurCenter.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const News = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Our News</h6>
          <h2 className="display-5 text-uppercase mb-0">Latest News</h2>
        </div>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            700: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="myswiper3"
          style={{ height: "250px" }}
        >
          <SwiperSlide>
            <img alt="news" src={sn1} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn2} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn3} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn4} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn5} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn6} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn7} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="news" src={sn8} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
