import React, { useEffect, useState } from "react";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import banner_preview from "../../../assets/img/Banner/banner-preview-img.png";
import modalBackground from "../../../assets/img/Banner/modal-background.webp";
import Slider from "react-slick";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSponsoringItem, updateContentSponsoringItem } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Modal } from "react-bootstrap";

const SponsorButton = ({ item, preview, isSelected, onButtonClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <h6 className="font-weight-bolder">
            {item.sponsoring_content_items} <br />
          </h6>
          {/* <Button
            className="px-2 py-1 rounded-pill"
            variant="primary"
            onClick={handleShow}
          >
            Preview
          </Button> */}
          {/* <!-- Modal --> */}

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              className="p-2 border-black border-bottom-1"
              closeButton
            >
              <Modal.Title id="contained-modal-title-vcenter">
                {item.sponsoring_content_items} Preview
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
                <img src={banner_preview} alt="banner-preview" />
                <div style={{ position: "absolute", top: "70px" }}>
                  <img
                    src={preview}
                    alt="banner-img-preview"
                    style={{ width: "449px", height: "220px" }}
                  />
                </div>
              </Container>
            </Modal.Body>
            <Modal.Footer className="p-0 justify-content-between">
              <span className="font-weight-bold">
                *This image may not resemble the accurate depiction of the
                content when put up on {item.sponsoring_content_items}.{" "}
              </span>
              <Button className="p-2" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

const SponsorEventBox = (contentData) => {
  const cardData01 = contentData.contentData;
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
  const sponsoring_items = cardData?.sponsoring_items || [];
  const [bannerImage, setBannerImage] = useState(null);
  const [ledImage, setLedImage] = useState(null);
  const [ledVideo, setLedVideo] = useState(null);
  const [sponsored_by, setSponsored_by] = useState("");
  const [pre_sponsored_by, setPre_Sponsored_by] = useState(cardData?.sponsored_by);
  const [tag_ads, setTag_ads] = useState("");
  const [pre_tag_ads, setPre_Tag_ads] = useState(cardData?.tag_ads);
  const [reel_sponsored, setReel_sponsored] = useState("");
  const [pre_reel_sponsored, setPre_Reel_sponsored] = useState(cardData?.reel_sponsored);
  console.log("pre tag ads ", pre_tag_ads);

  console.log("Sponsoring Items", sponsoring_items);

  console.log("Sponsor Id ", userDetails?.user_id);

  const handleBannerImgChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };
  const handleLedImgChange = (e) => {
    const file = e.target.files[0];
    setLedImage(file);
  };
  const handleLedVidChange = (e) => {
    const file = e.target.files[0];
    setLedVideo(file);
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    // if (Object.keys(errors).length === 0) {
    const formData = new FormData();
    formData.append("sponsor_id", cardData.content_sponsor_id);
    // formData.append("banner_image", bannerImage || "");
    // formData.append("led_image", ledImage || "");
    // formData.append("led_video", ledVideo || "");
    // formData.append("bill_text", "");
    formData.append("sponsored_by", sponsored_by || pre_sponsored_by);
    formData.append("tag_ads", tag_ads || pre_tag_ads);
    formData.append("reel_sponsored", reel_sponsored || pre_reel_sponsored);

    try {
      // Make POST API call
      await dispatch(updateContentSponsoringItem(formData));
      // sessionStorage.setItem(
      //   "successMessage",
      //   "Promotion listed successfully!"
      // );
      // navigate("/events/upcoming_event"); // Replace '/' with the desired route for the home page
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
                      style={{ width: "100%", borderRadius: "15px" }}
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
                    {cardData.content_id.event_start_date}
                  </td>
                  <td>{cardData.content_id.event_end_date}</td>
                </tr>
              </table>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.content_id.title}{" "}
                <img src={heart} alt="" style={{ width: "7%" }} />
              </h4>
              <h4>{cardData.content_id.location}</h4>
              <div className="star d-flex">
                <h5>
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-warning"></i>&nbsp;
                  <i className="bi bi-star-fill text-white"></i>&nbsp;
                  <span className="text-sm text-muted">3482 reviews</span>
                </h5>
              </div>
              <h5>
                <i className="bi bi-cash text-success"></i>&nbsp;&nbsp;
                <span className="text-md">{totalAmount}&lt;</span>
                <br />
                <i className="bi bi-people-fill text-danger"></i>&nbsp;&nbsp;
                <span className="text-md">
                  {cardData.content_id.audience_expected}
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
                    {cardData?.sponsoring_content_items.map((item, index) => (
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
            Add you sponsoring slogan or info
          </h1>
          {/* <h2 className="sponsor-mobile-text">Add Photos</h2> */}
          {/* <p>(atleast 3 photos & 1 video)</p> */}

          {cardData?.sponsoring_content_items.map((item, index) => (
            <div
              key={index}
              className="box1 mt-2 d-flex justify-content-center"
              style={{ gap: "2%" }}
            >
              {item.sponsoring_content_items === "tag_ads" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "40%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add #Ads Text Info</h5>
                    <input
                      type="text"
                      id="title"
                      value={tag_ads || pre_tag_ads}
                      onChange={(e) => setTag_ads(e.target.value)}
                      readOnly={pre_tag_ads ? true : false}
                      className="form-control"
                      placeholder="Enter #Tag Info"
                    />
                  </div>
                </div>
              )}
              {item.sponsoring_content_items === "sponsored_by" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "40%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Sponsored By Text Info</h5>
                    <input
                      type="text"
                      id="title"
                      value={sponsored_by || pre_sponsored_by}
                      onChange={(e) => setSponsored_by(e.target.value)}
                      readOnly={pre_sponsored_by ? true : false}
                      className="form-control"
                      placeholder="Enter #Tag Info"
                    />
                  </div>
                </div>
              )}
              {item.sponsoring_content_items === "reel_sponsored" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "40%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Reels Sponsored Text Info</h5>
                    <input
                      type="text"
                      id="title"
                      value={reel_sponsored || pre_reel_sponsored}
                      onChange={(e) => setReel_sponsored(e.target.value)}
                      readOnly={pre_reel_sponsored ? true : false}
                      className="form-control"
                      placeholder="Enter Reel Information Info"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          {cardData?.sponsoring_content_items.map((item) => (
            <>
              {item.sponsoring_content_items === "banner" &&
                !(bannerImage || apiurl + cardData?.banner_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the Banner
                </div>
              ) : null}
              {item.sponsoring_content_items === "led_screen" &&
                !(ledImage || apiurl + cardData?.led_image) ? (
                <div className="alert alert-danger">
                  Upload an image to be displayed on the LED
                </div>
              ) : null}
              {item.sponsoring_content_items === "led_screen" &&
                !(ledVideo || apiurl + cardData?.led_video) ? (
                <div className="alert alert-danger">
                  Upload a video to be displayed on the LED
                </div>
              ) : null}
            </>
          ))}
          <input
            type="submit"
            className="submit"
            value="List Promotion"
            onClick={handleSubmitClick}
          />

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
        <h2 className="sponsor-mobile-text">{cardData.content_id.title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={apiurl + cardData.content_id.thumbnail1}
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
              {cardData.content_id.audience_expected}&nbsp;&nbsp;
            </h5>
          </div>
          <div className="star d-flex">
            <h5>
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-warning"></i>&nbsp;
              <i className="bi bi-star-fill text-white"></i>&nbsp;
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
                  {cardData.content_id.event_start_date}
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
                  {cardData.content_id.event_end_date}
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
                {cardData.sponsoring_content_items.map((item, index) => (
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
        <p>{cardData.content_id.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default SponsorEventBox;
