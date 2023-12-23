import { Route, Router, Routes, Navigate } from "react-router-dom";
import { SponsorContentC } from "../pages/LandingPage";
import ListeventsForm from "../pages/Event/Create_Event/ListeventsForm";
import EventHome from "../pages/Event/Home/EventHome";
import EventCategories from "../pages/Event/EventCategories/EventCategories";
import LiveEvent from "../pages/Event/EventCategories/LiveEvent";
import UpcomingEvent from "../pages/Event/EventCategories/UpcomingEvent";
import PreviousEvent from "../pages/Event/EventCategories/PreviousEvent";
import SponsoredEvent from "../pages/Sponsor/SponsorEvent/SponsoredEvent";
import EventDetails from "../pages/Sponsor/SponsorEvent/EventDetails";
import UpdateEvent from "../pages/Event/Update_Event/UpdateEventForm";
import Update_UpcomingEvent from "../pages/Event/Update_Event/Update_UpcomingEvent";
import DeleteEvent from "../pages/Event/DeleteEvent/DeleteEvent";
import SponsorHome from "../pages/Sponsor/SponsorHome/SponsorHome";
import SponsorChoice from "../pages/Sponsor/SponsorChoice/SponsorChoice";
import SponsorEvents from "../pages/Sponsor/SponsorEvent/SponsorEvent";
import SponsorContent from "../pages/Sponsor/SponsorContent/SponsorContent";
import ContentDetails from "../pages/Sponsor/SponsorContent/ContentDetails";
import SponsorCategoryPage from "../pages/Sponsor/SponsorCategorie/SponsorCategories";
import SponsorEventForm from "../pages/Sponsor/SponsorEvent/SponsorEventForm";
import SponsoredEventDetails from "../pages/Sponsor/SponsorEvent/SponsoredEventDetails";
import SponsorContentForm from "../pages/Sponsor/SponsorContent/SponsorContentForm";
import SponsoredContent from "../pages/Sponsor/SponsorContent/SponsoredContent";
import SponsoredContentDetails from "../pages/Sponsor/SponsorContent/SponsoredContentDetails";
const SponsorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SponsorHome />} />
        <Route path="/choice" element={<SponsorChoice />} />
        <Route path="/events" element={<SponsorEvents />} />
        <Route path="/sponsored_event" element={<SponsoredEvent />} />
        <Route path="/sponsored_content" element={<SponsoredContent />} />
        <Route path="/sponsored_event_details" element={<SponsoredEventDetails />} />
        <Route path="/sponsored_content_details" element={<SponsoredContentDetails />} />
        <Route path="/cc" element={<SponsorContent />} />
        <Route path="/sponsor_eventForm" element={<SponsorEventForm />} />
        <Route path="/sponsor_contentForm" element={<SponsorContentForm />} />
        <Route path="/mycontent-details" element={<ContentDetails />} />
        <Route path="/myevent-details" element={<EventDetails />} />
        <Route path="/categories" element={<SponsorCategoryPage />} />
        <Route path="/events/live_event" element={<LiveEvent />} />
        <Route path="/events/upcoming_event" element={<UpcomingEvent />} />
        <Route path="/events/previous_event" element={<PreviousEvent />} />
        <Route path="/create_event" element={<ListeventsForm />} />
        <Route
          path="/update_UpcomingEvent"
          element={<Update_UpcomingEvent />}
        />
        <Route path="/update_event" element={<UpdateEvent />} />
        <Route path="/delete_event" element={<DeleteEvent />} />
        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default SponsorRoutes;
