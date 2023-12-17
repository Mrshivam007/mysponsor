import React, { useState } from "react";
import "../../ContentCreator/ListContent/form.css";
import { Footer, NavBar } from "../../../components";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../../redux/actions/eventAction";
import { createSponsor } from "../../../redux/actions/sponsorAction";
import { eventReducer } from "../../../redux/reducer/eventReducer";
import { useLocation, useNavigate } from "react-router-dom";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";

const SponsorEventForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const [title, setTitle] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [event_date_time, setEventDateTime] = useState("");
  const [sponsoring_item, setSponsoringItem] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [audience, setAudienceExpected] = useState("");
  const [event_categories, setEventCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [event_time, setEventTime] = useState("");
  const [price, setPrice] = useState("");
  const [prices, setPrices] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);
  const [thumbnail3, setThumbnail3] = useState(null);
  const [video, setVideo] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const { userDetails } = auth;
  const navigate = useNavigate(); // Initialize useNavigate hook
  console.log(userDetails.user_id);
  console.log("event error", errors);
  const locationState = useLocation();
  const { cardData, sponsoring_items, sponsoring_price } = locationState.state;
  console.log(cardData);
  console.log(sponsoring_items);
  console.log(sponsoring_price);
// Use the values as needed in your component



  // For each thumbnail, you'll need a separate state and handler
  const handleThumbnail1Change = (e) => {
    const file = e.target.files[0];
    setThumbnail1(file);
  };

  const handleThumbnail2Change = (e) => {
    const file = e.target.files[0];
    setThumbnail2(file);
  };

  const handleThumbnail3Change = (e) => {
    const file = e.target.files[0];
    setThumbnail3(file);
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const updatePrices = (selected) => {
    const updatedPrices = { ...prices };

    selected.forEach((item) => {
      if (!updatedPrices[item]) {
        updatedPrices[item] = "";
      }
    });

    setPrices(updatedPrices);
  };

  const handleSponsoringItemChange = (e) => {
    const { value } = e.target;
    let updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(value)) {
      updatedSelectedItems = updatedSelectedItems.filter(
        (item) => item !== value
      );
    } else {
      updatedSelectedItems.push(value);
    }

    setSelectedItems(updatedSelectedItems);
  };

  const handlePriceChange = (item, price) => {
    const updatedPrices = { ...prices };
    updatedPrices[item] = price;
    setPrices(updatedPrices);
  };

  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const validateForm = () => {
    const errorsObj = {};

    if (businessName.trim() === "") {
      errorsObj.businessName = "businessName is required";
    }
    if (businessType.trim() === "") {
      errorsObj.businessType = "businessType is required";
    }
    if (businessContact.trim() === "") {
      errorsObj.businessContact = "businessContact is required";
    }
    if (!thumbnail1) {
      errorsObj.thumbnail1 = "thumbnail1 is required";
    }
    if (!thumbnail2) {
      errorsObj.thumbnail2 = "thumbnail2 is required";
    }
    if (!thumbnail3) {
      errorsObj.thumbnail3 = "thumbnail3 is required";
    }
    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      const formData = new FormData();
      formData.append("sponsor_user_id", userDetails.user_id);
      formData.append("event_user_id", cardData.user_id);
      formData.append("event_id", cardData.event_id);
      formData.append("title", cardData.title);
      formData.append("description", cardData.description);
      formData.append("sponsoring_items", JSON.stringify(sponsoring_items) );
      formData.append("business_name", businessName );
      formData.append("business_type", businessType );
      formData.append("contact_no", businessContact );
      formData.append("thumbnail1", thumbnail1);
      formData.append("thumbnail2", thumbnail2);
      formData.append("thumbnail3", thumbnail3);
      formData.append("attach_video", video);
      // formData.append("event_date_time", event_date_time);
    //   formData.append("event_start_date", startDate);
    //   formData.append("event_end_date", endDate);
    //   formData.append("event_time", event_time);
    // //   formData.append("sponsoring_items", JSON.stringify(sponsoringItemsData));
    //   formData.append("user_id", userDetails.user_id);
    //   formData.append("description", description);
    //   formData.append("location", location);
    //   formData.append("audience_expected", audience);
    //   // formData.append("price", price);
    //   formData.append("event_category", selectedCategory);
    //   // Append thumbnails with different keys
      try {
        // Make POST API call
        await dispatch(createSponsor(formData));
        sessionStorage.setItem("successMessage", "Class created successfully!");
        navigate("/events/upcoming_event"); // Replace '/' with the desired route for the home page
      } catch (error) {
        console.log("An error occurred during API calls:", error);
      }
    } else {
      window.scroll(0, 0);
    }
  };
  return (
    <>
      <SponsorNavbar />
      <div
        className="bg-form"
        style={{
          height: "auto",
          padding: "1%",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        <div className="container event-form px-md-0">
          <div className="row">
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Event Information
                </h1>
                <h2 className="sponsor-mobile-text">Enter event info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                      <label className="font-weight-bold">Event Title</label>
                        <input
                          type="text"
                          id="title"
                          value={cardData.title}
                        //   onChange={(e) => setTitle(e.target.value)}
                          className="form-control"
                        //   placeholder="Enter Title"
                        readOnly
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                      <label className="font-weight-bold">Event Location</label>
                        <input
                          type="text"
                          id="location"
                          value={cardData.location}
                          className="form-control"
                          readOnly
                        />
                      </div>
                    </div>


                      <div className="row form-group">
                      <div className="col-md-12">
                      <label className="font-weight-bold">Event Sponsoring Item</label>
                        <input
                          type="text"
                          id="location"
                          value={sponsoring_items}
                          className="form-control"
                          readOnly
                        />
                      </div>
                    </div>
          

                    <div className="row form-group">
                      <div className="col-6">
                        <label className="font-weight-bold">Start Date</label>
                        <input
                          type="date"
                          id="start-date"
                          value={cardData.event_start_date}
                          className="form-control"
                          readOnly
                        />
                      </div>
                      <div className="col-6">
                        <label className="font-weight-bold">End Date</label>
                        <input
                          type="date"
                          id="start-date"
                          value={cardData.event_end_date}
                          className="form-control"
                          readOnly
                        />
                        {endDate == "" ? (
                          <p className="error-msg">{errors.endDate}</p>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter Sponsor Info
                </h1>
                <h2 className="sponsor-mobile-text">Enter organizer info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                      <label className="font-weight-bold">Your Name</label>
                        <input
                          type="text"
                          id="subject"
                          value={`${userDetails.firstname} ${userDetails.lastname}`}
                          className="form-control"
                          placeholder="Organiser name"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                      <label className="font-weight-bold">Your Mail</label>
                        <input
                          type="email"
                          id="email"
                          value={userDetails.email}
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="form-control"
                          placeholder="Enter Business Name"
                        />
                      </div>
                    </div>
                    {!businessName ? (
                      <p className="error-msg">{errors.businessName}</p>
                    ) : null}
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="type"
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="form-control"
                          placeholder="Enter Business Type"
                        />
                      </div>
                    </div>
                    {!businessType ? (
                      <p className="error-msg">{errors.businessType}</p>
                    ) : null}
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="number"
                          id="number"
                          value={businessContact}
                          onChange={(e) => setBusinessContact(e.target.value)}
                          className="form-control"
                          placeholder="Enter Contact Number"
                        />
                      </div>
                    </div>
                    {!businessContact ? (
                      <p className="error-msg">{errors.businessContact}</p>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <h1 className="font-weight-bold d-none d-lg-block">
                Add Photos & Videos
              </h1>
              <h2 className="sponsor-mobile-text">Add Photos</h2>
              <p>(atleast 3 photos & 1 video)</p>
              <div
                className="box1 mt-2 d-flex justify-content-center"
                style={{ gap: "2%" }}
              >
                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add primary thumbnail</h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnail1Change}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {thumbnail1 && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          src={URL.createObjectURL(thumbnail1)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {!thumbnail1 ? (
                      <p className="error-msg">{errors.thumbnail1}</p>
                    ) : null}
                  </div>
                </div>
                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">
                      Add secondary thumbnail
                    </h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnail2Change}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {thumbnail2 && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          src={URL.createObjectURL(thumbnail2)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {!thumbnail2 ? (
                      <p className="error-msg">{errors.thumbnail2}</p>
                    ) : null}
                  </div>
                </div>
                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">
                      Add secondary thumbnail
                    </h5>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnail3Change}
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                    {thumbnail3 && (
                      <div>
                        <h2>Preview:</h2>
                        <img
                          src={URL.createObjectURL(thumbnail3)}
                          alt="Preview"
                          width="200"
                        />
                      </div>
                    )}
                    {!thumbnail3 ? (
                      <p className="error-msg">{errors.thumbnail1}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="box1 mt-2">
                <h3 className="d-inline font-weight-bold">
                  Add Video Preview:&nbsp;&nbsp;&nbsp;
                </h3>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ width: "50%", borderRadius: "0" }}
                />
                {video && (
                  <div>
                    <h2>Preview:</h2>
                    <img
                      src={URL.createObjectURL(video)}
                      alt="Preview"
                      width="200"
                    />
                  </div>
                )}
              </div>
              <input
                type="submit"
                className="submit"
                value="List Event"
                onClick={handleSubmitClick}
              />
              <button
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate("/")}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsorEventForm;
