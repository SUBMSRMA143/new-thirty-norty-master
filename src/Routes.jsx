import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Countries from "./Components/countries/Countries";
// import EnquireNow from "./Components/EnquireNow/EnquireNow";
import PlaceEnquire from "./Components/EnquireNow/PlaceEnquire";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import ContactUs from "./Components/Contact/ContactUs";
import ServicesPage from "./Components/Services/ServicesPage";
// import USA from "./Components/countries/USA";
// import Europe from "./Components/countries/Europe";
// import India from "./Components/countries/India";
import V1 from "./Components/Services/V1";
import V2 from "./Components/Services/V2";
import V3 from "./Components/Services/V3";
import V4 from "./Components/Services/V4";
import V5 from "./Components/Services/V5";
import V6 from "./Components/Services/V6";
import TAC from "./Components/T&C/TAC";
// const Countries = lazy(() => import("./Components/countries/Countries"));
const EnquireNow = lazy(() => import("./Components/EnquireNow/EnquireNow"));
// const PlaceEnquire = lazy(() => import("./Components/EnquireNow/PlaceEnquire"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
// const ServicesPage = lazy(() => import("./Components/Services/ServicesPage"));
const USA = lazy(() => import("./Components/countries/USA"));
const Europe = lazy(() => import("./Components/countries/Europe"));
const India = lazy(() => import("./Components/countries/India"));
// const V1 = lazy(() => import("./Components/Services/V1"));
// const V2 = lazy(() => import("./Components/Services/V2"));
// const V3 = lazy(() => import("./Components/Services/V3"));
// const V4 = lazy(() => import("./Components/Services/V4"));
// const V5 = lazy(() => import("./Components/Services/V5"));
// const V6 = lazy(() => import("./Components/Services/V6"));
// const TAC = lazy(() => import("./Components/T&C/TAC"));
// import Global from "./Components/countries/Global";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",
    // element: <AboutUs />,
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
    // element: <ContactUs />,
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
    path: "/TandC",
    element: <TAC />,
  },

  //////////Blogs Pages//////////////////



  ////////////Countries Pages///////////////

  {
    path: "/USA",
    // element: <USA />,
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <USA />,
      </Suspense>
    )
  },
  {
    path: "/Europe",
    // element: <Europe />,
    element: (
      <Suspense fallback={<h3>Content Loading...</h3>}>
        <Europe />,
      </Suspense>
    )
  },
  {
    path: "/India",
    // element: <India />,
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/AboutUs",
//     element: (
//       <Suspense fallback={<h3
//       >Content Loading...</h3>}>
//         <AboutUs />,
//       </Suspense>
//     )
//   },
//   {
//     path: "/Services",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <ServicesPage />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/ContactUs",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <ContactUs />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/EnquireNow",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <EnquireNow />,
//       </Suspense>
//     )

//   },

//   {
//     path: "/EnquireNow/:id",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <PlaceEnquire />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/TandC",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <TAC />,
//       </Suspense>
//     )

//   },

//   //////////Blogs Pages//////////////////



//   ////////////Countries Pages///////////////

//   {
//     path: "/countries",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <Countries />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/USA",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <USA />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/Europe",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <Europe />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/India",
// element: (
//   <Suspense fallback={<h3>Content Loading...</h3>}>
//     <India />,
//   </Suspense>
// )

//   },
//   {
//     path: "/Global",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <Countries />,
//       </Suspense>
//     )

//   },
//   ////////////Services Pages///////////////

//   {
//     path: "/services/Join-Our-Academy",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V1 />,
//       </Suspense>
//     )

//   },

//   {
//     path: "/services/Register-For-Tennis-and-Education",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V2 />,
//       </Suspense>
//     )

//   },

//   {
//     path: "/services/Scholarship-in-USA-and-Europe",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V3 />,
//       </Suspense>
//     )

//   },

//   {
//     path: "/services/Tennis-Camp-in-Spain",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V4 />,
//       </Suspense>
//     )

//   },

//   {
//     path: "/services/Career-Counseling",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V5 />,
//       </Suspense>
//     )

//   },
//   {
//     path: "/services/Book-a-course",
//     element: (
//       <Suspense fallback={<h3>Content Loading...</h3>}>
//         <V6 />,
//       </Suspense>
//     )

//   },
// ]);


export default router;
