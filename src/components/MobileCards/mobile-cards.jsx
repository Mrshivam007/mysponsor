import React from "react";
import "./mobile-cards.css";

const MobileCards = ({ cardData }) => {
  return (
    <>
      <div className="container sponsor-cards-mobile">
        <div className="row row-cols-2 g-0 my-5">
          {cardData &&
            cardData.map((data) => (
              <div key={data.id} className="col py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb">
                      <img
                        src={data.img}
                        alt=""
                        style={{ width: "100%" }}
                        className="sponser_card_img"
                      />
                      <div className="text-overlay">
                        <p className="text-lg font-weight-bold mb-0">
                          {data.name}
                        </p>
                        <p className="text-sm">{data.location}</p>
                      </div>
                    </div>
                    <button
                      className="btn text-lg text-white font-weight-bold"
                      style={{
                        width:"90%",
                        borderRadius: "0px 0px 10px 10px",
                        margin: "0% 0% 5% 5%",
                        backgroundColor:"#004EA9"
                      }}
                    >
                      Sponsor
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MobileCards;
