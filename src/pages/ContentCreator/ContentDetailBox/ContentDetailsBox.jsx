import React from "react";
import paymentImg from "../../../assets/img/payment-img.jpg";
import heart from "../../../assets/img/heart2.svg";
const ContentDetailsBox = () => {
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
                  src={paymentImg}
                  alt=""
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                Mr. Beast
              </h4>
              <h4>Platfrom: Youtube</h4>
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
                <span className="text-md font-weight-bold">
                  Channel Subscribers:&nbsp;
                </span>
                <span className="text-md">100 Million</span>
                <br /><br />
                <span className="text-md font-weight-bold">
                  Channel Link:&nbsp;
                </span>
                <span className="text-md">
                  <a href="https://www.youtube.com/@MrBeast">
                    <u>https://www.youtube.com/@MrBeast</u>
                  </a>
                </span>
                <br /><br />
                <span className="text-md font-weight-bold">
                  Channel Category:&nbsp;
                </span>
                <span className="text-md">Comedy,Entertainment,Fun</span>
                <br /><br />
                <span className="text-md font-weight-bold">
                  Genre:&nbsp;
                </span>
                <span className="text-md">Comedy,Entertainment,Fun</span>
              </h5>
{/* 
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
                  <h5>Sponsor content</h5>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row p-3">
            <h6 className="font-weight-bold">Content Description: </h6>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic
              ratione commodi nulla iure voluptate quia cum corporis, esse
              repellendus officia expedita, laboriosam veniam, vitae dignissimos
              unde. Fuga, beatae perspiciatis?
            </p>
          </div>
        </div>
      </div>
      {/* DESKTOP VIEW END  */}

      {/* MOBILE VIEW */}
      {/* <div className="container mobile-view">
        <h2 className="sponsor-mobile-text">{title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={apiurl + thumbnail1}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="container text-white text-center d-flex align-items-end justify-content-around px-0 mt-3">
          <div className="box">
            <h4 className="text-md text-dark font-weight-bold">
              <i className="bi bi-cash text-success"></i>
              &nbsp; {totalSponsoringPrice}&lt;
            </h4>
            <h4 className="text-md text-dark font-weight-bold">
              <i className="bi bi-people-fill text-danger"></i>
              &nbsp; {audience_expected}+
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
                  {event_start_date}
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
                  {event_end_date}
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
      </div> */}
      {/* MOBILE VIEW END */}
    </>
  );
};

export default ContentDetailsBox;
