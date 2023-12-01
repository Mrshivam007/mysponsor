import { Route, Router, Routes, Navigate } from "react-router-dom";
import { Home, ListEvents, MyEventDetails, SponsorContentC, SponsorEvents } from "../pages";
import ListeventsForm from "../pages/Create_Event/ListeventsForm";
import CCForm from "../pages/Create_Content/CCForm";
import EventHome from "../pages/Event/Home/EventHome";
import EventCategories from "../pages/Event/EventCategories/EventCategories";
import LiveEvent from "../pages/Event/EventCategories/LiveEvent";
import UpcomingEvent from "../pages/Event/EventCategories/UpcomingEvent";
import PreviousEvent from "../pages/Event/EventCategories/PreviousEvent";

const EventRoutes = () => {
    console.log("Event Page");
    return (
        <>
            <Routes>
                <Route path="/" element={<EventHome />} />
                <Route path="/events" element={<EventCategories />} />
                <Route path="/events/live_event" element={<LiveEvent />} />
                <Route path="/events/upcoming_event" element={<UpcomingEvent />} />
                <Route path="/events/previous_event" element={<PreviousEvent />} />
                <Route path="/myevent-details" element={<MyEventDetails />} />
                <Route path="/cc" element={<SponsorContentC />} />
                <Route path="/create_event" element={<ListeventsForm />} />
                <Route path="/create_content" element={<CCForm />} />
                <Route path="/login" element={<Navigate to={"/"} />} />
                <Route path="/signup" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default EventRoutes;