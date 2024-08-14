import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
const Countries = lazy(() => import("./Components/countries/Countries"));
const EnquireNow = lazy(() => import("./Components/EnquireNow/EnquireNow"));
const PlaceEnquire = lazy(() => import("./Components/EnquireNow/PlaceEnquire"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
const ServicesPage = lazy(() => import("./Components/Services/ServicesPage"));
const USA = lazy(() => import("./Components/countries/USA"));
const Europe = lazy(() => import("./Components/countries/Europe"));
const India = lazy(() => import("./Components/countries/India"));
const V1 = lazy(() => import("./Components/Services/V1"));
const V2 = lazy(() => import("./Components/Services/V2"));
const V3 = lazy(() => import("./Components/Services/V3"));
const V4 = lazy(() => import("./Components/Services/V4"));
const V5 = lazy(() => import("./Components/Services/V5"));
const V6 = lazy(() => import("./Components/Services/V6"));
const TAC = lazy(() => import("./Components/T&C/TAC"));
// import Global from "./Components/countries/Global";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",
    element: (
      <Suspense fallback={<h3
      >Content Loading...</h3>}>
        <AboutUs />,
      </Suspense>
    )
  },
  {
    path: "/Services",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <ServicesPage />,
      </Suspense>
    )

  },
  {
    path: "/ContactUs",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <ContactUs />,
      </Suspense>
    )

  },
  {
    path: "/EnquireNow",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <EnquireNow />,
      </Suspense>
    )

  },

  {
    path: "/EnquireNow/:id",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <PlaceEnquire />,
      </Suspense>
    )

  },
  {
    path: "/TandC",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <TAC />,
      </Suspense>
    )

  },

  //////////Blogs Pages//////////////////



  ////////////Countries Pages///////////////

  {
    path: "/countries",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <Countries />,
      </Suspense>
    )

  },
  {
    path: "/USA",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <USA />,
      </Suspense>
    )

  },
  {
    path: "/Europe",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <Europe />,
      </Suspense>
    )

  },
  {
    path: "/India",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <India />,
      </Suspense>
    )

  },
  {
    path: "/Global",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <Countries />,
      </Suspense>
    )

  },
  ////////////Services Pages///////////////

  {
    path: "/services/Join-Our-Academy",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V1 />,
      </Suspense>
    )

  },

  {
    path: "/services/Register-For-Tennis-and-Education",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V2 />,
      </Suspense>
    )

  },

  {
    path: "/services/Scholarship-in-USA-and-Europe",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V3 />,
      </Suspense>
    )

  },

  {
    path: "/services/Tennis-Camp-in-Spain",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V4 />,
      </Suspense>
    )

  },

  {
    path: "/services/Career-Counseling",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V5 />,
      </Suspense>
    )

  },
  {
    path: "/services/Book-a-course",
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <V6 />,
      </Suspense>
    )

  },
]);


export default router;
