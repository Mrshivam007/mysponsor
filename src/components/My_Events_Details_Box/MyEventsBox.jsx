import React from "react";
import paymentImg from "../../assets/img/payment-img.jpg";
import heart from "../../assets/img/heart2.svg";
import "./myeventsbox.css";
const MyEventsBox = () => {
  return (
    <>
      <div className="container payments-desktop">
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
                Ganesh Chaturthi{" "}
                <img src={heart} alt="" style={{ width: "7%" }} />
              </h4>
              <h4>Durg, C.G.</h4>
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
                <span className="text-md">$10,000 &lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">1 Million+</span>
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
                    19th September 2023
                  </td>
                  <td>30th September 2023</td>
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
    </>
  );
};

export default MyEventsBox;