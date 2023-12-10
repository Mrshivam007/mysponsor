import React, { useEffect, useState } from "react";
import "./form.css";
import { Footer, NavBar } from "../../../components";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../../redux/actions/eventAction";

const CCForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [audienceExpected, setAudienceExpected] = useState("");
  const [channelCategory, setChannelCategory] = useState("");
  const [channelName, setChannelName] = useState("");
  const [channelLink, setChannelLink] = useState("");
  const [channelSubs, setChannelSubs] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);
  const [thumbnail3, setThumbnail3] = useState(null);
  const [video, setVideo] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const { userDetails } = auth;
  const navigate = useNavigate();

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
  const handleDiscard = () => {
    navigate("/");
  };
  const validateForm = () => {
    const errorsObj = {};

    if (name.trim() === "") {
      errorsObj.name = "Name is required";
    }
    if (contact.trim() === "") {
      errorsObj.contact = "Contact Detail is required";
    }
    if (email.trim() === "") {
      errorsObj.email = "E-mail is required";
    }
    if (platform.trim() === "") {
      errorsObj.platform = "Platform is required";
    }
    if (audienceExpected.trim() === "") {
      errorsObj.audienceExpected = "Audience Expected is required";
    }
    if (channelCategory.trim() === "") {
      errorsObj.channelCategory = "Channel Category is required";
    }
    if (channelName.trim() === "") {
      errorsObj.channelName = "Channel Name is required";
    }
    if (channelLink.trim() === "") {
      errorsObj.channelLink = "Channel Link is required";
    }
    if (channelSubs.trim() === "") {
      errorsObj.channelSubs = "Subscribers count is required";
    }
    if (description.trim() === "") {
      errorsObj.description = "Description is required";
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
      // if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("user_id", userDetails.user_id);
      formData.append("description", description);
      formData.append("platform", platform);
      formData.append("contact", contact);
      formData.append("email", email);
      formData.append("audience_expected", audienceExpected);
      formData.append("channel_name", channelName);
      formData.append("channel_link", channelLink);
      formData.append("channel_subs", channelSubs);
      formData.append("channel_category", channelCategory);
      // Append thumbnails with different keys
      formData.append("thumbnail1", thumbnail1);
      formData.append("thumbnail2", thumbnail2);
      formData.append("thumbnail3", thumbnail3);
      formData.append("attach_video", video);
      try {
        // Make POST API call
        await dispatch(createEvent(formData));
        sessionStorage.setItem("successMessage", "Class created successfully!");
        navigate("/content/your_event"); // Replace '/' with the desired route for the home page
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
                  Enter Content creator info
                </h1>
                <h2 className="sponsor-mobile-text">
                  Enter Content creator info
                </h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Content creator name"
                        />
                        {name == "" ? (
                          <p className="error-msg">{errors.name}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          value={platform}
                          onChange={(e) => setPlatform(e.target.value)}
                          className="form-control"
                          placeholder="Platform (Youtube,Twitch,etc.)"
                        />
                        {platform == "" ? (
                          <p className="error-msg">{errors.platform}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          id="subject"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className="form-control"
                          placeholder="Contact"
                        />
                        {contact == "" ? (
                          <p className="error-msg">{errors.contact}</p>
                        ) : null}
                      </div>

                      <div className="col-12 col-md-6">
                        <input
                          type="e-mail"
                          id="subject"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="E-mail"
                        />
                        {email == "" ? (
                          <p className="error-msg">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <select className="form-control">
                          <option value="Channel category" hidden>
                            Channel category
                          </option>
                          <option value="--select event category--" disabled>
                            --select event category--
                          </option>
                          <option value="Comedy">Comedy</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Comedy">Comedy</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="number"
                          id="subject"
                          value={audienceExpected}
                          onChange={(e) => setAudienceExpected(e.target.value)}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                        {audienceExpected == "" ? (
                          <p className="error-msg">{errors.audienceExpected}</p>
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
                  Enter platform info
                </h1>
                <h2 className="sponsor-mobile-text">Enter platform info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={channelName}
                          onChange={(e) => setChannelName(e.target.value)}
                          className="form-control"
                          placeholder="Channel name"
                        />
                        {channelName == "" ? (
                          <p className="error-msg">{errors.channelName}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={channelLink}
                          onChange={(e) => setChannelLink(e.target.value)}
                          className="form-control"
                          placeholder="Channel link"
                        />
                        {channelLink == "" ? (
                          <p className="error-msg">{errors.channelLink}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="number"
                          value={channelSubs}
                          onChange={(e) => setChannelSubs(e.target.value)}
                          className="form-control"
                          placeholder="Current subscribers"
                        />
                        {channelSubs == "" ? (
                          <p className="error-msg">{errors.channelSubs}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={audienceExpected}
                          onChange={(e) => setAudienceExpected(e.target.value)}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                        {audienceExpected == "" ? (
                          <p className="error-msg">{errors.audienceExpected}</p>
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
                Enter creator description
              </h1>
              <h2 className="sponsor-mobile-text">Enter creator description</h2>
              <div className="box1 mt-2">
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
              <h2 className="sponsor-mobile-text">Add Photos & Videos</h2>
              <p>(atleast 3 photos & 1 video)</p>
              <div
                className="box1 mt-2 d-flex justify-content-center"
                style={{ gap: "2%" }}
              >
                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add Photo</h5>
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
                    <h5 className="font-weight-bold">Add Photo</h5>
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
                    <h5 className="font-weight-bold">Add Photo</h5>
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
                      <p className="error-msg">{errors.thumbnail3}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="box1 mt-2">
                <h2 className="d-inline font-weight-bold">
                  Add Video &nbsp;&nbsp;&nbsp;&nbsp;
                </h2>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ width: "74%", borderRadius: "0" }}
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
                onClick={handleDiscard}
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

export default CCForm;
