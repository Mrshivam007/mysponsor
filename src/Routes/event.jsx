import { Route, Router, Routes, Navigate } from "react-router-dom";
import { SponsorContentC } from "../pages/LandingPage";
import {
  DeleteEvent,
  EventCategories,
  EventDetails,
  EventHome,
  ListeventsForm,
  LiveEvent,
  PreviousEvent,
  SponsoredEvent,
  SponsoredEventDetails,
  UpcomingEvent,
  UpdateEvent,
  Update_UpcomingEvent,
} from "../pages/Event";
import EventProfile from "../pages/Event/EventProfile/EventProfile";
import EventPayment from "../pages/Event/EventPayment/EventPayment";
import { Footer, NavBar } from "../components";
const EventRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<EventHome />} />
        <Route path="/events" element={<EventCategories />} />
        <Route path="/sponsored_events" element={<SponsoredEvent />} />
        <Route
          path="/sponsored_event_details"
          element={<SponsoredEventDetails />}
        />
        <Route path="/events/live_event" element={<LiveEvent />} />
        <Route path="/events/upcoming_event" element={<UpcomingEvent />} />
        <Route path="/events/previous_event" element={<PreviousEvent />} />
        <Route path="/myevent-details" element={<EventDetails />} />
        <Route path="/cc" element={<SponsorContentC />} />
        <Route path="/create_event" element={<ListeventsForm />} />
        <Route
          path="/update_UpcomingEvent"
          element={<Update_UpcomingEvent />}
        />
        <Route path="/update_event" element={<UpdateEvent />} />
        <Route path="/delete_event" element={<DeleteEvent />} />
        <Route path="/payment" element={<EventPayment />} />
        <Route path="/profile" element={<EventProfile />} />
        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default EventRoutes;
