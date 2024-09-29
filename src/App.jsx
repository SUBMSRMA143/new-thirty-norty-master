import { Suspense, useEffect, useState, lazy } from "react";
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/MainPage/Services";
import SpecialOffer from "./Components/MainPage/SpecialOffer";
import OurCenter from "./Components/MainPage/OurCenter";
import HeroPage from "./Components/MainPage/HeroPage";
import OurUni from "./Components/MainPage/OurUni";
import { LoadingOutlined } from "@ant-design/icons"

const Model = lazy(() => import("./Components/Model/Model"));
const Testimonial = lazy(() => import("./Components/MainPage/Testimonial"));
const News = lazy(() => import("./Components/MainPage/News"));
const Youtube = lazy(() => import("./Components/MainPage/Youtube"));
const Instagram = lazy(() => import("./Components/MainPage/Instagram"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Owner = lazy(() => import("./Components/MainPage/Owner"));

const App = () => {
  const [display, setDisplay] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2000);
  }, []);

  const handlemouseover = () => {
    if (!shouldLoad) {
      setShouldLoad(true);
    }
  }
  return (
    <>
      {display &&
        (<Suspense>
          <Model />
        </Suspense>)}
      <NavBar />
      {/* <NavBar page={`${pageURL}`} /> */}
      <HeroPage />
      <Services />
      <OurCenter />
      <OurUni />
      <div className="pb-5"></div>
      <SpecialOffer />
      <div onMouseOver={handlemouseover}>
        <Suspense fallback={<h3
          className="text-primary"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            fontSize: "80px",
          }}
        ><LoadingOutlined /></h3>}>
          <Testimonial />
          {shouldLoad && <News />}
          {/* <News /> */}
          {/* <LatestBlogs /> */}
          {shouldLoad && <Youtube />}
          {shouldLoad && <Instagram />}
          <Owner />
        </Suspense>
      </div>
      <Footer />
      <ScrollRestoration />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
