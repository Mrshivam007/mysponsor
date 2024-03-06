import React, { useEffect, useState } from "react";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSponsoringItem } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

const SponsorButton = ({ item, preview, isSelected, onButtonClick }) => {
  console.log(item);
  console.log("This is the banner preview", preview);
  console.log("This is the type of banner preview", typeof preview);
  return (
    <>
      <div className="col-4 px-1 px-md-2 my-3 text-center">
        <div
          className="post-thumb text-dark py-1"
          style={{ backgroundColor: "#f2f2f2", borderRadius: "10px" }}
        >
          <h6 className="font-weight-bolder">{item.sponsoring_items}</h6>
          {/* <p>
            <i className="bi bi-cash text-success"></i>
            <span>₹{item.price}</span>
          </p> */}
        </div>
      </div>
    </>
  );
};

const SponsorEventBox = (eventData) => {
  const cardData01 = eventData.eventData;
  console.log("event data01", cardData01);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const sponsor = useSelector((state) => state.sponsor);
  const { userDetails } = auth;
  const location = useLocation();
  const cardData02 = location.state && location.state.cardData;
  console.log("event data02", cardData02);
  const cardData = cardData01 || cardData02;
  let totalAmount = 0;
  const [errorMessage, setErrorMessage] = useState("");
  const sponsoring_items = cardData?.sponsoring_items || [];
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageFileName, setBannerImageFileName] = useState(null);
  const [billImage, setBillImage] = useState(null);
  const [billImageFileName, setBillImageFileName] = useState(null);
  const [ledImage, setLedImage] = useState(null);
  const [ledImageFileName, setLedImageFileName] = useState(null);
  const [ledVideo, setLedVideo] = useState(null);
  const [ledVideoFileName, setLedVideoFileName] = useState(null);
  const [billText, setBillText] = useState(null);
  const [preBillText, setPreBillText] = useState(cardData?.bill_text);


  const { SponsoringItemDetails, SponsoringItemError, loading } = sponsor;

  console.log("Sponsoring Items", sponsoring_items);
  console.log("CardData", cardData);
  console.log("Sponsor Id ", userDetails?.user_id);

  const generateUniqueFilename = (originalFilename, index) => {
    const extension = originalFilename.split('.').pop();
    const uniqueFilename = `thumbnail${index + 1}_${Date.now()}.${extension}`;
    return uniqueFilename;
  };

  const handleBannerImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setBannerImage(file);
    setBannerImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleBillImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setBillImage(file);
    setBillImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleLedImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setLedImage(file);
    setLedImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleLedVidChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setLedVideo(file);
    setLedVideoFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const sponsoringItems = cardData.sponsoring_items || []; // Ensure it's an array

    const formData = new FormData();
    formData.append("sponsor_id", cardData.sponsor_id);

    // Check if each sponsoring item is included in the sponsoringItems array
    sponsoringItems.map((item) => {
      if (item.sponsoring_items === "banner") {
        if (bannerImage != null) {
          formData.append("banner_image", bannerImage, bannerImageFileName || "");
        }
      } else if (item.sponsoring_items === "led_screen") {
        if (ledImage != null) {
          formData.append("led_image", ledImage, ledImageFileName || "");
        }
        if (ledVideo != null) {
          formData.append("led_video", ledVideo, ledVideoFileName || "");
        }
      } else if (item.sponsoring_items === "bill_board") {
        if (billImage != null) {
          formData.append("bill_board", billImage, billImageFileName || "");
        }
      }
    });


    try {
      // Make POST API call
      await dispatch(updateSponsoringItem(formData));
      sessionStorage.setItem("successMessage", "Promotion listed successfully!");
      navigate("/sponsored_event"); // Adjust the navigation route as needed
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };



  // useEffect(() => {
  //   // Retrieve success message from sessionStorage
  //   const message = sessionStorage.getItem("successMessage");

  //   // Clear success message from sessionStorage
  //   sessionStorage.removeItem("successMessage");

  //   if (message) {
  //     setSuccessMessage(message);
  //   }
  // }, []);

  const navigate = useNavigate();

  const handleSponsorLogin = () => {
    // Assuming cardData is defined in your component state
    // Navigate to the /sponsor_login route with cardData as state
    navigate("/sponsor_login", { state: { cardData } });
  };

  sponsoring_items.forEach((item) => {
    if (item) {
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

  console.log("Success message ", SponsoringItemDetails);


  useEffect(() => {
    if (SponsoringItemDetails) {
      if (SponsoringItemDetails.msg == "data put apply") {
        console.log("Event created successfully");
        sessionStorage.setItem(
          "successMessage",
          "Promotion listed successfully!"
        );
        navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
      } else {
        console.log("An error occurred while posting the promotion");
        window.scroll(0, 0);
        setErrorMessage("An error occurred during posting an promotion");
      }
    }
    else if (SponsoringItemError) {
      console.log("An error occurred while posting the promotion");
      window.scroll(0, 0);
      setErrorMessage("An error occurred during posting an promotion");
    }
  }, [SponsoringItemDetails, SponsoringItemError]);

  return (
    <>
      {/* DESKTOP VIEW  */}
      <div className="container payments-desktop desktop-view">
        {errorMessage && (
          <div className="container">
            <div
              className="alert alert-danger"
              role="alert"
              style={{ borderRadius: "10px" }}
            >
              {errorMessage}
            </div>
          </div>
        )}
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
                    apiurl + cardData.event_id.thumbnail1,
                    apiurl + cardData.event_id.thumbnail2,
                    apiurl + cardData.event_id.thumbnail3,
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
                {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
              </h4>
              <h4>{cardData.event_id.location}</h4>
              {/* <div className="star d-flex">
                <h5>
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-white"></i>&nbsp;
                  <span className="text-sm text-muted">3482 reviews</span>
                </h5>
              </div> */}
              <h5>
                <i className="bi bi-cash text-success"></i>&nbsp;&nbsp;
                <span className="text-md">{cardData.amount}&lt;</span>
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
                        preview={
                          bannerImage && URL.createObjectURL(bannerImage)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-weight-bold d-none d-lg-block">
            Add Photos & Videos
          </h1>
          <h2 className="sponsor-mobile-text">Add Photos</h2>
          <p>(atleast 1 photo & 1 video)</p>

          {cardData?.sponsoring_items.map((item, index) => (
            <div
              key={index}
              className="box1 mt-2 d-flex justify-content-center"
              style={{ gap: "2%" }}
            >

              {item.sponsoring_items === "bill_board" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Bill-Board Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBillImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.bill_board && billImage === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={apiurl + cardData?.bill_board}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {billImage ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(billImage)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {item.sponsoring_items === "banner" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Banner Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBannerImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.banner_image && bannerImage === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={apiurl + cardData?.banner_image}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {bannerImage ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(bannerImage)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {item.sponsoring_items === "led_screen" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3 w-md-50"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Led Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLedImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.led_image && ledImage === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={apiurl + cardData?.led_image}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                    {ledImage ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(ledImage)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {item.sponsoring_items === "led_screen" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3 w-md-50"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Led Video</h5>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleLedVidChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.led_video && ledVideo == null ? (
                      <div>
                        <h2>Preview:</h2>
                        <video width="200" controls className="mx-auto">
                          <source
                            src={apiurl + cardData?.led_video}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : null}
                    {ledVideo ? (
                      <div>
                        <h2>Preview:</h2>
                        <video width="200" controls className="mx-auto">
                          <source
                            src={URL.createObjectURL(ledVideo)}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          ))}
          {cardData?.sponsoring_items.map((item) => (
            <>
              {item.sponsoring_items === "banner" &&
                !(bannerImage || cardData?.banner_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the Banner
                </div>
              ) : null}
              {item.sponsoring_items === "led_screen" &&
                !(ledImage || cardData?.led_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the LED
                </div>
              ) : null}
              {/* {item.sponsoring_items === "led_screen" &&
                !(ledVideo || cardData?.led_video) ? (
                <div className="alert alert-danger">
                  Upload a video to be displayed on the LED
                </div>
              ) : null} */}
            </>
          ))}
          <div className="container">
            <input
              type="submit"
              className="btn btn-success submit py-1 px-3"
              value="Update Promotion"
              onClick={handleSubmitClick}
            />
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
      <div className="container mobile-view sponsored-events-mobile">
        {errorMessage && (
          <div className="container">
            <div
              className="alert alert-danger"
              role="alert"
              style={{ borderRadius: "10px" }}
            >
              {errorMessage}
            </div>
          </div>
        )}
        <h2 className="sponsor-mobile-text">{cardData.event_id.title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Carousel controls={false}>
            {[
              apiurl + cardData.event_id.thumbnail1,
              apiurl + cardData.event_id.thumbnail2,
              apiurl + cardData.event_id.thumbnail3,
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
              <span className="text-md">{cardData.amount}</span>
              {" "}
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.event_id.audience_expected}&nbsp;&nbsp;
            </h5>
          </div>
          {/* <div className="star d-flex">
            <h5>
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-white"></i>&nbsp;
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
        <div className="container">
          <h2 className="sponsor-mobile-text pl-0">Add Photos</h2>
          <p>(atleast 3 photos & 1 video)</p>

          {cardData?.sponsoring_items.map((item, index) => (
            <div
              key={index}
              className="box1 mt-2 d-flex justify-content-center"
            >
              {item.sponsoring_items === "bill_board" && (
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Bill-Board Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBillImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.bill_board && billImage === null && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={
                            apiurl + cardData?.bill_board ||
                            URL.createObjectURL(billImage)
                          }
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {billImage && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(billImage)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {item.sponsoring_items === "banner" && (
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Banner Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBannerImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.banner_image && bannerImage === null && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={
                            apiurl + cardData?.banner_image ||
                            URL.createObjectURL(bannerImage)
                          }
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {bannerImage && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(bannerImage)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {item.sponsoring_items === "led_screen" && (
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Led Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLedImgChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.led_image && ledImage === null && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={apiurl + cardData?.led_image}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {ledImage && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(ledImage)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {item.sponsoring_items === "led_screen" && (
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Led Video</h5>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleLedVidChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.led_video && ledVideo == null && (
                      <div>
                        <h2>Preview:</h2>
                        <video width="200" controls className="mx-auto">
                          <source
                            src={apiurl + cardData?.led_video}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    {ledVideo && (
                      <div>
                        <h2>Preview:</h2>
                        <video width="200" controls className="mx-auto">
                          <source
                            src={URL.createObjectURL(ledVideo)}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {cardData?.sponsoring_items.map((item) => (
            <>
              {item.sponsoring_items === "banner" &&
                !(bannerImage || cardData?.banner_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the Banner
                </div>
              ) : null}
              {item.sponsoring_items === "led_screen" &&
                !(ledImage || cardData?.led_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the LED
                </div>
              ) : null}
              {item.sponsoring_items === "led_screen" &&
                !(ledVideo || cardData?.led_video) ? (
                <div className="alert alert-danger">
                  Upload a video to be displayed on the LED
                </div>
              ) : null}
            </>
          ))}
        </div>
        <div className="container-md">
          <input
            type="submit"
            className="btn btn-success submit py-1 px-3"
            value="Update Promotion"
            onClick={handleSubmitClick}
          />
        </div>
        <h5 className="mt-2 font-weight-bold">Event Description: </h5>
        <p>{cardData.event_id.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default SponsorEventBox;
