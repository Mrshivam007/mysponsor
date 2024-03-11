import React from "react";
import item from "../../../assets/img/card/mobile-cards.jpg";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { Carousel, ProgressBar } from "react-bootstrap";
const ContentCreatorProfile = () => {
  const Stats = [
    {
      platform: "Youtube",
      progress: 40,
      variant: "danger",
      label: "40%",
    },
    {
      platform: "Instagram",
      progress: 60,
      variant: "primary",
      label: "60%",
    },
    {
      platform: "Twitter",
      progress: 75,
      variant: "info",
      label: "75%",
    },
    {
      platform: "Facebook",
      progress: 30,
      variant: "",
      label: "30%",
    },
  ];
  const Circle = [
    "Music",
    "Entertainment",
    "Trading",
    "Health Care",
    "Grooming",
    "Tech",
  ];
  return (
    <>
      <div
        className="bg-sponsor"
        style={{
          height: "auto",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        {/* DESKTOP VIEW  */}
        <div className="container payments-desktop desktop-view">
          <div className="pay-box">
            <div className="row row-cols-2">
              <div className="col">
                <div
                  className="post-thumb mb-3"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                    padding: "3%",
                  }}
                >
                  <Carousel controls={false}>
                    {/* {[
                    cardData.thumbnail1,
                    cardData.thumbnail2,
                    cardData.thumbnail3,
                  ].map((item, index) => ( */}
                    <Carousel.Item>
                      <img
                        //   key={index}
                        src={item}
                        alt=""
                        style={{
                          width: "100%",
                          height: "300px",
                          borderRadius: "10px",
                        }}
                      />
                    </Carousel.Item>
                    {/* ))} */}
                  </Carousel>
                </div>
              </div>
              <div className="col">
                <h2 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                  Mr. Beast
                  {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
                </h2>
                <div
                  className="container bg-white"
                  style={{
                    marginTop: "5%",
                    padding: "2%",
                    borderRadius: "15px",
                  }}
                >
                  <h3 className="text-center">Stats</h3>
                  <div className="row row-cols-2">
                    {Stats.map((data) => (
                      <>
                        <div className="col" style={{ padding: "5%" }}>
                          <h5>{data.platform}</h5>
                          <ProgressBar
                            variant={data.variant}
                            animated
                            now={data.progress}
                            label={data.label}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container"
              style={{
                background: "#f2f2f2",
                borderRadius: "15px",
                padding: "3%",
                marginBottom:"2%"
              }}
            >
              <h2 className="text-center">Recommendations by the Creator</h2>
              <div className="container">
                <div className="row">
                  {Circle.map((data) => (
                    <div className="col-6 col-md-2">
                      <div className="circle">
                        <h6 className="text">{data}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DESKTOP VIEW END  */}

        {/* MOBILE VIEW */}
        <div className="container mobile-view">
          <h2 className="sponsor-mobile-text">Mr. Beast</h2>
          <div
            className="post-thumb mt-4"
            style={{
              borderRadius: "15px",
              boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Carousel controls={false}>
              {/* {[
              cardData.thumbnail1,
              cardData.thumbnail2,
              cardData.thumbnail3,
            ].map((item, index) => ( */}
              <Carousel.Item>
                <img
                  //   key={index}
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              {/* ))} */}
            </Carousel>
          </div>
          <div className="container">
            {/* <div className="star d-flex pt-3">
            <h5>
              <i className="bi bi-cash text-success"></i>&nbsp;
              {totalAmount}&nbsp;&nbsp;
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.per_video_reach}&nbsp;&nbsp;
            </h5>
          </div> */}
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
            {/* <table
            className="table table-borderless text-center text-white overflow-hidden"
            style={{
              marginBottom: "4%",
              borderRadius: "10px",
              boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
            }}
          >
            <tr className="table-sm" style={{ background: "#004EA9" }}>
              <td style={{ fontWeight: "bold" }}>Content Posting Date</td>
              <td>End date</td>
            </tr>
            <tr style={{ background: "rgba(0, 187, 255, 0.75)" }}>
              <td
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.50)",
                  fontWeight: "bold",
                }}
              >
                {cardData.posting_date}
              </td>
              <td>{cardData.content_end_date}</td>
            </tr>
          </table> */}
          </div>
          {/* <div className="container px-1">
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
              onClick={handleSponsorLogin}
              disabled={selectedItems.length === 0 || !selectedItems.every(item => item.sponsoring_content_items)}
            >
              Sponsor
            </button>
          </div>
        </div> */}
          {/* <h5 className="font-weight-bold">Content Description: </h5> */}
          {/* <p>{cardData.description}</p> */}
        </div>
        {/* MOBILE VIEW END */}
      </div>
    </>
  );
};

export default ContentCreatorProfile;
