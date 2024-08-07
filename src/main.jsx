import React from 'react'
import { hydrate, render } from 'react-dom';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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
