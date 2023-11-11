import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Desktop_Home/Home";
import SponsorEvents from "../pages/Desktop_Sponser_Events/SponsorEvents";
import SponsorContentC from "../pages/Desktop_Sponsor_CC/SponsorContentC";
import SponsorChoice from "../pages/Desktop_Sponsor_Choice/SponsorChoice";
const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<SponsorEvents />} />
          <Route path="/cc" element={<SponsorContentC />} />
          <Route path="/choice" element={<SponsorChoice />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
