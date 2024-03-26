import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import {
  CategoryPage,
  FacebookContent,
  Home,
  InstagramContent,
  ListEvents,
  Login,
  MyEventDetails,
  MyEvents,
  PaymentGateway,
  Signup,
  SponsorChoice,
  SponsorContentC,
  SponsorEvents,
  YoutubeContent,
} from "../pages/LandingPage";
import { useSelector } from "react-redux";
import EventRoutes from "./event";
import ContentRoutes from "./content";
import ContentDetails from "../pages/LandingPage/Desktop_Sponsor_CC/ContentDetails";
import SponsorLogin from "../pages/SponsorRegister/SponsorLogin";
import SponsorRegister from "../pages/SponsorRegister/SponsorRegister";
import SponsorRoutes from "./sponsor";
import AdminLayout from "../pages/Admin/layouts/admin/index";
import { Footer, NavBar } from "../components";
import EventCategoryCard from "../components/Categories/EventCategoryCard";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorBoundary from "./ErrorBoundary";
import EventRegister from "../pages/EventRegister/EventRegister";
import ContentRegister from "../pages/ContentRegister/ContentRegister";
import ContentCreatorProfile from "../components/ContentCreatorProfile/ContentCreatorProfile";
// import Panoramic from "../components/Panoramic/Panoramic";

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
              // <App />
              // <AdminRoutes />
              <AdminLayout />
            ) : // <ContentRoutes />
            null}
          </Router>
        </>
      ) : (
        <Router>
          <NavBar />
          {/* <ErrorBoundary> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<SponsorEvents />} />
            <Route path="/cc" element={<SponsorContentC />} />
            <Route path="/youtube" element={<YoutubeContent />} />
            <Route path="/instagram" element={<InstagramContent />} />
            <Route path="/facebook" element={<FacebookContent />} />
            <Route path="/mycontent-details" element={<ContentDetails />} />
            <Route path="/choice" element={<SponsorChoice />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route
              path="/eventCategory/:category"
              element={<EventCategoryCard />}
            />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/myevent-details" element={<MyEventDetails />} />
            <Route path="/listevents" element={<ListEvents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sponsor_login" element={<SponsorLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sponsor_register" element={<SponsorRegister />} />
            <Route path="/event_register" element={<EventRegister />} />
            <Route path="/content_register" element={<ContentRegister />} />
            <Route
              path="/creator-profile"
              element={<ContentCreatorProfile />}
            />
            {/* <Route path="/panoramic" element={<Panoramic />} /> */}
          </Routes>
          {/* </ErrorBoundary> */}
          <Footer />
        </Router>
      )}
    </>
  );
};

export default Main;
