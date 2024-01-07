import React, { useEffect } from "react";
import { fetchSponsoredEvent } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SponsorCalendarCard = () => {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const sponsor_id = userDetails.user_id;
  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.sponsor)
  useEffect(() => {
    dispatch(fetchSponsoredEvent(sponsor_id))
  }, [])
  console.log("user details", auth);
  console.log("Event details", eventDetails);
  const cardData = eventDetails.SponsoredEvent;
  const navigate = useNavigate();
  console.log("calander Data", cardData);
  const handleSponsorClick = (data) => {
    navigate("/sponsored_event_details", { state: { eventData: data } });
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-2">
          {cardData &&
            cardData.map((data) => {
              const eventDate = new Date(data.created_at);

              // Options for formatting the date
              const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              };

              // Format the date
              const formattedEventDate = eventDate.toLocaleDateString(undefined, options);

              return (
                <div className="card">
                  <h5 className="p-2 font-weight-bold mb-0">
                    <i
                      class="bi bi-calendar-event-fill"
                      style={{ color: "rgb(0, 78, 169)" }}
                    ></i>
                    &nbsp; "{data.title}"
                  </h5>
                  <p className="p-2 mb-0">
                    <i className="bi bi-alarm-fill text-danger"></i>&nbsp; Event
                    Timestamp:{" "}
                    {/* <span className="font-weight-bold">Monday, January 1, 2024</span> */}
                    <span className="font-weight-bold">{formattedEventDate}</span>
                  </p>
                  <hr className="my-0" />
                  <div className="box d-flex align-items-center justify-content-end p-2">
                    <button className="btn btn-primary rounded-pill px-3 py-1" data-bs-dismiss="modal"
                      onClick={() => handleSponsorClick(data)}
                    >
                      Check Event
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SponsorCalendarCard;
