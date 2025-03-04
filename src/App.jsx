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
  // const [data, setData] = useState([]);
  const [isLargeData, setIsLargeData] = useState(false);
  const [display, setDisplay] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cgc-seller-server.vercel.app/api/products");
        const result = await response.json();
        // setData(result);
        setIsLargeData(result.length > 5);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();


    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2000);

    return () => clearTimeout(timer);
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
      {isLargeData ? <div style={{ height: "100vh", backgroundColor: "white" }}></div> : <HeroPage />}
      {isLargeData ? <div style={{ height: "100vh", backgroundColor: "white" }}></div> : <Services />}
      {isLargeData ? <div style={{ height: "100vh", backgroundColor: "white" }}></div> : <OurCenter />}
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
      <FloatingWhatsApp phoneNumber="+91-7892650335" accountName="Thirty40" />
    </>
  );
};

export default App;
