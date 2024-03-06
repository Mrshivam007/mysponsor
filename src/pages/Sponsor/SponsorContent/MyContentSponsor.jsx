import React, { useState } from "react";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const SponsorButton = ({ item, isSelected, onButtonClick }) => {
  return (
    <div className="col-4 px-1 px-md-2 my-3 text-center">
      <div
        className="post-thumb text-dark py-2"
        style={{ backgroundColor: "#f2f2f2", borderRadius: "10px" }}
      >
        <h6 className="font-weight-bolder">
          {item.sponsoring_content_items} <br />
          <i className="bi bi-cash text-success"></i> ₹{item.price}
        </h6>
        <button
          className="badge-pill font-weight-bold w-100"
          onClick={() => onButtonClick(item)}
          style={
            isSelected
              ? { backgroundColor: "red", color: "white" }
              : {
                color: "rgb(0, 78, 169)",
                backgroundColor: "white",
                border: "2px solid rgb(0, 78, 169)",
              }
          }
        >
          {isSelected ? "Remove" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

const MyContentSponsor = (contentData) => {
  const cardData01 = contentData.contentData;
  console.log("event data01", cardData01);
  const location = useLocation();
  const cardData02 = location.state && location.state.cardData;
  console.log("event data02", cardData02);
  const cardData = cardData01 || cardData02;
  let totalAmount = 0;
  const sponsoring_items = cardData?.sponsoring_content_items || [];

  const navigate = useNavigate();

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

  const handleSponsorClick = () => {
    const selectedItemsData = {
      cardData,
      sponsoring_items: selectedItems.map(
        (item) => item.sponsoring_content_items
      ),
      sponsoring_price: totalSponsoringPrice.toFixed(2),
    };

    navigate("/sponsor_content_payment", { state: selectedItemsData });
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
                <Carousel controls={false}>
                  {[
                    cardData.thumbnail1,
                    cardData.thumbnail2,
                    cardData.thumbnail3,
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
                    {cardData.posting_date}
                  </td>
                  {/* <td>{cardData.content_end_date}</td> */}
                </tr>
              </table>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.title}{" "}
                {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
              </h4>
              <h4>{cardData.location}</h4>
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
                <span className="text-md">{totalAmount}&lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">{cardData.per_video_reach}</span>
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
                    Sponsoring items
                  </div>

                  <div className="row mx-auto" style={{ width: "100%" }}>
                    {cardData?.sponsoring_content_items.map((item, index) => (
                      <SponsorButton
                        key={index}
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        onButtonClick={handleButtonClick}
                      />
                    ))}
                  </div>
                  <div className="col-12">
                    <div className="container py-3 px-0 text-start text-dark">
                      <label className="text-white font-weight-bold">
                        Total Amount Sponsored
                      </label>
                      <input
                        type="text"
                        className="form-control w-100"
                        value={`₹ ${totalSponsoringPrice.toFixed(2)}`}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn w-100 text-center text-white font-weight-bold my-2"
                  style={{
                    backgroundColor: "rgb(0, 78, 169)",
                    borderRadius: "10px",
                  }}
                  onClick={handleSponsorClick}
                  disabled={selectedItems.length === 0 || !selectedItems.every(item => item.sponsoring_content_items) || cardData.is_sponsored}
                >
                  {cardData.is_sponsored ? "Content is Sponsored" : "Sponsor"}
                </button>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <h5 className="font-weight-bold">Event Description: </h5>
            <p>
              {cardData.description}
            </p>
          </div>
        </div>
      </div>
      {/* DESKTOP VIEW END  */}

      {/* MOBILE VIEW */}
      <div className="container mobile-view">
        <h2 className="sponsor-mobile-text">{cardData.title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Carousel controls={false}>
            {[
              cardData.thumbnail1,
              cardData.thumbnail2,
              cardData.thumbnail3,
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
              {totalAmount}&nbsp;&nbsp;
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.per_video_reach}&nbsp;&nbsp;
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
                {cardData.posting_date}
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
                {cardData?.sponsoring_content_items.map((item, index) => (
                  <SponsorButton
                    key={index}
                    item={item}
                    isSelected={selectedItems.includes(item)}
                    onButtonClick={handleButtonClick}
                  />
                ))}
              </div>
              <div className="col-12">
                <div className="container py-3 px-0 text-start text-dark">
                  <label className="text-white font-weight-bold">
                    Total Amount Sponsored
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    value={`₹ ${totalSponsoringPrice.toFixed(2)}`}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn w-100 text-center text-white font-weight-bold my-2"
              style={{
                backgroundColor: "rgb(0, 78, 169)",
                borderRadius: "10px",
              }}
              onClick={handleSponsorClick}
              disabled={selectedItems.length === 0 || !selectedItems.every(item => item.sponsoring_content_items)}
            >
              Sponsor
            </button>
          </div>
        </div>
        <h5 className="font-weight-bold">Content Description: </h5>
        <p>{cardData.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default MyContentSponsor;
