import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiurl from "../../../constant/config";

const EventMobile = ({ line, cardData }) => {

  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/myevent-details", { state: { eventData: data } });
  };
  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCards = cardData ? (showAllCards ? cardData : cardData.slice(0, 4)) : [];
  return (
    <>
      <h2 className="sponsor-mobile-text">{line}</h2>
      <div className="container sponsor-cards-mobile">
        <div className="row row-cols-2 g-0">
          {visibleCards.map((data) => (
            <div className="col py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img
                      src={data.thumbnail1}
                      alt=""
                      style={{ width: "100%" }}
                      className="sponser_card_img"
                    />
                    <div className="text-overlay">
                      <p className="text-lg font-weight-bold mb-0">
                        {data.title}
                      </p>
                      <p className="text-sm">{data.location}</p>
                    </div>
                  </div>
                  <button
                    className="btn text-lg text-white font-weight-bold"
                    style={{
                      width: "90%",
                      borderRadius: "0px 0px 10px 10px",
                      margin: "0% 0% 5% 5%",
                      backgroundColor: "#004EA9",
                    }}
                    onClick={() => handleSponsorClick(data)}
                  >
                    Sponsor
                  </button>
                </div>
              </div>
            </div>
          ))}
          {!showAllCards && cardData && cardData.length > 4 && (
            <div className="container d-flex justify-content-center" style={{ paddingBottom: '2vh' }}>
              <button
                className="btn btn-outline-primary mt-4"
                style={{
                  borderRadius: '15px',
                  border: '2px solid #004EA9',
                  background: '#FFF',
                  boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.18)',
                  fontWeight: 'bolder',
                  color: '#004EA9',
                }}
                onClick={() => setShowAllCards(true)}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventMobile;
