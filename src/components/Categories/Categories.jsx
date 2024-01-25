import "./categories.css";
// import cat_card from "../../assets/img/cat_card.svg";
import img1 from "../../assets/img/categories/img1.png";
import img2 from "../../assets/img/categories/img2.png";
import img3 from "../../assets/img/categories/img3.png";
import img4 from "../../assets/img/categories/img4.png";
import { Link } from "react-router-dom";

const Categories = ({ line }) => {
  return (
    <>
      <h1 className="category-text">{line}</h1>

      <h2 className="cat-mobile-text">{line}</h2>

      {/* Category cards */}
      <div className="container category-container">
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
              </div>
            </div>
          </div>

          <button className="category-btn btn" style={{ width: "100%" }}>
            <Link to="/categories">
              <p className="category-btn-text">Browse Categories</p>
            </Link>
          </button>
        </div>
      </div>

      {/* Category cards for mobile view*/}

      <div className="box1 cat-mob-view">
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
            </div>
          </div>
        </div>

        <button className="category-btn btn" style={{ width: "100%" }}>
          <Link to={"/categories"}>
            <p className="category-btn-text">Browse Categories</p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Categories;
