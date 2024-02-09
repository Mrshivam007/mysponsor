import React, { useState } from "react";
import "../../ContentCreator/ListContent/form.css";
import { Footer, NavBar } from "../../../components";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { eventReducer } from "../../../redux/reducer/eventReducer";
import { useNavigate } from "react-router-dom";
import { createContent } from "../../../redux/actions/contentAction";

const ListContentForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const animatedComponents = makeAnimated();

  const itemOptions = [
    { value: "tag_ads", label: "#ADS" },
    { value: "sponsored_by", label: "Sponsored By" },
    { value: "reel_sponsored", label: "Reel Sponsored" },
  ];
  const [itemSelection, setItemSelection] = useState([]);

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
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [content_platform, setContentplatform] = useState("");
  const [event_time, setEventTime] = useState("");
  const [price, setPrice] = useState("");
  const [prices, setPrices] = useState("");
  // const [prices, setPrices] = useState({
  //   tag_ads: "",
  //   sponsored_by: "",
  //   reel_sponsored: "",
  // });
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);
  const [thumbnail3, setThumbnail3] = useState(null);
  const [thumbnail1Filename, setThumbnail1Filename] = useState("");
  const [thumbnail2Filename, setThumbnail2Filename] = useState("");
  const [thumbnail3Filename, setThumbnail3Filename] = useState("");
  const [video, setVideo] = useState("");
  const [videoFilename, setVideoFilename] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const { userDetails } = auth;
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [errorMessage, setErrorMessage] = useState("");
  const content = useSelector((state) => state.content);
  const { createContentError, createContentDetails, loading } = content;

  // console.log("This is content details", userDetails);
  // console.log("event error", errors);
  // For each thumbnail, you'll need a separate state and handler

  const generateUniqueFilename = (originalFilename, index) => {
    const extension = originalFilename.split(".").pop();
    const uniqueFilename = `thumbnail${index + 1}_${Date.now()}.${extension}`;
    return uniqueFilename;
  };

  // For each thumbnail, you'll need a separate state and handler
  const handleThumbnail1Change = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setThumbnail1(file);
    setThumbnail1Filename(uniqueFilename); // Save the unique filename in state
  };

  const handleThumbnail2Change = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 1);

    setThumbnail2(file);
    setThumbnail2Filename(uniqueFilename);
  };

  const handleThumbnail3Change = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 2);

    setThumbnail3(file);
    setThumbnail3Filename(uniqueFilename);
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

  const handleSponsoringItemChange = (itemSelection) => {
    let updatedSelectedItems = itemSelection.map((item) => item.value);
    console.log(updatedSelectedItems);
    setItemSelection(updatedSelectedItems);
  };

  const handlePriceChange = (item, price) => {
    const updatedPrices = { ...prices };
    updatedPrices[item] = price;
    setPrices(updatedPrices);
  };

  // const handleSponsoringItemChange = (item) => {
  //   setSelectedItems((prevSelectedItems) => {
  //     if (prevSelectedItems.includes(item)) {
  //       return prevSelectedItems.filter(
  //         (selectedItem) => selectedItem !== item
  //       );
  //     } else {
  //       return [...prevSelectedItems, item];
  //     }
  //   });
  // };

  // const handlePriceChange = (item, value) => {
  //   setPrices((prevPrices) => ({
  //     ...prevPrices,
  //     [item]: value,
  //   }));
  // };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDiscard = () => {
    navigate("/");
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
    if (audience.trim() === "") {
      errorsObj.audience = "audience is required";
    }
    if (selectedCategory === "") {
      errorsObj.content_categories = "Content Category is required";
    }
    if (selectedPlatform === "") {
      errorsObj.content_platform = "Content Platform is required";
    }
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
      const sponsoringItemsData = itemSelection.map((item) => ({
        sponsoring_content_items: item,
        price: prices[item] || null, // handle cases where price might be undefined or null
      }));
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("audience_expected", audience);
      formData.append("content_start_date", startDate);
      formData.append("content_end_date", endDate);
      formData.append("content_time", event_time);
      formData.append(
        "sponsoring_content_items",
        JSON.stringify(sponsoringItemsData)
      );
      formData.append("user_id", userDetails.user_id);
      formData.append("price", price);
      formData.append("content_category", selectedCategory);
      formData.append("content_platform", selectedPlatform);
      // Append thumbnails with different keys
      // formData.append("thumbnail1", thumbnail1, thumbnail1Filename);
      formData.append("thumbnail1", thumbnail1);
      formData.append("thumbnail2", thumbnail2, thumbnail2Filename);
      formData.append("thumbnail3", thumbnail3, thumbnail3Filename);
      formData.append("attach_video", video);
      try {
        // Make POST API call
        await dispatch(createContent(formData));
        // sessionStorage.setItem("successMessage", "Content created successfully!");
        // navigate("/your_content/upcoming_content"); // Replace '/' with the desired route for the home page
      } catch (error) {
        console.log("An error occurred during API calls:", error);
        window.scroll(0, 0);
        setErrorMessage("An error occurred during creating an content");
      }
    } else {
      window.scroll(0, 0);
    }
  };

  useEffect(() => {
    if (createContentDetails) {
      if (createContentDetails.msg == "data posted") {
        console.log("Content created successfully");
        sessionStorage.setItem(
          "successMessage",
          "Content created successfully!"
        );
        navigate("/your_content/upcoming_content"); // Replace '/' with the desired route for the home page
      } else {
        console.log("An error occurred while creating the content");
        window.scroll(0, 0);
        setErrorMessage("An error occurred during creating an content");
      }
    }
    else if (createContentError) {
      console.log("An error occurred while creating the event");
      window.scroll(0, 0);
      setErrorMessage("An error occurred during creating an content");
    }
  }, [createContentDetails, createContentError]);
  return (
    <>
      <div
        className="bg-form"
        style={{
          height: "auto",
          padding: "1%",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
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
        <div className="container event-form px-md-0">
          <div className="row">
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter Content info
                </h1>
                <h2 className="sponsor-mobile-text">Enter Content info</h2>
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
                          placeholder="Enter content title"
                        />
                        {title == "" ? (
                          <p className="error-msg">{errors.title}</p>
                        ) : null}
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
                          <option hidden>Enter Content Category</option>
                          <option value="Video">Video</option>
                          <option value="Post">Post</option>
                        </select>
                        {selectedCategory == "" ? (
                          <p className="error-msg">
                            {errors.content_categories}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setSelectedPlatform(e.target.value);
                          }}
                        >
                          <option hidden>Enter Platform</option>
                          <option value="Youtube">Youtube</option>
                          <option value="Facebook">Facebook</option>
                        </select>
                        {selectedPlatform == "" ? (
                          <p className="error-msg">{errors.content_platform}</p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <div className="row form-group">
                        <div className="col-md-12 mb-3 mb-md-0">
                          {/* <div>
                            <button
                              type="button"
                              style={{
                                background: selectedItems.includes("tag_ads")
                                  ? "#ccc"
                                  : "#fff",
                                border: selectedItems.includes("tag_ads")
                                  ? "2px solid gray"
                                  : "2px solid black",
                              }}
                              onClick={() =>
                                handleSponsoringItemChange("tag_ads")
                              }
                            >
                              #Ads
                            </button>
                            <button
                              type="button"
                              style={{
                                background: selectedItems.includes(
                                  "sponsored_by"
                                )
                                  ? "#ccc"
                                  : "#fff",
                                border: selectedItems.includes("sponsored_by")
                                  ? "2px solid gray"
                                  : "2px solid black",
                              }}
                              onClick={() =>
                                handleSponsoringItemChange("sponsored_by")
                              }
                            >
                              This video is sponsored by
                            </button>
                            <button
                              type="button"
                              style={{
                                background: selectedItems.includes(
                                  "reel_sponsored"
                                )
                                  ? "#ccc"
                                  : "#fff",
                                border: selectedItems.includes("reel_sponsored")
                                  ? "2px solid gray"
                                  : "2px solid black",
                              }}
                              onClick={() =>
                                handleSponsoringItemChange("reel_sponsored")
                              }
                            >
                              Reels Sponsore
                            </button>

                            {selectedItems.map((item) => (
                              <div key={item}>
                                <input
                                  type="number"
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
                          </div> */}
                          <div>
                            <Select
                              closeMenuOnSelect={true}
                              components={animatedComponents}
                              onChange={handleSponsoringItemChange}
                              isMulti
                              options={itemOptions}
                            />
                            {itemSelection.map((item) => (
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
                          {errors.selectedItems && (
                            <p className="error-msg">{errors.selectedItems}</p>
                          )}
                          {prices == "" ? (
                            <p className="error-msg">{errors.prices}</p>
                          ) : null}
                        </div>
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
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter Creator info
                </h1>
                <h2 className="sponsor-mobile-text">Enter Creator info</h2>
                <div className="box1">
                  {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
                  <form action="#" className="contact-form">
                    {/* <div className="row form-group">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label className="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control" />
                                </div>
                            </div> */}

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
                        <input
                          type="text"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="form-control"
                          placeholder="Enter your location"
                        />
                        {location == "" ? (
                          <p className="error-msg">{errors.location}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group gap-3">
                      <div className="col-md-12">
                        <input
                          type="number"
                          id="subject"
                          value={audience}
                          onChange={(e) => setAudienceExpected(e.target.value)}
                          className="form-control"
                          placeholder="Enter expected audience (Channel Subs)"
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
                Enter Content description
              </h1>
              <h2 className="sponsor-mobile-text">Enter Content description</h2>
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
              <h1 className="font-weight-bold d-none d-lg-block">Add Photos</h1>
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
                        <h2 className="my-3">Preview:</h2>
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
                        <h2 className="my-3">Preview:</h2>
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={URL.createObjectURL(thumbnail2)}
                            accept="image/*"
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
                        <h2 className="my-3">Preview:</h2>
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={URL.createObjectURL(thumbnail3)}
                            accept="image/*"
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
                  Add Video Preview:&nbsp;&nbsp;&nbsp;
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
                onClick={handleDiscard}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContentForm;
