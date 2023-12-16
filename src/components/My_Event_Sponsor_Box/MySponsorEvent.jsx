import React, { useState } from "react";
import heart from "../../assets/img/heart2.svg";
import apiurl from "../../constant/config";
import Slider from "react-slick";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SponsorButton = ({ item, isSelected, onButtonClick }) => {
    return (
        <div>
            <div>
                {item.sponsoring_items} - ${item.price}
            </div>
            <button onClick={() => onButtonClick(item)}>
                {isSelected ? 'Remove' : 'Buy Now'}
            </button>
        </div>
    );
};

const MyEventSponsor = (eventData) => {
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
            setTotalSponsoringPrice((prevTotal) => prevTotal - parseFloat(item.price));
        } else {
            // If item is not selected, add it
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
            setTotalSponsoringPrice((prevTotal) => prevTotal + parseFloat(item.price));
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
                                        cardData.thumbnail1,
                                        cardData.thumbnail2,
                                        cardData.thumbnail3,
                                    ].map((data) => (
                                        <img
                                            src={apiurl + data}
                                            alt=""
                                            style={{ width: "100%", borderRadius: "15px" }}
                                        />
                                    ))}
                                </Slider>
                            </div>
                            {/* <div>
                <table
                  className="table table-borderless text-center text-white overflow-hidden"
                  style={{
                    marginBottom: "4%",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <thead>
                    <tr className="table-sm" style={{ background: "#004EA9" }}>
                      <th>Sponsoring Item Name</th>
                      <th>Sponsoring Item Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardData?.sponsoring_items.map((item, index) => (
                      <SponsorButton
                        key={index}
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        onButtonClick={handleButtonClick}
                      />
                    ))}
                  </tbody>
                </table>
                <p>Total Sponsoring Price: ${totalSponsoringPrice.toFixed(2)}</p>
              </div> */}
                            <div
                                className="box text-white"
                                style={{
                                    backgroundColor: "#004EA9",
                                    width: "80%",
                                    borderRadius: "10px",
                                    marginTop: "3%",
                                }}
                            >
                                <div className="row g-0">
                                    <div
                                        className="col-12 font-weight-bolder text-center"
                                        style={{
                                            padding: "3% 0 2% 0",
                                            borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
                                        }}
                                    >
                                        Sponsoring items
                                    </div>
                                    <div className="row">
                                    <div className="col-12 font-weight-bolder text-center">
                                        {cardData?.sponsoring_items.map((item, index) => (
                                            <SponsorButton
                                                key={index}
                                                item={item}
                                                isSelected={selectedItems.includes(item)}
                                                onButtonClick={handleButtonClick}
                                            />
                                        ))}
                                    </div>
                                    </div>
                                    {/* <div className="col-4 font-weight-bolder text-center">
                                        <div
                                            className="box bg-white p-1 m-3"
                                            style={{ borderRadius: "10px" }}
                                        >
                                            <i className="bi bi-cash text-success"></i>
                                            <p className="text-dark mb-0">50,000</p>
                                        </div>
                                    </div>
                                    <div className="col-4 font-weight-bolder text-center">
                                        <div
                                            className="box bg-white p-1 m-3"
                                            style={{ borderRadius: "10px" }}
                                        >
                                            <i className="bi bi-cash text-success"></i>
                                            <p className="text-dark mb-0">75,000</p>
                                        </div>
                                    </div> */}
                                    <div className="col-12 text-center font-weight-bold">or</div>
                                    <div className="col-12">
                                        <div className="container p-3">
                                            <input
                                                type="text"
                                                placeholder="Add your amount"
                                                style={{
                                                    width: "100%",
                                                    border: "none",
                                                    borderRadius: "10px",
                                                    padding: "3%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                <span className="text-md">{totalAmount}&lt;</span>
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

                            {/* <div>
                <table
                  className="table table-borderless text-center text-white overflow-hidden"
                  style={{
                    marginBottom: "4%",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 20px -3px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <thead>
                    <tr className="table-sm" style={{ background: "#004EA9" }}>
                      <th>Sponsoring Item Name</th>
                      <th>Sponsoring Item Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardData?.sponsoring_items.map((item, index) => (
                      <SponsorButton
                        key={index}
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        onButtonClick={handleButtonClick}
                      />
                    ))}
                  </tbody>
                </table>
                <p>Total Sponsoring Price: ${totalSponsoringPrice.toFixed(2)}</p>
              </div> */}

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
                                    <h5>₹ {totalSponsoringPrice.toFixed(2)}</h5>
                                </div>
                                {/* <div
                  className="box bid-box"
                  style={{ backgroundColor: "#FF2B66" }}
                >
                  <h2 className="mb-0">
                    <i className="bi bi-plus"></i>
                  </h2>
                  <h5>Add More</h5>
                </div> */}
                                <div
                                    className="box bid-box"
                                    style={{
                                        backgroundColor: "#004EA9",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                    }}
                                    onClick={handleSponsorLogin}
                                >
                                    <h3 style={{ color: 'white' }}>Sponsor</h3>
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
                    <img
                        src={apiurl + cardData.thumbnail1}
                        alt=""
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="container text-white text-center d-flex align-items-end justify-content-around px-0 mt-3">
                    <div className="box">
                        <h4 className="text-md text-dark font-weight-bold">
                            <i className="bi bi-cash text-success"></i>
                            &nbsp; {totalAmount}&lt;
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

export default MyEventSponsor;
