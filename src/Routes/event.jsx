import { Route, Router, Routes } from "react-router-dom";
import { Home } from "../pages";

const EventRoutes = () => {
    console.log("Event Page");
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default EventRoutes;