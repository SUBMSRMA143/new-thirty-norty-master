import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import herop1 from "/img/bgt40.webp"
import herop2 from "/img/hero5.webp"
import herop3 from "/img/hero3.webp"

import { EffectFade, Navigation, Autoplay } from "swiper/modules";

import "./Carousel.css";
const Carousel = () => {
  return (
    <Swiper
      direction={"horizontal"}
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectFade, Navigation, Autoplay]}
      className="mySwiper"
    >
      {/* <SwiperSlide>
        <div className="hero-page-img-5"></div>
      </SwiperSlide> */}
      <SwiperSlide>
        <img src={herop1} className="hero-page-img-3" />
        {/* <div className="hero-page-img-3"></div> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src={herop2} className="hero-page-img-2" />
        {/* <div className="hero-page-img-2"></div> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src={herop3} className="hero-page-img-1" />
        {/* <div className="hero-page-img-1"></div> */}
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
