import "./categories.css";
// import cat_card from "../../assets/img/cat_card.svg";
import img1 from "../../assets/img/categories/img1.png";
import img2 from "../../assets/img/categories/img2.png";
import img3 from "../../assets/img/categories/img3.png";
import img4 from "../../assets/img/categories/img4.png";
import img5 from "../../assets/img/categories/img5.png";
import img6 from "../../assets/img/categories/img6.png";
import img7 from "../../assets/img/categories/img7.png";
import img8 from "../../assets/img/categories/img8.png";
import img9 from "../../assets/img/categories/img9.png";

const Categories = ({ line }) => {
  return (
    <>
      {/* <h1 className="category-text">{line}</h1> */}

      <h2 className="cat-mobile-text">{line}</h2>

      {/* Category cards */}
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="box1">
          <div className="row category-row">
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow1 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img1})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Comedy Shows
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow2 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img2})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Sports Events
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row category-row">
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow2 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img3})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Food Fest
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
                {/* <div className="cat-img">
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "100%", height: "auto%" }}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow1 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img4})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Concerts
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
                {/* <div className="cat-img">
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "100%", height: "auto%" }}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="row category-row">
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow1 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img5})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light"
                    style={{ fontWeight: "bold" }}
                  >
                    Expo, Conventions, Exibitions
                  </h1>
                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow2 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img6})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Motivational Events
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row category-row">
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow2 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img7})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Reality Shows
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 category-card1">
              <div
                className="card-service wow1 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img8})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-5"
                    style={{ fontWeight: "bold" }}
                  >
                    Promo Events
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row category-row">
            <div className="col-sm-12 category-card1">
              <div
                className="card-service wow3 fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="body cat-card-body"
                  style={{ backgroundImage: `url(${img9})`, textAlign: "left" }}
                >
                  <h1
                    className="category-heading text-light mt-2"
                    style={{ fontWeight: "bold" }}
                  >
                    Other Events
                  </h1>

                  <p
                    className="category-para text-light"
                    style={{ textAlign: "left" }}
                  >
                    Sponser Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
