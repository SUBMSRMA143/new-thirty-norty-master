import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Countries from "./Components/countries/Countries";
import PlaceEnquire from "./Components/EnquireNow/PlaceEnquire";
import ServicesPage from "./Components/Services/ServicesPage";
import V1 from "./Components/Services/V1";
import V2 from "./Components/Services/V2";
import V3 from "./Components/Services/V3";
import V4 from "./Components/Services/V4";
import V5 from "./Components/Services/V5";
import V6 from "./Components/Services/V6";
import TAC from "./Components/T&C/TAC";
const EnquireNow = lazy(() => import("./Components/EnquireNow/EnquireNow"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
const USA = lazy(() => import("./Components/countries/USA"));
const Europe = lazy(() => import("./Components/countries/Europe"));
const India = lazy(() => import("./Components/countries/India"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",

    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <AboutUs />,
      </Suspense>
    )
  },
  {
    path: "/Services",
    element: <ServicesPage />,
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
        <EnquireNow />
      </Suspense>
    ),
  },

  {
    path: "/EnquireNow/:id",
    element: <PlaceEnquire />,
  },
  {
    path: "/Terms-and-conditions",
    element: <TAC />,
  },

  //////////Blogs Pages//////////////////



  ////////////Countries Pages///////////////

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
    element: <Countries />,
  },
  ////////////Services Pages///////////////

  {
    path: "/services/Join-Our-Academy",
    element: <V1 />,
  },

  {
    path: "/services/Register-For-Tennis-and-Education",
    element: <V2 />,
  },

  {
    path: "/services/Scholarship-in-USA-and-Europe",
    element: <V3 />,
  },

  {
    path: "/services/Tennis-Camp-in-Spain",
    element: <V4 />,
  },

  {
    path: "/services/Career-Counseling",
    element: <V5 />,
  },
  {
    path: "/services/Book-a-course",
    element: <V6 />,
  },
]);

export default router;
