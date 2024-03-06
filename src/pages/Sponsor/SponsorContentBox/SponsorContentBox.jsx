import React, { useEffect, useState } from "react";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import banner_preview from "../../../assets/img/Banner/banner-preview-img.png";
import modalBackground from "../../../assets/img/Banner/modal-background.webp";
import Slider from "react-slick";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSponsoringItem, updateContentSponsoringItem } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Carousel, Container, Modal } from "react-bootstrap";

const SponsorButton = ({ item, preview, isSelected, onButtonClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("Sponsoring item details ", item);
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
            {item.sponsoring_items} <br />
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
  const sponsoring_items = cardData?.sponsoring_content_items || [];
  const [bannerImage, setBannerImage] = useState(null);
  const [ledImage, setLedImage] = useState(null);
  const [ledVideo, setLedVideo] = useState(null);
  // const [sponsored_by, setSponsored_by] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pre_sponsored_by, setPre_Sponsored_by] = useState(cardData?.sponsored_by);
  // const [tag_ads, setTag_ads] = useState("");
  const [pre_tag_ads, setPre_Tag_ads] = useState(cardData?.tag_ads);
  // const [reel_sponsored, setReel_sponsored] = useState("");
  const [pre_reel_sponsored, setPre_Reel_sponsored] = useState(cardData?.reel_sponsored);
  const [sponsored_by, setSponsored_by] = useState(null);
  const [sponsored_byFileName, setSponsored_byFileName] = useState(null);
  const [tag_ads, setTag_ads] = useState(null);
  const [tag_adsFileName, setTag_adsFileName] = useState(null);
  const [reel_sponsored, setReel_sponsored] = useState(null);
  const [reel_sponsoredFileName, setReel_sponsoredFileName] = useState(null);
  console.log("pre tag ads ", pre_tag_ads);
  const { SponsoringItemDetails, SponsoringItemError, loading } = sponsor;

  const formattedSponsoringItems = sponsoring_items.map((item) => ({
    sponsoring_items: item.sponsoring_items,
  }));

  console.log("Content Formatting Sponsoring item ", formattedSponsoringItems);

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
    // formData.append("sponsored_by", sponsored_by || pre_sponsored_by);
    // formData.append("tag_ads", tag_ads || pre_tag_ads);
    // formData.append("reel_sponsored", reel_sponsored || pre_reel_sponsored);
    formattedSponsoringItems.forEach((item) => {
      switch (item.sponsoring_items) {
        case "sponsored_by":
          if (sponsored_by != null) {
            formData.append("sponsored_by", sponsored_by, sponsored_byFileName || "");
          }
          break;
        case "tag_ads":
          if (tag_ads != tag_ads) {
            formData.append("tag_ads", tag_ads, tag_adsFileName || "");
          }
          break;
        case "reel_sponsored":
          if (reel_sponsored != null) {
            formData.append("reel_sponsored", reel_sponsored, reel_sponsoredFileName || "");
          }
          break;
        // Add more cases for other sponsoring item types if needed
        default:
          break;
      }
    });

    try {
      // Make POST API call
      await dispatch(updateContentSponsoringItem(formData));
      // sessionStorage.setItem(
      //   "successMessage",
      //   "Promotion listed successfully!"
      // );
      // navigate("/sponsored_content"); // Replace '/' with the desired route for the home page
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

  const generateUniqueFilename = (originalFilename, index) => {
    const extension = originalFilename.split('.').pop();
    const uniqueFilename = `thumbnail${index + 1}_${Date.now()}.${extension}`;
    return uniqueFilename;
  };

  const handleSponsored_byChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setSponsored_by(file);
    setSponsored_byFileName(uniqueFilename); // Save the unique filename in state
  };

  const handletag_adsChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setTag_ads(file);
    setTag_adsFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleReel_SponsoredChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setReel_sponsored(file);
    setReel_sponsoredFileName(uniqueFilename); // Save the unique filename in state
  };

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

  useEffect(() => {
    if (SponsoringItemDetails) {
      if (SponsoringItemDetails.msg == "data put apply") {
        sessionStorage.setItem(
          "successMessage",
          "Promotion listed successfully!"
        );
        navigate("/sponsored_content"); // Replace '/' with the desired route for the home page
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
      <div className="container payments-desktop desktop-view" style={{ paddingBottom: '1%' }}>
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
                    cardData.content_id.thumbnail1,
                    cardData.content_id.thumbnail2,
                    cardData.content_id.thumbnail3,
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
                    {cardData.content_id.posting_date}
                  </td>
                  {/* <td>{cardData.content_end_date}</td> */}
                </tr>
              </table>
            </div>
            <div className="col-6">
              <h4 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                {cardData.content_id.title}{" "}
                {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
              </h4>
              <h4>{cardData.content_id.location}</h4>
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
                  {cardData.content_id.per_video_reach}
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
            Add your sponsoring slogan or info
          </h1>
          <h2 className="sponsor-mobile-text">Update Sponsoring Item</h2>
          {/* <p>(atleast 3 photos & 1 video)</p> */}

          {cardData?.sponsoring_content_items.map((item, index) => (
            <div
              key={index}
              className="box1 mt-2 d-flex justify-content-center"
              style={{ gap: "2%" }}
            >
              {item.sponsoring_items === "tag_ads" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Tag Ads Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handletag_adsChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.tag_ads && tag_ads === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.tag_ads}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {tag_ads ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(tag_ads)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              {item.sponsoring_items === "sponsored_by" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Sponsored_by Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSponsored_byChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.sponsored_by && sponsored_by === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.sponsored_by}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {sponsored_by ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(sponsored_by)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              {item.sponsoring_items === "reel_sponsored" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Reel Sponsored Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleReel_SponsoredChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.reel_sponsored && reel_sponsored === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.reel_sponsored}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {reel_sponsored ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(reel_sponsored)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
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
            <h5 className="font-weight-bold">Content Description: </h5>
            <p>{cardData.content_id.description}</p>
          </div>
        </div>
      </div>
      {/* DESKTOP VIEW END  */}

      {/* MOBILE VIEW */}
      <div className="container mobile-view">
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
        <h2 className="sponsor-mobile-text">{cardData.content_id.title}</h2>
        <div
          className="post-thumb mt-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={cardData.content_id.thumbnail1}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="container">
          <div className="star d-flex pt-3">
            <h5>
              <i className="bi bi-cash text-success"></i>&nbsp;
              {cardData.amount}&nbsp;&nbsp;
              <i className="bi bi-people-fill text-danger"></i>&nbsp;
              {cardData.content_id.per_video_reach}&nbsp;&nbsp;
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
                {cardData.content_id.posting_date}
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
        <div className="container">
          <h2 className="sponsor-mobile-text pl-0">Update Sponsoring Item</h2>
          {/* <p>(atleast 3 photos & 1 video)</p> */}

          {cardData?.sponsoring_content_items.map((item, index) => (
            <div
              key={index}
              className="box1 mt-2 d-flex justify-content-center"
              style={{ gap: "2%" }}
            >
              {item.sponsoring_items === "tag_ads" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Tag Ads Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handletag_adsChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.tag_ads && tag_ads === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.tag_ads}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {tag_ads ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(tag_ads)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              {item.sponsoring_items === "sponsored_by" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "100%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Sponsored_by Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSponsored_byChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.sponsored_by && sponsored_by === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.sponsored_by}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {sponsored_by ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(sponsored_by)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              {item.sponsoring_items === "reel_sponsored" && (
                <div
                  className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                  style={{ width: "50%" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Reel Sponsored Image</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleReel_SponsoredChange}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {cardData?.reel_sponsored && reel_sponsored === null ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={cardData?.reel_sponsored}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    ) : null}
                    {reel_sponsored ? (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          className="mx-auto"
                          src={URL.createObjectURL(reel_sponsored)}
                          alt=""
                          width="200"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="container-md">
          <input
            type="submit"
            className="btn btn-success submit py-1 px-3"
            value="List Promotion"
            onClick={handleSubmitClick}
          />
        </div>
        <h5 className="mt-2 font-weight-bold">Content Description: </h5>
        <p>{cardData.content_id.description}</p>
      </div>
      {/* MOBILE VIEW END */}
    </>
  );
};

export default SponsorEventBox;
