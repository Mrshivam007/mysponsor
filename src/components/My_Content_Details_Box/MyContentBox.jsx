import React from "react";
import paymentImg from "../../assets/img/payment-img.jpg";
import heart from "../../assets/img/heart2.svg";
import apiurl from "../../constant/config";
const MyContentBox = (contentData) => {
  const cardData = contentData.contentData;
  console.log("content data", cardData);
  let totalSponsoringPrice = 0;
  const sponsoring_items = cardData?.sponsoring_items || [];

  sponsoring_items.forEach(item => {
    if (item && item.price) {
      totalSponsoringPrice += parseFloat(item.price);
    }
  });
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
                <img
                  src={apiurl + cardData.thumbnail1}
                  alt=""
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.title}{" "}
                <img src={heart} alt="" style={{ width: "7%" }} />
              </h4>
              <h4>{cardData.location}</h4>
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
                <span className="text-md">{totalSponsoringPrice}&lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">{cardData.audience_expected}</span>
              </h5>
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
                    {cardData.event_start_date}
                  </td>
                  <td>{cardData.event_end_date}</td>
                </tr>
              </table>

              <div className="container text-white text-center d-flex justify-content-between px-0 mt-4">
                <div
                  className="box bid-box text-white"
                  style={{ backgroundColor: "#004EA9" }}
                >
                  <h6
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.30)",
                      padding: "2%",
                      // marginBottom: "4%",
                    }}
                  >
                    Your Bid
                  </h6>
                  <h5>₹ 50,000</h5>
                </div>
                <div
                  className="box bid-box"
                  style={{ backgroundColor: "#FF2B66" }}
                >
                  <h2 className="mb-0">
                    <i className="bi bi-plus"></i>
                  </h2>
                  <h5>Add More</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis
              repellat consequuntur quasi, facere officia praesentium voluptatum
              libero eveniet vel quisquam voluptates temporibus facilis quas
              quam. Voluptatibus repellat itaque adipisci labore voluptates sint
              ipsa sapiente, a consequuntur odio, excepturi iusto! Non,
              reiciendis quidem officia quae delectus eos fugit tempore velit
              voluptate error dignissimos. <br />
              Dolore facilis repellat ipsum! Atque iusto accusamus, cupiditate
              excepturi dolores accusantium dignissimos, voluptatem distinctio
              doloremque quaerat in enim sunt iure magni officiis deserunt
              facilis vel voluptates incidunt quisquam nisi corporis tenetur
              exercitationem. Iure, corporis repellat. Amet accusamus asperiores
              nisi maxime fugit facere, est voluptatibus sit molestiae deleniti.
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
          <img src={apiurl + cardData.thumbnail1}
            alt="" style={{ width: "100%" }} />
        </div>
        <div className="container text-white text-center d-flex align-items-end justify-content-around px-0 mt-3">
          <div className="box">
            <h4 className="text-md text-dark font-weight-bold">
              <i className="bi bi-cash text-success"></i>
              &nbsp; {totalSponsoringPrice}&lt;
            </h4>
            <h4 className="text-md text-dark font-weight-bold">
              <i className="bi bi-people-fill text-danger"></i>
              &nbsp; {cardData.audience_expected}+
            </h4>
          </div>
          <div
            className="box bid-box text-white"
            style={{ backgroundColor: "#004EA9" }}
          >
            <p
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.30)",
                padding: "4%",
                // marginBottom: "4%",
              }}
            >
              Your Bid
            </p>
            <p>₹ 50,000</p>
          </div>
          <div className="box bid-box" style={{ backgroundColor: "#FF2B66" }}>
            <h2 className="mb-0">
              <i className="bi bi-plus"></i>
            </h2>
            <p>Add More</p>
          </div>
        </div>
        <div className="container">
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
                  {cardData.event_start_date}
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
                  {cardData.event_end_date}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          Ganesh Chaturthi, also called Vinayaka Chaturthi, in Hinduism, 10-day
          festival marking the birth of the elephant-headed deity Ganesha, the
          god of prosperity and wisdom. It begins on the fourth day (chaturthi)
          of the month of Bhadrapada (August-September), the sixth month of the
          Hindu calendar.
        </p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default MyContentBox;
