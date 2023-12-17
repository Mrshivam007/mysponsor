import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CategoryPage,
  Home,
  ListEvents,
  Login,
  MyEventDetails,
  MyEvents,
  PaymentGateway,
  Signup,
  SponsorChoice,
  SponsorContentC,
  SponsorEvents,
} from "../pages/LandingPage";
import { useSelector } from "react-redux";
import EventRoutes from "./event";
import ContentRoutes from "./content";
import ContentDetails from "../pages/LandingPage/Desktop_Sponsor_CC/ContentDetails";
import SponsorLogin from "../pages/SponsorRegister/SponsorLogin";
import SponsorRegister from "../pages/SponsorRegister/SponsorRegister";
import SponsorRoutes from "./sponsor";

const Main = () => {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);
  return (
    <>
      {userDetails ? (
        <>
          <Router>
            {userDetails.user_type === "Event" ? (
              <EventRoutes />
            ) : userDetails.user_type === "Content" ? (
              <ContentRoutes />
            ) : userDetails.user_type === "Sponsor" ? (
              <SponsorRoutes />
            ) : userDetails.user_type === "Admin" ? (
              <SponsorRoutes />
              // <ContentRoutes />
            ) : null}
          </Router>
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<SponsorEvents />} />
            <Route path="/cc" element={<SponsorContentC />} />
            <Route path="/mycontent-details" element={<ContentDetails />} />
            <Route path="/choice" element={<SponsorChoice />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/myevent-details" element={<MyEventDetails />} />
            <Route path="/listevents" element={<ListEvents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sponsor_login" element={<SponsorLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sponsor_register" element={<SponsorRegister />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default Main;
