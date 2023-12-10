// import { Route, Router, Routes, Navigate } from "react-router-dom";
// import {
//   Home,
//   ListEvents,
//   MyEventDetails,
//   MyEvents,
//   SponsorContentC,
//   SponsorEvents,
// } from "../pages";
// import ListeventsForm from "../pages/Event/Create_Event/ListeventsForm";
// import CCForm from "../pages/Create_Content/CCForm";
// import EventHome from "../pages/Event/Home/EventHome";
// import EventCategories from "../pages/Event/EventCategories/EventCategories";
// import LiveEvent from "../pages/Event/EventCategories/LiveEvent";
// import UpcomingEvent from "../pages/Event/EventCategories/UpcomingEvent";
// import PreviousEvent from "../pages/Event/EventCategories/PreviousEvent";
// import SponsoredEvent from "../pages/Event/YourEvent/SponsoredEvent";
// import EventDetails from "../pages/Event/EventDetails/EventDetails";
// import UpdateEvent from "../pages/Event/Update_Event/UpdateEventForm";
// import Update_UpcomingEvent from "../pages/Event/Update_Event/Update_UpcomingEvent";
// import DeleteEvent from "../pages/Event/DeleteEvent/DeleteEvent";

// const ContentRoutes = () => {
//   console.log("Event Page");
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<EventHome />} />
//         <Route path="/events" element={<EventCategories />} />
//         <Route path="/sponsored_events" element={<SponsoredEvent />} />
//         <Route path="/events/live_event" element={<LiveEvent />} />
//         <Route path="/events/upcoming_event" element={<UpcomingEvent />} />
//         <Route path="/events/previous_event" element={<PreviousEvent />} />
//         <Route path="/myevent-details" element={<EventDetails />} />
//         <Route path="/cc" element={<SponsorContentC />} />
//         <Route path="/create_event" element={<ListeventsForm />} />
//         <Route path="/update_UpcomingEvent" element={<Update_UpcomingEvent />} />
//         <Route path="/update_event" element={<UpdateEvent />} />
//         <Route path="/delete_event" element={<DeleteEvent />} />
//         <Route path="/create_content" element={<CCForm />} />
//         <Route path="/login" element={<Navigate to={"/"} />} />
//         <Route path="/signup" element={<Navigate to={"/"} />} />
//       </Routes>
//     </>
//   );
// };

// export default ContentRoutes;