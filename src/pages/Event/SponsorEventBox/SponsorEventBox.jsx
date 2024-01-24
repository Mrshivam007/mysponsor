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
          {item.sponsoring_items} <br />
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
              {item.sponsoring_items} Preview
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-0"
            style={{
              backgroundImage: `url(${modalBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Container className="d-flex justify-content-center">
              {item.sponsoring_items === "banner" && (
                <>
                  <img src={banner_preview} alt="banner-preview" />
                  <div style={{ position: "absolute", top: "70px" }}>
                    <img
                      src={apiurl + cardData?.banner_image}
                      alt="banner-img-preview"
                      style={{ width: "449px", height: "220px" }}
                    />
                  </div>
                </>
              )}
              {item.sponsoring_items === "led_screen" && (
                <>
                  <img src={banner_preview} alt="banner-preview" />

                  <div
                    style={{
                      width: "449px",
                      height: "220px",
                      position: "absolute",
                      top: "70px",
                    }}
                    data-bs-theme="dark"
                  >
                    <Carousel data-bs-theme="dark">
                      <Carousel.Item interval={1000}>
                        <img
                          style={{ width: "100%", height: "220px" }}
                          src={apiurl + cardData?.banner_image}
                          alt=""
                        />
                      </Carousel.Item>
                      <Carousel.Item interval={41000}>
                        <video
                          style={{ width: "100%", height: "220px" }}
                          src={apiurl + cardData?.led_video}
                          autoplay
                          controls
                          controlsList="nofullscreen"
                        ></video>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </>
              )}
            </Container>
          </Modal.Body>
          <Modal.Footer className="p-0">
            {/* <span className="font-weight-bold">
              *This image may not resemble the accurate depiction of the content
              when put up on {item.sponsoring_items}.{" "}
            </span> */}

            {item.sponsoring_items === "banner" && (
              <a href={cardData?.banner_image} download>
                <Button className="p-2" variant="success">
                  Download Banner Image
                </Button>
              </a>
            )}
            {item.sponsoring_items === "led_screen" && (
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

const SponsorEventBox = (eventData) => {
  const cardData01 = eventData.eventData;
  console.log("event data01", cardData01);
  const location = useLocation();
  const cardData02 = location.state && location.state.cardData;
  console.log("event data02", cardData02);
  const cardData = cardData01 || cardData02;
  let totalAmount = 0;
  const sponsoring_items = cardData?.sponsoring_items || [];

  const navigate = useNavigate();

  const handleSponsorLogin = () => {
    // Assuming cardData is defined in your component state
    // Navigate to the /sponsor_login route with cardData as state
    navigate("/sponsor_login", { state: { cardData } });
  };

  sponsoring_items.forEach((item) => {
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
                className="post-thumb w-100 mb-3"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  padding: "3%",
                  height: "55svh",
                  overflow: "auto",
                }}
              >
                <Slider {...settings}>
                  {[
                    cardData.event_id.thumbnail1,
                    cardData.event_id.thumbnail2,
                    cardData.event_id.thumbnail3,
                  ].map((data) => (
                    <img
                      src={apiurl + data}
                      alt=""
                      width="400"
                      height="300"
                      style={{
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
                  <td>Start date</td>
                  <td>End date</td>
                </tr>
                <tr style={{ background: "rgba(0, 187, 255, 0.75)" }}>
                  <td
                    style={{
                      borderRight: "1px solid rgba(255, 255, 255, 0.50)",
                    }}
                  >
                    {cardData.event_id.event_start_date}
                  </td>
                  <td>{cardData.event_id.event_end_date}</td>
                </tr>
              </table>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.event_id.title}{" "}
                <img src={heart} alt="" style={{ width: "7%" }} />
              </h4>
              <h4>{cardData.event_id.location}</h4>
              <div className="star d-flex">
                <h5>
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-warning"></i>&nbsp;
                  <i class="bi bi-star-fill text-white"></i>&nbsp;
                  <span className="text-sm text-muted">3482 reviews</span>
                </h5>
              </div>
              <h5>
                <i className="bi bi-cash text-success"></i>&nbsp;&nbsp;
                <span className="text-md">{totalAmount}&lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">
                  {cardData.event_id.audience_expected}
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
                    {cardData?.sponsoring_items.map((item, index) => (
                      <SponsorButton
                        key={index}
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        onButtonClick={handleButtonClick}
                        cardData={cardData}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <h5 className="font-weight-bold">Event Description: </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptates est perspiciatis voluptas dolorem quo quasi
              sapiente magnam corporis fugiat? Culpa, dolores ullam? Alias nulla
              libero rem praesentium consequuntur excepturi porro cupiditate
              velit, vero harum id sequi, repellendus beatae voluptatibus
              facilis minima in fugiat sunt animi qui? Voluptatem magni eos
              mollitia. Obcaecati tempora vero fugiat dolorem aliquid officiis
              necessitatibus consequuntur sit in, distinctio ipsam aperiam
              cupiditate facilis, sint nesciunt quam!
            </p>
          </div>
        </div>
      </div>
      {/* DESKTOP VIEW END  */}

      {/* MOBILE VIEW */}
      <div className="container mobile-view">
        <h2 className="sponsor-mobile-text">{cardData.event_id.title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={apiurl + cardData.event_id.thumbnail1}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="container">
          <div className="star d-flex pt-3">
            <h5>
              <i className="bi bi-cash text-success"></i>&nbsp;
              {totalAmount}&nbsp;&nbsp;
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.event_id.audience_expected}&nbsp;&nbsp;
            </h5>
          </div>
          <div className="star d-flex">
            <h5>
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-warning"></i>&nbsp;
              <i class="bi bi-star-fill text-white"></i>&nbsp;
              <span className="text-sm text-muted">3482 reviews</span>
            </h5>
          </div>
        </div>
        <div className="container px-0">
          <table
            className="table table-borderless text-center text-dark overflow-hidden"
            style={{
              marginTop: "4%",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
            }}
          >
            <tr className="table-sm">
              <td className="pb-0">From</td>
              <td className="pb-0">To</td>
            </tr>
            <tr className="table-sm">
              <td>
                <span
                  style={{
                    backgroundColor: "#E5E5E5",
                    padding: "3%",
                    borderRadius: "5px",
                  }}
                >
                  {cardData.event_id.event_start_date}
                </span>
              </td>
              <td>
                <span
                  style={{
                    backgroundColor: "#E5E5E5",
                    padding: "3%",
                    borderRadius: "5px",
                  }}
                >
                  {cardData.event_id.event_end_date}
                </span>
              </td>
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
                {cardData.sponsoring_items.map((item, index) => (
                  <SponsorButton
                    key={index}
                    item={item}
                    isSelected={selectedItems.includes(item)}
                    onButtonClick={handleButtonClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-2 font-weight-bold">Event Description: </h5>
        <p>{cardData.event_id.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default SponsorEventBox;
