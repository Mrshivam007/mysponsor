import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../../pages/Admin/layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../../pages/Admin/views/Starter.js"));
const About = lazy(() => import("../../pages/Admin/views/About.js"));
const Alerts = lazy(() => import("../../pages/Admin/views/ui/Alerts"));
const Badges = lazy(() => import("../../pages/Admin/views/ui/Badges"));
const Buttons = lazy(() => import("../../pages/Admin/views/ui/Buttons"));
const Cards = lazy(() => import("../../pages/Admin/views/ui/Cards"));
const Grid = lazy(() => import("../../pages/Admin/views/ui/Grid"));
const Tables = lazy(() => import("../../pages/Admin/views/ui/Tables"));
const Forms = lazy(() => import("../../pages/Admin/views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../../pages/Admin/views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
