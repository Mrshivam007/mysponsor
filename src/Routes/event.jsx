import { Route, Router, Routes, Navigate } from "react-router-dom";
import { Home, ListEvents } from "../pages";

const EventRoutes = () => {
    console.log("Event Page");
    return (
        <>
            <Routes>
                <Route path="/" element={<ListEvents />} />
                <Route path="/login" element={<Navigate to={"/"} />} />
                <Route path="/signup" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default EventRoutes;