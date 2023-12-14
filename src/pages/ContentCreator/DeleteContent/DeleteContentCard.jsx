import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  deleteContent,
  fetchContent,
} from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import apiurl from "../../../constant/config";
import { useNavigate } from "react-router-dom";
const DeleteContentCard = ({ cardData }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const ContentDetails = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const navigate = useNavigate();

  const handleDetailsClick = (data) => {
    navigate("/myevents-details", { state: { eventData: data } });
  };

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
      <div className="desktop-view">
        <div className="container">
          {cardData &&
            cardData.map((data) => {
              return (
                <div className="row">
                  <div className="col-12 mb-4">
                    <div
                      className="card"
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#efefef",
                      }}
                    >
                      <div className="row mx-0">
                        <div className="col-3 p-3">
                          <img
                            s
                            src={apiurl + data.thumbnail1}
                            alt=""
                            style={{ width: "100%", borderRadius: "15px" }}
                          />
                        </div>
                        <div className="col-5 mt-2">
                          <div
                            className="box"
                            style={{
                              borderRight: "1px solid #acacac",
                              height: "84%",
                            }}
                          >
                            <h3 className="mt-3 font-weight-bolder d-flex justify-content-between">
                              {data.title}{" "}
                            </h3>
                            <h4 className="font-weight-bold">
                              Platform:{" "}
                              <span className="font-weight-light">
                                {data.content_platform}
                              </span>
                            </h4>
                            <h6 className="font-weight-bold">
                              {data.content_category} description:
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Eligendi laudantium iusto eum totam! Porro
                              saepe culpa dignissimos veritatis mollitia
                              voluptate.
                              <b
                                className="text-sm font-weight-bold"
                                style={{
                                  color: "#055bb5",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleDetailsClick(data)}
                              >
                                Read More
                              </b>
                            </p>
                          </div>
                        </div>

                        <div className="col-4 py-3 px-2">
                          <div className="box">
                            <h5 className=" font-weight-bold">
                              Channel Subs:&nbsp;
                              <span className="font-weight-light">
                                {data.audience_expected}
                              </span>
                            </h5>
                            <h5 className="font-weight-bold">
                              Location:&nbsp;
                              <span className="font-weight-light">
                                {data.location}
                              </span>
                            </h5>
                            {/* <h5 className="font-weight-bold">
                                Price:&nbsp;
                                <span className="font-weight-light">
                                  {data.price}
                                </span>
                              </h5> */}
                            <h5 className="font-weight-bold">
                              Video Preview:&nbsp;
                              <span className="font-weight-light">
                                **Video Link Here**
                              </span>
                            </h5>
                            <button
                              className="btn py-1 px-3 font-weight-bold d-none d-md-block bg-danger text-light"
                              onClick={handleShow}
                              style={{
                                width: "100%",
                                marginTop: "4%",
                                borderRadius: "10px",
                              }}
                            >
                              Delete this Content &nbsp;&nbsp;{" "}
                              <i className="bi bi-trash"></i>
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
                                  variant="primary"
                                  onClick={() => handleDeletion(data)}
                                >
                                  Yes
                                </Button>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  No
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="btn text-white py-1 px-4 font-weight-bold d-none d-md-block"
          style={{
            margin: "2% auto",
            backgroundColor: "#004EA9",
            borderRadius: "10px",
          }}
        >
          Load More
        </button>
      </div>
      {/* MOBILE VIEW FOR CARDS */}
      <div className="mobile-view text-md">
        <h2 className="sponsor-mobile-text">My Events</h2>
        <div className="container mb-4">
          {cardData &&
            cardData.map((data) => (
              <div className="row">
                <div className="col-12">
                  <div className="card myevents-card">
                    <div className="post-thumb">
                      <img
                        src={apiurl + data.thumbnail1}
                        alt=""
                        style={{ width: "100%" }}
                      />
                      <div className="text-overlay">
                        <h4 className="font-weight-bold mb-0">{data.title}</h4>
                        <h5>{data.location}</h5>
                      </div>
                    </div>
                    <div className="row d-flex align-items-center">
                      <div className="col-4" style={{ padding: "0 0 0 8%" }}>
                        <div className="box">
                          <h4 className="text-sm font-weight-bold">
                            <i className="bi bi-cash text-success"></i>
                            &nbsp; {data.price}&lt;
                          </h4>
                          <h4 className="text-sm font-weight-bold">
                            <i className="bi bi-people-fill text-danger"></i>
                            &nbsp; 1 Million+
                          </h4>
                        </div>
                      </div>
                      <div className="col-8 pl-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DeleteContentCard;
