import { Route, Router, Routes, Navigate } from "react-router-dom";
import CCHome from "../pages/ContentCreator/Home/CCHome";
import CCForm from "../pages/ContentCreator/ListContent/CCForm";
import YourContent from "../pages/ContentCreator/YourContent/YourContent";
import ListedContents from "../pages/ContentCreator/ListedContents/ListedContents";
import ContentDetails from "../pages/ContentCreator/ContentDetails/ContentDetails";
import SponsoredContent from "../pages/ContentCreator/YourContent/SponsoredContent";
import ContentCategories from "../pages/ContentCreator/ContentCategories/ContentCategories";
import LiveContent from "../pages/ContentCreator/ContentCategories/LiveContent";
import Update_UpcomingContent from "../pages/ContentCreator/Update_Content/Update_UpcomingContent";
import UpdateContent from "../pages/ContentCreator/Update_Content/UpdateContentForm";
import DeleteContent from "../pages/ContentCreator/DeleteContent/DeleteContent";

const ContentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CCHome />} />
        <Route path="/create_content" element={<CCForm />} />
        <Route path="/your_event" element={<YourContent />} />
        <Route path="/listed_content" element={<ListedContents />} />
        <Route path="/your_content" element={<ContentCategories />} />
        <Route path="/your_content/live_content" element={<LiveContent />} />
        <Route path="/your_content/upcoming_content" element={<LiveContent />} />
        <Route path="/your_content/previous_content" element={<LiveContent />} />
        <Route path="/mycontent-details" element={<ContentDetails />} />
        <Route path="/sponsored_contents" element={<SponsoredContent />} />
        <Route
          path="/listed_content/content_details"
          element={<ContentDetails />}
        />
        <Route
          path="/update_UpcomingContent"
          element={<Update_UpcomingContent />}
        />
        <Route path="/update_content" element={<UpdateContent />} />
        <Route path="/delete_content" element={<DeleteContent />} />

        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default ContentRoutes;
