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
import ContentPaymentWithdraw from "../../views/admin/ContentPaymentWithdraw"
const AdminRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
        <Route path="/" element={<MainDashboard />} />
        <Route path="/administrator/default" element={<MainDashboard />} />
        <Route path="/administrator/nft-marketplace" element={<NFTMarketplace />} />
        <Route path="/administrator/event" element={<Eventmanagement />} />
        <Route path="/administrator/approve_event" element={<EventApproval />} />
        <Route path="/update_event" element={<UpdateEvent />} />
        <Route path="/administrator/content" element={<ContentManagement />} />
        <Route path="/administrator/approve_content" element={<ContentApproval />} />
        <Route path="/administrator/payment_content" element={<ContentPayment />} />
        <Route path="/administrator/payment_event" element={<EventPayment />} />
        <Route path="/administrator/payment_withdraw" element={<PaymentWithdraw />} />
        <Route path="/administrator/payment_content_withdraw" element={<ContentPaymentWithdraw />} />
        <Route path="/update_content" element={<UpdateContent />} />
        <Route path="/administrator/data-tables" element={<DataTables />} />
        <Route path="/administrator/profile" element={<Profile />} />
        <Route path="/administrator/data-tables" element={<DataTables />} />
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
