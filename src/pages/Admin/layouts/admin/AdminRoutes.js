import { Route, Router, Routes, Navigate } from "react-router-dom";
import MainDashboard from "../../views/admin/default";
import NFTMarketplace from "../../views/admin/marketplace";
import Profile from "../../views/admin/profile";
import DataTables from "../../views/admin/dataTables";
import RTL from "../../views/admin/rtl";
import Eventmanagement from "../../views/admin/eventManagement"
import EventApproval from "../../views/admin/eventApprove"
import EventPayment from "../../views/admin/eventPayment"
import ContentPayment from "../../views/admin/ContentPayment"
import ContentManagement from "../../views/admin/contentManagement"
import ContentApproval from "../../views/admin/contentApprove"
import UpdateEvent from "../../views/admin/eventManagement/components/UpdateEvent";
import UpdateContent from "../../views/admin/contentManagement/components/UpdateContent";
import PaymentWithdraw from "../../views/admin/PaymentWithdraw"
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
        <Route path="/admin/approve_event" element={<EventApproval />} />
        <Route path="/update_event" element={<UpdateEvent />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/approve_content" element={<ContentApproval />} />
        <Route path="/admin/payment_content" element={<ContentPayment />} />
        <Route path="/admin/payment_event" element={<EventPayment />} />
        <Route path="/admin/payment_withdraw" element={<PaymentWithdraw />} />
        <Route path="/update_content" element={<UpdateContent />} />
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
