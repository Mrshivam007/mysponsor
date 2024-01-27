import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEvent, fetchEventbyId } from "../../../redux/actions/eventAction";
import apiurl from "../../../constant/config";

const EventMobileCard = ({ line, cardData }) => {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchEventbyId(userDetails.user_id))
  }, []);

  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/myevent-details", { state: { eventData: data } });
  };
  return (
    <>
      <h2 className="sponsor-mobile-text">{line}</h2>
      <div className="container sponsor-cards-mobile">
        <div className="row row-cols-2 g-0">
          {cardData &&
            cardData.map((data) => (
              <div className="col py-3" style={{paddingLeft: "8px", paddingRight: '8px'}}>
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb" style={{height:"200px"}}>
                      <img
                        src={apiurl + data.thumbnail1}
                        alt=""
                        style={{ width: "100%",height:"100%" }}
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
                      View
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

export default EventMobileCard;
