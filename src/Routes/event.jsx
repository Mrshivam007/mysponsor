import { Route, Router, Routes, Navigate } from "react-router-dom";
import { Home, ListEvents, MyEventDetails, SponsorContentC, SponsorEvents } from "../pages";
import ListeventsForm from "../pages/Create_Event/ListeventsForm";
import CCForm from "../pages/Create_Content/CCForm";

const EventRoutes = () => {
    console.log("Event Page");
    return (
        <>
            <Routes>
                <Route path="/" element={<ListEvents />} />
                <Route path="/events" element={<SponsorEvents />} />
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