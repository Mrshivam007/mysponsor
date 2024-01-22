import { Route, Router, Routes, Navigate } from "react-router-dom";
import MainDashboard from "../../views/admin/default";
import NFTMarketplace from "../../views/admin/marketplace";
import Profile from "../../views/admin/profile";
import DataTables from "../../views/admin/dataTables";
import RTL from "../../views/admin/rtl";
import Eventmanagement from "../../views/admin/eventManagement"
import ContentManagement from "../../views/admin/contentManagement"
const AdminRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
        <Route path="/" element={<MainDashboard />} />
        <Route path="/admin/default" element={<MainDashboard />} />
        <Route path="/admin/nft-marketplace" element={<NFTMarketplace />} />
        <Route path="/admin/event" element={<Eventmanagement />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/data-tables" element={<DataTables />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/data-tables" element={<DataTables />} />
        <Route path="/rtl/rtl-default" element={<RTL />} />
        {/* <Route path="/events" element={<EventCategories />} />
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
        <Route path="/profile" element={<EventProfile />} />
        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  );
};

export default AdminRoutes;