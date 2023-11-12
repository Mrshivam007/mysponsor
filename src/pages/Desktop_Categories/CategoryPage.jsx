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
        <CatpageBox />
      </div>
      <Banner />
      <div className="container category-container">
        <SponserE cardData={EventsCards} />
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
