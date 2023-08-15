import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainPage} from "./pages/index.jsx";
import AboutPage from "./pages/about.jsx";
import PricingPage from "./pages/pricing.jsx";
import OfficePage from "./pages/office.jsx";
import SpacesPage from "./pages/spaces.jsx";
import ContactUsPage from "./pages/contact-us.jsx";
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "offices",
        element: <OfficePage />,
      },
      {
        path: "office",
        element: <OfficePage />,
      },
      {
        path: "spaces",
        element: <SpacesPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
