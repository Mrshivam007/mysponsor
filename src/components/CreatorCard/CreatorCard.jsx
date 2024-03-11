import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import creator from "../../assets/img/card/mobile-cards.jpg";
import { Link, useNavigate } from "react-router-dom";
// import apiurl from "../../../constant/config";
const CreatorCard = ({ line }) => {
  //   console.log(cardData);
    const navigate = useNavigate();

  const handleCreatorClick = () => {
    navigate("/creator-profile");
  };

  //   const [showAllCards, setShowAllCards] = useState(false);
  //   const visibleCards = cardData
  //     ? showAllCards
  //       ? cardData
  //       : cardData.slice(0, 4)
  //     : [];

  return (
    <>
      {/* Content Creator Layer */}

      <h1 className="sponsor-text">{line}</h1>

      <h2 className="sponsor-mobile-text">{line}</h2>

      <div
        className="sponsor-second-container container"
        style={{ marginTop: "4rem" }}
      >
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3 cc-card-col">
            <div className="card h-auto">
              <div
                className="row g-0"
                style={{ width: "auto", height: "100%" }}
              >
                <div className="col-4 col-md-5 col-sm-4 cc-img-container d-flex">
                  <img
                    src={creator}
                    className="img-fluid rounded-start cc-img"
                    alt=""
                  />
                </div>
                <div className="col-6 col-md-5 col-sm-6 px-lg-0 d-flex align-items-center">
                  <div className="card-body cc-card-body">
                    <h5 className="card-title font-weight-bold d-inline">
                      Mr. Beast
                    </h5>
                    <span className="card-text">Platform: Youtube</span>
                    <span className="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; 100k
                    </span>
                    <p className="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; 1M
                    </p>
                  </div>
                </div>
                <div className="col-2 col-md-2 col-sm-2 pl-lg-0 pr-0">
                  <button
                    className="btn btn-primary btn-block"
                    style={{
                      height: "100%",
                      borderRadius: "0px 18px 18px 0px",
                      backgroundColor: "#004EA9",
                    }}
                    onClick={handleCreatorClick}
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorCard;
