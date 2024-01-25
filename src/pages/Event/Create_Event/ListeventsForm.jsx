import React, { useState } from "react";
import "../../ContentCreator/ListContent/form.css";
import { Footer, NavBar } from "../../../components";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../../redux/actions/eventAction";
import { eventReducer } from "../../../redux/reducer/eventReducer";
import { useNavigate } from "react-router-dom";

const ListeventsForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const [title, setTitle] = useState("");
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
  console.log(userDetails);
  console.log("event error", errors);

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

    if (title.trim() === "") {
      errorsObj.title = "Title is required";
    }
    if (location.trim() === "") {
      errorsObj.location = "Location is required";
    }
    if (startDate.trim() === "") {
      errorsObj.startDate = "startDate is required";
    }
    if (endDate.trim() === "") {
      errorsObj.endDate = "endDate is required";
    }
    // if (sponsoring_item.trim() === '') {
    //   errorsObj.sponsoring_item = 'sponsoring_item is required';
    // }

    if (!selectedItems) {
      errorsObj.selectedItems = "selectedItems is required";
    }
    if (!prices) {
      errorsObj.prices = "prices is required";
    }
    if (audience.trim() === "") {
      errorsObj.audience = "audience is required";
    }
    // if (selectedCategory.trim() === "") {
    //   errorsObj.selectedCategory = "event_categories is required";
    // }
    // if (price.trim() === "") {
    //   errorsObj.price = "price is required";
    // }
    if (description.trim() === "") {
      errorsObj.description = "description is required";
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
    // if (event_time.trim() === '') {
    //   errorsObj.event_time = 'event_time is required';
    // }
    // ... validate other fields similarly
    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      // if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("title", title);

      // Prepare sponsoring items array
      const sponsoringItemsData = selectedItems.map((item) => ({
        sponsoring_items: item,
        price: prices[item] || null,
        is_sponsored: false, // handle cases where price might be undefined or null
      }));
      // formData.append("event_date_time", event_date_time);
      formData.append("event_start_date", startDate);
      formData.append("event_end_date", endDate);
      formData.append("event_time", event_time);
      formData.append("sponsoring_items", JSON.stringify(sponsoringItemsData));
      formData.append("user_id", userDetails.user_id);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("audience_expected", audience);
      // formData.append("price", price);
      formData.append("event_category", selectedCategory);
      // Append thumbnails with different keys
      formData.append("thumbnail1", thumbnail1);
      formData.append("thumbnail2", thumbnail2);
      formData.append("thumbnail3", thumbnail3);
      formData.append("attach_video", video);
      try {
        // Make POST API call
        await dispatch(createEvent(formData));
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
      <NavBar />
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
                  Enter event info
                </h1>
                <h2 className="sponsor-mobile-text">Enter event info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="form-control"
                          placeholder="Enter Title"
                        />
                        {title == "" ? (
                          <p className="error-msg">{errors.title}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="form-control"
                          placeholder="Enter Location"
                        />
                        {location == "" ? (
                          <p className="error-msg">{errors.location}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12 mb-3 mb-md-0">
                        <div>
                          <button
                            type="button"
                            style={{
                              background: "#fff",
                              border: "2px solid black",
                            }}
                            onClick={handleToggleDropdown}
                          >
                            Add Sponsoring Item
                          </button>

                          {showDropdown && (
                            <div>
                              <select
                                multiple
                                value={selectedItems}
                                onChange={handleSponsoringItemChange}
                                className="form-control"
                                id="sponsoring_item"
                                placeholder="Enter Sponsoring Item"
                              >
                                <option value="banner">Banner</option>
                                <option value="led_screen">LED Screen</option>
                                <option value="bill_board">Billboard</option>
                              </select>

                              {selectedItems.map((item) => (
                                <div key={item}>
                                  <input
                                    type="text"
                                    value={prices[item]}
                                    onChange={(e) =>
                                      handlePriceChange(item, e.target.value)
                                    }
                                    className="form-control my-1"
                                    placeholder={`Enter ${item.replace(
                                      "_",
                                      " "
                                    )} Price`}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {errors.selectedItems && (
                          <p className="error-msg">{errors.selectedItems}</p>
                        )}
                        {prices == "" ? (
                          <p className="error-msg">{errors.prices}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-6">
                        <label className="font-weight-bold">Start Date</label>
                        <input
                          type="date"
                          id="start-date"
                          onChange={(e) => setStartDate(e.target.value)}
                          className="form-control"
                        />
                        {startDate == "" ? (
                          <p className="error-msg">{errors.startDate}</p>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <label className="font-weight-bold">End Date</label>
                        <input
                          type="date"
                          id="subject"
                          onChange={(e) => setEndDate(e.target.value)}
                          className="form-control"
                        />
                        {endDate == "" ? (
                          <p className="error-msg">{errors.endDate}</p>
                        ) : null}
                      </div>
                    </div>
                    <p class="error-msg">
                      **Note: If your Event is of a single day then select the
                      same start date and end date.**
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter organizer info
                </h1>
                <h2 className="sponsor-mobile-text">Enter organizer info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
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
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                          }}
                        >
                          <option hidden>Enter Event Category</option>
                          <option value="music">Music</option>
                          <option value="dance">Dance</option>
                          <option value="comedy">comedy</option>
                          <option value="music">music</option>
                          <option value="dance">dance</option>
                          <option value="festival">festival</option>
                          <option value="party">party</option>
                          <option value="concerts">concerts</option>
                          <option value="promotional">promotional</option>
                          <option value="sports">sports</option>
                          <option value="motivational">Motivational</option>
                        </select>
                        {selectedCategory == "" ? (
                          <p className="error-msg">{errors.selectedCategory}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          value={audience}
                          onChange={(e) => setAudienceExpected(e.target.value)}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                        {audience == "" ? (
                          <p className="error-msg">{errors.audience}</p>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <h1 className="font-weight-bold d-none d-lg-block">
                Enter event description
              </h1>
              <h2 className="sponsor-mobile-text">Enter event description</h2>
              <div className="box1 mt-2 p-3">
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description (100 words)"
                  col="30"
                  rows="5"
                ></textarea>
                {description == "" ? (
                  <p className="error-msg">{errors.description}</p>
                ) : null}
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
              <div className="box1 form-photos-box mt-2 d-flex justify-content-center p-3">
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-2">
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
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={URL.createObjectURL(thumbnail1)}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      </div>
                    )}
                    {!thumbnail1 ? (
                      <p className="error-msg">{errors.thumbnail1}</p>
                    ) : null}
                  </div>
                </div>
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-2">
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
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={URL.createObjectURL(thumbnail2)}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      </div>
                    )}
                    {!thumbnail2 ? (
                      <p className="error-msg">{errors.thumbnail2}</p>
                    ) : null}
                  </div>
                </div>
                <div className="box photo-box bg-white d-flex justify-content-center align-items-start p-2">
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
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={URL.createObjectURL(thumbnail3)}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      </div>
                    )}
                    {!thumbnail3 ? (
                      <p className="error-msg">{errors.thumbnail1}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="box1 mt-2">
                <h4 className="d-inline font-weight-bold">
                  Add Video:&nbsp;&nbsp;&nbsp;
                </h4>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ width: "50%", borderRadius: "0" }}
                />
                {video && (
                  <div className="d-flex align-items-center justify-content-center flex-column mt-3">
                    <h2>Preview:</h2>
                    <div
                      className="post-thumb p-3"
                      style={{
                        width: "50vw",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    >
                      <video
                        src={URL.createObjectURL(video)}
                        alt="Preview"
                        autoPlay
                        loop
                        style={{ width: "100%", height: "auto" }}
                      ></video>
                    </div>
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

export default ListeventsForm;
