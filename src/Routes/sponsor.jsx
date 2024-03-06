import { Route, Router, Routes, Navigate } from "react-router-dom";
import ListeventsForm from "../pages/Event/Create_Event/ListeventsForm";
import LiveEvent from "../pages/Event/EventCategories/LiveEvent";
import UpcomingEvent from "../pages/Event/EventCategories/UpcomingEvent";
import PreviousEvent from "../pages/Event/EventCategories/PreviousEvent";
import UpdateEvent from "../pages/Event/Update_Event/UpdateEventForm";
import Update_UpcomingEvent from "../pages/Event/Update_Event/Update_UpcomingEvent";
import DeleteEvent from "../pages/Event/DeleteEvent/DeleteEvent";
import {
  ContentDetails,
  EventDetails,
  FacebookContentSponsor,
  Favourite,
  InstagramContentSponsor,
  SponsorCategoryPage,
  SponsorChoice,
  SponsorContent,
  SponsorContentForm,
  SponsorEventForm,
  SponsorEvents,
  SponsorHome,
  SponsorPayment,
  SponsorProfile,
  SponsoredContent,
  SponsoredContentDetails,
  SponsoredEvent,
  SponsoredEventDetails,
  YoutubeContentSponsor,
} from "../pages/Sponsor";
import SponsorContentPayment from "../pages/Sponsor/SponsorPayment/SponsorContentPayment";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ChatManage from "../components/ChatComponent/ChatManage";
import { Footer, NavBar } from "../components";
import EventCategoryCard from "../components/Categories/EventCategoryCard";
import SponsorFooter from "../components/Footer/SponsorFooter";
// import Success from "../components/Toast/Success";
import SuccessToast from "../components/Toast/Success";
import { Confirmation } from "../pages/Sponsor/SponsorPayment/Confirmation";
import ErrorBoundary from "./ErrorBoundary";
import { ContentConfirmation } from "../pages/Sponsor/SponsorPayment/ContentConfirmation";
const SponsorRoutes = () => {
  return (
    <>
      <NavBar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<SponsorHome />} />
          <Route path="/choice" element={<SponsorChoice />} />
          <Route path="/events" element={<SponsorEvents />} />
          <Route path="/sponsored_event" element={<SponsoredEvent />} />
          <Route path="/sponsored_content" element={<SponsoredContent />} />
          <Route
            path="/sponsored_event_details"
            element={<SponsoredEventDetails />}
          />
          <Route
            path="/sponsored_content_details"
            element={<SponsoredContentDetails />}
          />
          <Route path="/cc" element={<SponsorContent />} />
          <Route path="/youtube" element={<YoutubeContentSponsor />} />
          <Route path="/instagram" element={<InstagramContentSponsor />} />
          <Route path="/facebook" element={<FacebookContentSponsor />} />
          <Route path="/sponsor_eventForm" element={<SponsorEventForm />} />
          <Route path="/sponsor_contentForm" element={<SponsorContentForm />} />
          <Route path="/eventCategory/:category" element={<EventCategoryCard />} />
          <Route path="/mycontent-details" element={<ContentDetails />} />
          <Route path="/myevent-details" element={<EventDetails />} />
          <Route path="/categories" element={<SponsorCategoryPage />} />
          <Route path="/events/live_event" element={<LiveEvent />} />
          <Route path="/events/upcoming_event" element={<UpcomingEvent />} />
          <Route path="/events/previous_event" element={<PreviousEvent />} />
          <Route path="/create_event" element={<ListeventsForm />} />
          {/* <Route path="/chat" element={<ChatManage />} /> */}
          {/* <Route path="/toast" element={<SuccessToast />} /> */}
          <Route
            path="/update_UpcomingEvent"
            element={<Update_UpcomingEvent />}
          />
          <Route path="/update_event" element={<UpdateEvent />} />
          <Route path="/delete_event" element={<DeleteEvent />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/profile" element={<SponsorProfile />} />
          <Route path="/sponsor_payment" element={<SponsorPayment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/content_confirmation" element={<ContentConfirmation />} />
          <Route path="/sponsor_content_payment" element={<SponsorContentPayment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Navigate to={"/"} />} />
          <Route path="/sponsor_login" element={<Navigate to={"/"} />} />
          <Route path="/signup" element={<Navigate to={"/"} />} />
        </Routes>
      </ErrorBoundary>
      <SponsorFooter />
    </>
  );
};

export default SponsorRoutes;
