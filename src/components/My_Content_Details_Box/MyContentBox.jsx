import React, { useState } from "react";
import apiurl from "../../constant/config";
import { Carousel } from "react-bootstrap";

const SponsorButton = ({ item, isSelected, onButtonClick }) => {
  return (
    <div className="col-4 px-1 px-md-2 my-3 text-center">
      <div
        className="post-thumb text-dark py-1"
        style={{ backgroundColor: "#f2f2f2", borderRadius: "10px" }}
      >
        <h6 className="font-weight-bolder">
          {item.sponsoring_content_items} <br />
          <i className="bi bi-cash text-success"></i> ₹{item.price}
        </h6>
      </div>
    </div>
  );
};

const MyContentBox = (contentData) => {
  const cardData = contentData.contentData;
  console.log("content data", cardData);
  let totalAmount = 0;
  const sponsoring_items = cardData?.sponsoring_content_items || [];

  sponsoring_items.forEach((item) => {
    if (item && item.price) {
      totalAmount += parseFloat(item.price);
    }
  });

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
                <Carousel controls={false}>
                  {[
                    apiurl + cardData.thumbnail1,
                    apiurl + cardData.thumbnail2,
                    apiurl + cardData.thumbnail3,
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
            </div>
            <div className="col-6">
              <h4 className="mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.title}{" "}
              </h4>
              <h5 className="font-weight-bold">
                Your Platform Name:&nbsp;
                <span className="font-weight-light">{cardData.price}</span>
              </h5>
              <h5 className="font-weight-bold">
                Channel Subs:&nbsp;
                <span className="font-weight-light">
                  {cardData.audience_expected}
                </span>
              </h5>
              <h5 className="font-weight-bold">
                Location:&nbsp;
                <span className="font-weight-light">{cardData.location}</span>
              </h5>
              <h5 className="font-weight-bold">
                Video Preview:&nbsp;
                <span className="font-weight-light">**Video Link Here**</span>
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
                    Your Sponsoring items
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
                </div>
              </div>
            </div>
          </div>
          <h6 className="font-weight-bold mt-2">Content publishing dates: </h6>
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
                {cardData.content_start_date}
              </td>
              <td>{cardData.content_end_date}</td>
            </tr>
          </table>
          <div className="row p-3">
            <h6 className="font-weight-bold">Video Description: </h6>
            <p>{cardData.description}</p>
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
              apiurl + cardData.thumbnail1,
              apiurl + cardData.thumbnail2,
              apiurl + cardData.thumbnail3,
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
          <div className="box py-3">
            <h5 className="font-weight-bold">
              Title:&nbsp;&nbsp;
              <span className="font-weight-normal">{cardData.title}</span>
            </h5>
            <h5 className="font-weight-bold">
              Platform:&nbsp;&nbsp;
              <span className="font-weight-normal">
                {cardData.content_platform}
              </span>
            </h5>
            <h5 className="font-weight-bold">
              Channel Subs:&nbsp;&nbsp;
              <span className="font-weight-normal">
                {cardData.audience_expected}
              </span>
            </h5>
            <h5 className="font-weight-bold">
              Location:&nbsp;&nbsp;
              <span className="font-weight-normal">{cardData.location}</span>
            </h5>
            <h5 className="font-weight-bold">
              Video Preview:&nbsp;&nbsp;
              <span className="font-weight-normal">**Video Preview**</span>
            </h5>
          </div>
        </div>

        <div className="container">
          <table
            className="table table-borderless text-center text-dark overflow-hidden"
            style={{
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
                  {cardData.content_start_date}
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
                  {cardData.content_end_date}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div className="container px-2 mb-3">
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
                Your Sponsoring items
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
            </div>
          </div>
        </div>
        <p>{cardData.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default MyContentBox;
