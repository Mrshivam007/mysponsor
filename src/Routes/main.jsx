import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Desktop_Home/Home";
import SponsorEvents from "../pages/Desktop_Sponser_Events/SponsorEvents";
import SponsorContentC from "../pages/Desktop_Sponsor_CC/SponsorContentC";
import SponsorChoice from "../pages/Desktop_Sponsor_Choice/SponsorChoice";
import CategoryPage from "../pages/Desktop_Categories/CategoryPage";
import PaymentGateway from "../pages/Desktop_Sponsor_Payment/PaymentGateway";
import Login from "../pages/Register/Login";
import Signup from "../pages/Register/Signup";
const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<SponsorEvents />} />
          <Route path="/cc" element={<SponsorContentC />} />
          <Route path="/choice" element={<SponsorChoice />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/payment" element={<PaymentGateway />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
