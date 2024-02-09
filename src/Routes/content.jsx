import { Route, Router, Routes, Navigate } from "react-router-dom";
import {
  CCForm,
  CCHome,
  ContentCategories,
  ContentDetails,
  DeleteContent,
  ListedContents,
  LiveContent,
  PreviousContent,
  SponsoredContent,
  SponsoredContentDetails,
  UpcomingContent,
  UpdateContent,
  Update_UpcomingContent,
  YourContent,
} from "../pages/ContentCreator";
import ContentProfile from "../pages/ContentCreator/ContentProfile/ContentProfile";
import ContentNavBar from "../components/Navbar/ContentNavbar";
import ContentFooter from "../components/Footer/ContentFooter";
import ContentPayment from "../pages/ContentCreator/ContentPayment/ContentPayment";

const ContentRoutes = () => {
  return (
    <>
      <ContentNavBar />
      <Routes>
        <Route path="/" element={<CCHome />} />
        <Route path="/create_content" element={<CCForm />} />
        <Route path="/your_event" element={<YourContent />} />
        <Route path="/listed_content" element={<ListedContents />} />
        <Route path="/your_content" element={<ContentCategories />} />
        <Route path="/your_content/live_content" element={<LiveContent />} />
        <Route
          path="/your_content/upcoming_content"
          element={<UpcomingContent />}
        />
        <Route
          path="/your_content/previous_content"
          element={<PreviousContent />}
        />
        <Route path="/mycontent-details" element={<ContentDetails />} />
        <Route path="/sponsored_contents" element={<SponsoredContent />} />
        <Route
          path="/sponsored_content_details"
          element={<SponsoredContentDetails />}
        />
        <Route
          path="/listed_content/content_details"
          element={<ContentDetails />}
        />
        <Route
          path="/update_UpcomingContent"
          element={<Update_UpcomingContent />}
        />
        <Route path="/payment" element={<ContentPayment />} />
        <Route path="/update_content" element={<UpdateContent />} />
        <Route path="/delete_content" element={<DeleteContent />} />
        <Route path="/profile" element={<ContentProfile />} />
        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
      <ContentFooter />
    </>
  );
};

export default ContentRoutes;
