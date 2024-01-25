import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEvent } from "../../../redux/actions/eventAction";
import apiurl from "../../../constant/config";
import { Button, Modal } from "react-bootstrap";
import { deleteContent } from "../../../redux/actions/contentAction";

const Delete_MobileCards = ({ line, cardData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent());
  }, [dispatch]);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleSponsorClick = (data) => {
  //   navigate("/update_event", { state: { eventData: data } });
  // };

  const handleDeletion = (data) => {
    dispatch(deleteContent(data.content_id));
    sessionStorage.setItem(
      "deletionMessage",
      "Your Content has been Deleted!!!"
    );
    navigate("/your_content/upcoming_content");
  };
  return (
    <>
      <h2 className="sponsor-mobile-text">{line}</h2>
      <div className="container sponsor-cards-mobile">
        <div className="row row-cols-2 g-0">
          {cardData &&
            cardData.map((data) => (
              <div className="col py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb">
                      <img
                        src={apiurl + data.thumbnail1}
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
                        backgroundColor: "red",
                      }}
                      onClick={handleShow}
                    >
                      Delete
                    </button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      scrollable={true}
                      style={{ zIndex: "2000" }}
                    >
                      <Modal.Header>
                        <Modal.Title>Delete {data.title} ?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete this content ?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="danger"
                          onClick={() => handleDeletion(data)}
                        >
                          Yes
                        </Button>
                        <Button variant="success" onClick={handleClose}>
                          No
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Delete_MobileCards;
