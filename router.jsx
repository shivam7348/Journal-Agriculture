import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./src/Pages/Home";
import AboutUs from "./src/Pages/AboutUs";
import ContactUs from "./src/Pages/ContactUs";
import EditorialBoard from "./src/Pages/EditorialBoard";
import GuideLine from "./src/Pages/GuideLine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "guideline",
      element: <GuideLine/>
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "editorailboard",
        element: <EditorialBoard />,
      },

    ],
  },
]);

export default router;
