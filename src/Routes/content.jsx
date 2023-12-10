import { Route, Router, Routes, Navigate } from "react-router-dom";
import CCHome from "../pages/ContentCreator/Home/CCHome";
import CCForm from "../pages/ContentCreator/ListContent/CCForm";
import YourContent from "../pages/ContentCreator/YourContent/YourContent";
import ListedContents from "../pages/ContentCreator/ListedContents/ListedContents";
import ContentDetails from "../pages/ContentCreator/ContentDetails/ContentDetails";

const ContentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CCHome />} />
        <Route path="/create_content" element={<CCForm />} />
        <Route path="/your_event" element={<YourContent />} />
        <Route path="/listed_content" element={<ListedContents />} />
        <Route
          path="/listed_content/content_details"
          element={<ContentDetails />}
        />
        <Route path="/login" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default ContentRoutes;
