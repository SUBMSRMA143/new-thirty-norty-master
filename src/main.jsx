import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import './index.css'
import { Helmet } from 'react-helmet';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@content": "https://schema.org",
            "@type": "Organization",
            "name": "Thirty40",
            "url": "https://new-thirty-forty-master.vercel.app/",
            "logo": "https://new-thirty-forty-master.vercel.app/assets/logo-CxDQB7Xr.png",
            "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-7892650335",
                  "email": "info@thirty40.in",
                  "areaServed": ["USA", "INDIA", "EUROPE"]
                  "contactType": "Customer Service",
          }`
        }
      </script>
    </Helmet>
  </React.StrictMode>,
)


// const rootElement = document.getElementById('root');

// const App = () => (
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// }
// else {
//   render(<App />, rootElement);
// }
