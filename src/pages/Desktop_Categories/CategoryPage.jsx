import catlogo from "../../assets/img/category-bg-logo.png";
import bgimage from "../../assets/img/circle-bg.png";
import {
  NavBar,
  Footer,
  EventsHeader,
  CatpageBox,
  Banner,
  SponserE,
} from "../../components";
import { EventsCards } from "../../data/data";
import "./cat-page.css";

const CategoryPage = () => {
  return (
    <>
      <div
        className="events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        <EventsHeader title={"Categories"} logo={catlogo} />
        <CatpageBox line={"Categories"} />
      </div>
      <div className="cat-page-banner">
        <Banner />
      </div>
      <div className="container triangle-bg">
        <SponserE cardData={EventsCards} />
      </div>
      <div className="mobile-view mb-4">
        <SponserE cardData={EventsCards} />
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
