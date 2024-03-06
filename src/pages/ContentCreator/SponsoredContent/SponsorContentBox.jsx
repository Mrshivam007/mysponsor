import React, { useState } from "react";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import banner_preview from "../../../assets/img/Banner/banner-preview-img.png";
import modalBackground from "../../../assets/img/Banner/modal-background.webp";
import Slider from "react-slick";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Carousel, Container, Modal } from "react-bootstrap";

const SponsorButton = ({ item, cardData, isSelected, onButtonClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slider
  };
  console.log("This is the events side data", cardData);
  return (
    <div className="col-4 px-1 px-md-2 my-3 text-center">
      <div
        className="post-thumb text-dark py-1"
        style={{ backgroundColor: "#f2f2f2", borderRadius: "10px" }}
      >
        <h6 className="font-weight-bolder">
          {item.sponsoring_content_items} <br />
        </h6>
        <Button
          className="px-2 py-1 rounded-pill"
          variant="primary"
          onClick={handleShow}
        >
          Preview
        </Button>
        {/* <!-- Modal --> */}

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="p-2 border-black border-bottom-1">
            <Modal.Title id="contained-modal-title-vcenter">
              {item.sponsoring_content_items} Preview
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-0"
            style={{
              // backgroundImage: `url(${modalBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Container className="d-flex justify-content-center">
              {item.sponsoring_content_items === "tag_ads" && (
                <>
                  <h1>{cardData?.tag_ads}</h1>
                </>
              )}
              {item.sponsoring_content_items === "sponsored_by" && (
                <>
                  <h1>{cardData?.sponsored_by}</h1>
                </>
              )}
              {item.sponsoring_content_items === "reel_sponsored" && (
                <>
                  <h1>{cardData?.reel_sponsored}</h1>
                </>
              )}
            </Container>
          </Modal.Body>
          <Modal.Footer className="p-0">
            {item.sponsoring_content_items === "banner" && (
              <a href={cardData?.banner_image} download>
                <Button className="p-2" variant="success">
                  Download Banner Image
                </Button>
              </a>
            )}
            {item.sponsoring_content_items === "led_screen" && (
              <>
                <a href={cardData?.led_image} download>
                  <Button className="p-2" variant="success">
                    Download LED Image
                  </Button>
                </a>
                <a href={cardData?.led_video} download>
                  <Button className="p-2" variant="success">
                    Download LED Video
                  </Button>
                </a>
              </>
            )}
            <Button className="p-2" variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const SponsorContentBox = (contentData) => {
  const cardData01 = contentData.contentData;
  console.log("event data01", cardData01);
  const location = useLocation();
  const cardData02 = location.state && location.state.cardData;
  console.log("event data02", cardData02);
  const cardData = cardData01 || cardData02;
  let totalAmount = 0;
  const sponsoring_content_items = cardData?.sponsoring_content_items || [];

  const navigate = useNavigate();

  const handleSponsorLogin = () => {
    // Assuming cardData is defined in your component state
    // Navigate to the /sponsor_login route with cardData as state
    navigate("/sponsor_login", { state: { cardData } });
  };

  sponsoring_content_items.forEach((item) => {
    if (item && item.price) {
      totalAmount += parseFloat(item.price);
    }
  });
  const settings = {
    infinite: true, // Loop the slider
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalSponsoringPrice, setTotalSponsoringPrice] = useState(0);

  const handleButtonClick = (item) => {
    if (selectedItems.includes(item)) {
      // If item is already selected, remove it
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
      setTotalSponsoringPrice(
        (prevTotal) => prevTotal - parseFloat(item.price)
      );
    } else {
      // If item is not selected, add it
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
      setTotalSponsoringPrice(
        (prevTotal) => prevTotal + parseFloat(item.price)
      );
    }
  };

  return (
    <>
      {/* DESKTOP VIEW  */}
      <div className="container payments-desktop desktop-view">
        <div className="pay-box">
          <div className="row row-cols-2">
            <div className="col-6">
              <div
                className="post-thumb mb-3"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  padding: "3%",
                }}
              >
                <Slider {...settings}>
                  {[
                    cardData.content_id.thumbnail1,
                    cardData.content_id.thumbnail2,
                    cardData.content_id.thumbnail3,
                  ].map((data) => (
                    <img
                      src={apiurl + data}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "15px",
                      }}
                    />
                  ))}
                </Slider>
              </div>
              <table
                className="table table-borderless text-center text-white overflow-hidden"
                style={{
                  marginBottom: "4%",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
                }}
              >
                <tr className="table-sm" style={{ background: "#004EA9" }}>
                  <td style={{ fontWeight: 'bold' }}>Content Posting Date</td>
                  {/* <td>End date</td> */}
                </tr>
                <tr style={{ background: "rgba(0, 187, 255, 0.75)" }}>
                  <td
                    style={{
                      borderRight: "1px solid rgba(255, 255, 255, 0.50)",
                      fontWeight: 'bold'
                    }}
                  >
                    {cardData.content_id.posting_date}
                  </td>
                  {/* <td>{cardData.content_end_date}</td> */}
                </tr>
              </table>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.content_id.title}{" "}
                {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
              </h4>
              <h4>{cardData.content_id.location}</h4>
              {/* <div className="star d-flex">
                <h5>
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-white"></i>&nbsp;
                  <span className="text-sm text-muted">3482 reviews</span>
                </h5>
              </div> */}
              <h5>
                <i className="bi bi-cash text-success"></i>&nbsp;&nbsp;
                <span className="text-md">{cardData.amount}&lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">
                  {cardData.content_id.per_video_reach}
                </span>
              </h5>

              <div className="row g-0">
                <div
                  className="box text-white"
                  style={{
                    backgroundColor: "#004EA9",
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "3%",
                  }}
                >
                  <div
                    className="col-12 font-weight-bolder text-center"
                    style={{
                      padding: "3% 0 2% 0",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                    }}
                  >
                    Your Sponsoring Items
                  </div>

                  <div className="row mx-auto" style={{ width: "100%" }}>
                    {cardData?.content_id.sponsoring_content_items.map(
                      (item, index) => (
                        <SponsorButton
                          key={index}
                          item={item}
                          isSelected={selectedItems.includes(item)}
                          onButtonClick={handleButtonClick}
                          cardData={cardData}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <h5 className="font-weight-bold">Event Description: </h5>
            <p>{cardData?.content_id.description}</p>
          </div>
        </div>
      </div>
      {/* DESKTOP VIEW END  */}

      {/* MOBILE VIEW */}
      <div className="container mobile-view">
        <h2 className="sponsor-mobile-text">{cardData.content_id.title}</h2>
        <div
          className="post-thumb w-100 mb-3"
          style={{
            borderRadius: "20px",
            boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            padding: "3%",
          }}
        >
          <Carousel controls={false} autoplay>
            {[
              apiurl + cardData.content_id.thumbnail1,
              apiurl + cardData.content_id.thumbnail2,
              apiurl + cardData.content_id.thumbnail3,
            ].map((item, index) => (
              <Carousel.Item>
                <img
                  key={index}
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="container">
          <div className="star d-flex pt-3">
            <h5>
              <i className="bi bi-cash text-success"></i>&nbsp;
              {cardData.amount}&nbsp;&nbsp;
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.content_id.per_video_reach}&nbsp;&nbsp;
            </h5>
          </div>
          {/* <div className="star d-flex">
            <h5>
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-white"></i>&nbsp;
              <span className="text-sm text-muted">3482 reviews</span>
            </h5>
          </div> */}
        </div>
        <div className="container px-0">
        <table
                className="table table-borderless text-center text-white overflow-hidden"
                style={{
                  marginBottom: "4%",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
                }}
              >
                <tr className="table-sm" style={{ background: "#004EA9" }}>
                  <td style={{ fontWeight: 'bold' }}>Content Posting Date</td>
                  {/* <td>End date</td> */}
                </tr>
                <tr style={{ background: "rgba(0, 187, 255, 0.75)" }}>
                  <td
                    style={{
                      borderRight: "1px solid rgba(255, 255, 255, 0.50)",
                      fontWeight: 'bold'
                    }}
                  >
                    {cardData.content_id.posting_date}
                  </td>
                  {/* <td>{cardData.content_end_date}</td> */}
                </tr>
              </table>
        </div>
        <div className="container px-1">
          <div className="row g-0">
            <div
              className="box text-white"
              style={{
                backgroundColor: "#004EA9",
                width: "100%",
                borderRadius: "10px",
                marginTop: "3%",
              }}
            >
              <div
                className="col-12 font-weight-bolder text-center"
                style={{
                  padding: "3% 0 2% 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                }}
              >
                Sponsoring items
              </div>

              <div className="row mx-auto" style={{ width: "100%" }}>
                {cardData.content_id.sponsoring_content_items.map(
                  (item, index) => (
                    <SponsorButton
                      key={index}
                      item={item}
                      isSelected={selectedItems.includes(item)}
                      onButtonClick={handleButtonClick}
                      cardData={cardData}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-2 font-weight-bold">Content Description: </h5>
        <p>{cardData.content_id.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default SponsorContentBox;
