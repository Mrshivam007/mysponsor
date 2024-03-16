import React, { useEffect, useRef, useState } from "react";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
import noCover from "../../../assets/img/logo/logo.png";
import noLogo from "../../../assets/img/your_logo.webp";
import profilebg from "../../../assets/img/profileBG.jpg";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Tab, Tabs } from "react-bootstrap";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createContentProfile,
  createEventProfile,
  createSponsorProfile,
  getContentProfile,
  getEventProfile,
  getSponsorProfile,
} from "../../../redux/actions/profileAction";
const ContentProfileInfo = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.sponsorProfile);
  useEffect(() => {
    dispatch(getContentProfile());
  }, []);

  const animatedComponents = makeAnimated();

  // const itemOptions = [
  //   { value: "Health Care", label: "Health Care" },
  //   { value: "Fashion", label: "Fashion" },
  //   { value: "Sports", label: "Sports" },
  //   { value: "Food", label: "Food" },
  //   { value: "Travel", label: "Travel" },
  //   { value: "Technology", label: "Technology" },
  //   { value: "Lifestyle", label: "Lifestyle" },
  //   { value: "Family", label: "Family" },
  //   { value: "Gaming", label: "Gaming" },
  //   { value: "Finance", label: "Finance" }
  // ];

  const [itemSelection, setItemSelection] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [itemOptions, setItemOptions] = useState([
    { value: "Health Care", label: "Health Care" },
    { value: "Fashion", label: "Fashion" },
    { value: "Sports", label: "Sports" },
    { value: "Food", label: "Food" },
    { value: "Travel", label: "Travel" },
    { value: "Technology", label: "Technology" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Family", label: "Family" },
    { value: "Gaming", label: "Gaming" },
    { value: "Finance", label: "Finance" },
  ]);

  console.log("Sponsor Profile ", profileDetails);
  const [editable, setEditable] = useState(false); // State to track whether editing mode is enabled

  const handleInputChange = (e) => {
    setBusinessName(e.target.value);
  };

  const handleEdit = () => {
    setEditable(true); // Enable editing mode
  };

  const handleSave = () => {
    // Here you can save the changes, for now, let's just log the updated businessName
    console.log("Saved:", businessName);
    setEditable(false); // Disable editing mode after saving
  };

  const [profile, setProfile] = useState(null);
  const [profileFileName, setProfileFileName] = useState(null);
  const [cover, setCover] = useState(null);
  const [coverFileName, setCoverFileName] = useState(null);
  const [logo, setLogo] = useState(null);
  const [logoFileName, setLogoFileName] = useState(null);

  const generateUniqueFilename = (originalFilename, index) => {
    const extension = originalFilename.split(".").pop();
    const uniqueFilename = `thumbnail${index + 1}_${Date.now()}.${extension}`;
    return uniqueFilename;
  };

  const hiddenFileInput1 = useRef(null);
  const hiddenFileInput2 = useRef(null);
  const hiddenFileInput3 = useRef(null);

  const handleProfileClick = (e) => {
    hiddenFileInput2.current.click();
  };

  const handleCoverClick = (e) => {
    hiddenFileInput1.current.click();
  };

  const handleLogoClick = (e) => {
    hiddenFileInput3.current.click();
  };

  // For each thumbnail, you'll need a separate state and handler
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setProfile(file);
    setProfileFileName(uniqueFilename); // Save the unique filename in state
  };
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setCover(file);
    setCoverFileName(uniqueFilename); // Save the unique filename in state
  };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setLogo(file);
    setLogoFileName(uniqueFilename); // Save the unique filename in state
  };

  const [businessType, setBusinessType] = useState("");
  const [contact, setContact] = useState("");
  const [ytVideoType, setYtVideoType] = useState("");
  const [subscriber, setSubscriber] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [perVideoReach, setPerVideoReach] = useState("");
  const [instaFollowers, setInstaFollowers] = useState("");
  const [instaPostType, setInstaPostType] = useState("");
  const [instaPerPostLink, setInstaPerPostLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [faceFollowers, setFaceFollowers] = useState("");
  const [facePostType, setFacePostType] = useState("");
  const [perFacePostLink, setPerFacePostLink] = useState("");
  const [faceLink, setfaceLink] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [collaborations, setCollaborations] = useState([]);
  const [youtubeData, setYoutubeData] = useState([]);
  const [instagramData, setInstagramData] = useState([]);
  const [facebookData, setFacebookData] = useState([]);

  useEffect(() => {
    if (profileDetails?.contentDetails?.channel_name) {
      setBusinessName(profileDetails.contentDetails.channel_name);
    }
    // Initialize collaborations state with data from profileDetails
    if (profileDetails?.contentDetails?.past_company) {
      setCollaborations(profileDetails.contentDetails.past_company);
    }
    if (profileDetails?.contentDetails?.profile_pic) {
      setProfile(profileDetails.contentDetails.profile_pic);
    }
    if (profileDetails?.contentDetails?.cover_page) {
      setCover(profileDetails.contentDetails.cover_page);
    }
    if (profileDetails?.contentDetails?.channel_logo) {
      setLogo(profileDetails.contentDetails.channel_logo);
    }
    if (profileDetails?.contentDetails?.contact_no) {
      setContact(profileDetails.contentDetails.contact_no);
    }
    if (profileDetails?.contentDetails?.youtube) {
      setYoutubeData(profileDetails.contentDetails.youtube);
    }
    if (profileDetails?.contentDetails?.instagram) {
      setInstagramData(profileDetails.contentDetails.instagram);
    }
    if (profileDetails?.contentDetails?.facebook) {
      setFacebookData(profileDetails.contentDetails.facebook);
    }
    if (profileDetails?.contentDetails?.recommendation) {
      let recommendationItems;
      if (Array.isArray(profileDetails.contentDetails.recommendation)) {
        // If multiple recommendation items, map them to objects
        recommendationItems = profileDetails.contentDetails.recommendation.map(
          (item) => ({
            label: item,
            value: item,
          })
        );
      } else {
        // If only one recommendation item, create an array with one object
        recommendationItems = [
          {
            label: profileDetails.contentDetails.recommendation,
            value: profileDetails.contentDetails.recommendation,
          },
        ];
      }
      setItemSelection(recommendationItems);

      // Merge recommendation data with itemOptions
      setItemOptions((prevOptions) => [
        ...prevOptions,
        ...recommendationItems.filter(
          (item) => !prevOptions.some((option) => option.value === item.value)
        ),
      ]);
    }

    // if (profileDetails?.contentDetails?.recommendation) {
    //   const recommendationArray = profileDetails.contentDetails.recommendation.map(item => JSON.parse(item));
    //   const selectedItems = recommendationArray.map(item => ({ value: item }));
    //   console.log("get select item ", selectedItems);
    //   setItemSelection(selectedItems);
    // }
  }, [profileDetails]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newCollaborations = [...collaborations];
    newCollaborations[index][name] = value;
    setCollaborations(newCollaborations);
  };

  const handleYoutubeChange = (index, field, value) => {
    const newYoutubeData = [...youtubeData];
    newYoutubeData[index][field] = value;
    setYoutubeData(newYoutubeData);
  };

  const handleInstagramChange = (index, field, value) => {
    const newInstagramData = [...instagramData];
    newInstagramData[index][field] = value;
    setInstagramData(newInstagramData);
  };

  const handleFacebookChange = (index, field, value) => {
    const newFacebookData = [...facebookData];
    newFacebookData[index][field] = value;
    setFacebookData(newFacebookData);
  };

  const handleAddYoutube = (e) => {
    e.preventDefault();
    setYoutubeData([
      ...youtubeData,
      {
        video_type: "",
        subscribers: "",
        per_video_reach: "",
        youtube_link: "",
        location: "",
        description: "",
      },
    ]);
  };
  const handleAddInstagram = (e) => {
    e.preventDefault();
    setInstagramData([
      ...instagramData,
      {
        post_type: "",
        followers: "",
        per_video_reach: "",
        instagram_link: "",
        location: "",
        description: "",
      },
    ]);
  };
  const handleAddFacebook = (e) => {
    e.preventDefault();
    setFacebookData([
      ...facebookData,
      {
        post_type: "",
        followers: "",
        per_video_reach: "",
        facebook_link: "",
        location: "",
        description: "",
      },
    ]);
  };

  const handleAddMore = (e) => {
    e.preventDefault();
    setCollaborations([
      ...collaborations,
      {
        company_name: "",
        collaboration_type: "",
        partnership_duration: "",
        description_activity: "",
      },
    ]);
  };

  console.log(profileDetails?.ContentDetails?.business_name);

  // const handlePfpChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfilePic(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfilePic(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleRecommendationChange = (itemSelection) => {
  //   let updatedSelectedItems = itemSelection.map((item) => item.value);
  //   console.log(updatedSelectedItems);
  //   // setItemSelection(updatedSelectedItems);
  // };

  const handleRecommendationChange = (selectedItems) => {
    setItemSelection(selectedItems);
  };

  // const youtubeData = [
  //   {
  //     "video_type": ytVideoType || profileDetails?.contentDetails?.youtube && profileDetails.contentDetails.youtube[0]?.video_type || null,
  //     "subscribers": subscriber || profileDetails?.contentDetails?.youtube && profileDetails.contentDetails.youtube[0]?.subscribers || null,
  //     "youtube__link": youtubeLink || profileDetails?.contentDetails?.youtube && profileDetails.contentDetails.youtube[0]?.youtube__link || null,
  //     "per_video_reach": perVideoReach || profileDetails?.contentDetails?.youtube && profileDetails.contentDetails.youtube[0]?.per_video_reach || null,
  //   },
  // ];

  const youtubeDataString = JSON.stringify(youtubeData);
  const instagramDataString = JSON.stringify(instagramData);
  const facebookDataString = JSON.stringify(facebookData);

  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  // console.log("Sponsor Profile ",userDetails);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const recommendationItemsData = itemSelection.map((item) => ({
      item,
    }));
    const selectedItemsValues = itemSelection.map((item) => item);

    formData.append("user_id", userDetails?.user_id);
    if (profile) {
      if (typeof profile === "string") {
        // Append the profile URL directly
        formData.append("profile_pic", profile); // Change the field name as needed
      } else {
        // Append the profile file with its name
        formData.append("profile_pic", profile, profileFileName); // Change the field name as needed
      }
    }
    if (cover) {
      if (typeof cover === "string") {
        // Append the cover URL directly
        formData.append("cover_page", cover); // Change the field name as needed
      } else {
        // Append the cover file with its name
        formData.append("cover_page", cover, coverFileName); // Change the field name as needed
      }
    }
    if (logo) {
      if (typeof logo === "string") {
        // Append the logo URL directly
        formData.append("channel_logo", logo); // Change the field name as needed
      } else {
        // Append the logo file with its name
        formData.append("channel_logo", logo, logoFileName); // Change the field name as needed
      }
    }
    // if (cover) {
    //   formData.append("cover_page", cover, coverFileName);
    // }

    // if (logo) {
    //   formData.append("channel_logo", logo, logoFileName);
    // }
    formData.append("channel_name", businessName);
    formData.append(
      "contact_no",
      profileDetails?.contentDetails?.contact_no || contact
    );
    // formData.append("youtube", youtubeDataString)
    formData.append("youtube", JSON.stringify(youtubeData));
    formData.append("instagram", JSON.stringify(instagramData));
    formData.append("facebook", JSON.stringify(facebookData));
    // formData.append("instagram", instagramDataString)
    // formData.append("facebook", facebookDataString)
    // itemSelection.forEach((item, index) => {
    //   formData.append('recommendation', item);
    // });
    const modifiedSelection = itemSelection.map((item) =>
      item.value.replace(/"/g, "")
    );

    // Then append the modifiedSelection to FormData
    formData.append("recommendation", JSON.stringify(modifiedSelection));
    const pastCompanyData = collaborations.map((collaboration) => ({
      company_name: collaboration.company_name,
      collaboration_type: collaboration.collaboration_type,
      partnership_duration: collaboration.partnership_duration,
      description_activity: collaboration.description_activity,
    }));

    formData.append("past_company", JSON.stringify(pastCompanyData));

    try {
      // Make POST API call
      await dispatch(createContentProfile(formData));
      console.log("Form Data ", formData);
      sessionStorage.setItem("successMessage", "Class created successfully!");
      await dispatch(getContentProfile());
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };

  console.log(profileDetails?.contentDetails?.contact_no);
  console.log("getting profile pic ", profile);

  return (
    <>
      <div className="container-xl px-0">
        <div className="row">
          {/* <div className="desktop-view">
            <div
              className="box1 form-photos-box mt-2 d-flex justify-content-center p-3"
              style={{ width: "100%" }}
            >
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2 mx-auto"
                      src={
                        profile
                          ? typeof profile === "string"
                            ? profile
                            : URL.createObjectURL(profile)
                          : noProfilepic
                      }
                      // src={URL.createObjectURL(profile)}
                      alt="Profile Pic"
                    />
                    <div className="small font-italic text-muted mb-4">
                      Your Profile Image
                    </div>
                    <input
                      className="mx-auto w-75"
                      type="file"
                      accept="image/*"
                      onChange={handleProfileChange}
                      // disabled={!editable}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Cover Page</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile mb-2 mx-auto"
                      style={{ width: "100%" }}
                      // src={cover ? URL.createObjectURL(cover) : noCover}
                      src={
                        cover
                          ? typeof cover === "string"
                            ? cover
                            : URL.createObjectURL(cover)
                          : noCover
                      }
                      alt="Profile Pic"
                    />
                    <div className="small font-italic text-muted mb-4">
                      Your Channel Cover Image
                    </div>
                    <input
                      className="mx-auto w-75"
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      // disabled={!editable} // Disable input field when not in editing mode
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2 mx-auto"
                      // src={logo ? URL.createObjectURL(logo) : noLogo}
                      src={
                        logo
                          ? typeof logo === "string"
                            ? logo
                            : URL.createObjectURL(logo)
                          : noLogo
                      }
                      alt="Profile Pic"
                    />

                    <div className="small font-italic text-muted mb-4">
                      Your Channel Logo
                    </div>
                    <input
                      className="mx-auto w-75"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      // disabled={!editable} // Disable input field when not in editing mode
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* PROFILE PICTURE SECTION */}
          <div className="col-12">
            {/* <div className="mobile-view"> */}
            <div className="container">
              <div className="row py-5">
                <div className="col-12 mx-auto p-0">
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div
                      className="px-4 pt-0 pb-4 cover"
                      style={{
                        backgroundImage: `url(${
                          cover
                            ? typeof cover === "string"
                              ? cover
                              : URL.createObjectURL(cover)
                            : profilebg
                        })`,
                      }}
                    >
                      <div
                        className="edit-cover d-flex justify-content-end"
                        style={{ padding: "3%" }}
                      >
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#ffffff4a",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 2px 20px -4px rgba(0, 0, 0, 0.25)",
                            fontSize: "x-large",
                            marginRight: "-8%",
                            padding: "2% 5%",
                          }}
                          onClick={handleCoverClick}
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCoverChange}
                          ref={hiddenFileInput1}
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="media align-items-end profile-head">
                        <div className="profile mr-3">
                          <img
                            src={
                              profile
                                ? typeof profile === "string"
                                  ? profile
                                  : URL.createObjectURL(profile)
                                : noProfilepic
                            }
                            alt="..."
                            width="130"
                            className="rounded mb-2 img-thumbnail"
                          />
                          {/* <button className="btn btn-outline-dark btn-sm btn-block">
                            Edit profile
                          </button> */}
                          <button
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={handleProfileClick}
                          >
                            Edit profile
                          </button>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfileChange}
                            ref={hiddenFileInput2}
                            style={{ display: "none" }}
                          />
                          {/* <input type="file" /> */}
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">
                            {userDetails?.firstname}&nbsp;
                            {userDetails?.lastname}
                          </h5>
                          <p className="small mb-0">{businessName}</p>
                        </div>
                      </div>
                    </div>
                    <div className="container d-flex flex-column align-items-end">
                      {/* <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">215</h5>
                          <small className="text-muted">
                            <i className="fas fa-image mr-1"></i>Photos
                          </small>
                        </li>
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">745</h5>
                          <small className="text-muted">
                            <i className="fas fa-user mr-1"></i>Followers
                          </small>
                        </li>
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">340</h5>
                          <small className="text-muted">
                            <i className="fas fa-user mr-1"></i>Following
                          </small>
                        </li>
                      </ul> */}
                      {/* <h4 className="mt-0 mb-0">Mark Williams</h4> */}
                      {/* <p className="small mb-4">New York</p> */}
                    </div>
                    <div className="px-4 py-3 mt-5">
                      {/* <h5 className="mb-0">About</h5>
                      <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">Web Developer</p>
                        <p className="font-italic mb-0">Lives in New York</p>
                        <p className="font-italic mb-0">Photographer</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* PROFILE PICTURE SECTION */}
          <div className="container">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={userDetails?.firstname}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userDetails?.lastname}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" for="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={userDetails?.email}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Channel Name
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="text"
                      placeholder="Enter your organization name"
                      value={businessName}
                      onChange={handleInputChange}
                      // disabled={!editable} // Disable input field when not in editing mode
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" for="inputEmailAddress">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={contact}
                      // disabled={!editable} // Disable input field when not in editing mode
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" for="inputEmailAddress">
                      Recommendation
                    </label>
                    <Select
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      onChange={handleRecommendationChange}
                      isMulti
                      options={itemOptions}
                      value={itemSelection}
                    />
                  </div>
                  <div
                    className="container mb-4 mt-4"
                    style={{ textAlign: "center" }}
                  >
                    <label
                      className="large mb-2"
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      "Past Work Experience" or "Collaborative Partnerships"
                    </label>
                  </div>
                  <div>
                    {collaborations.map((collaboration, index) => (
                      <div key={index}>
                        <div
                          className="box1 form-photos-box mt-2 justify-content-center p-3"
                          style={{ width: "100%", zIndex: "0" }}
                        >
                          <label
                            className="large mb-2"
                            style={{ fontWeight: "bold", fontSize: "18px" }}
                          >
                            Enter Previous Collaboration
                          </label>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                htmlFor={`companyName_${index}`}
                              >
                                Company Name
                              </label>
                              <input
                                className="form-control"
                                id={`companyName_${index}`}
                                type="text"
                                placeholder="Enter company name"
                                value={collaboration.company_name || ""}
                                onChange={(e) => handleChange(index, e)}
                                name="company_name"
                                // disabled={!editable} // Disable input field when not in editing mode
                              />
                            </div>
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                htmlFor={`collaborationType_${index}`}
                              >
                                Collaboration Type
                              </label>
                              <input
                                className="form-control"
                                id={`collaborationType_${index}`}
                                type="text"
                                placeholder="Enter collaboration type"
                                value={collaboration.collaboration_type || ""}
                                onChange={(e) => handleChange(index, e)}
                                name="collaboration_type"
                                // disabled={!editable} // Disable input field when not in editing mode
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="small mb-1"
                              htmlFor={`partnershipDuration_${index}`}
                            >
                              Partnership Duration
                            </label>
                            <input
                              className="form-control"
                              id={`partnershipDuration_${index}`}
                              type="text"
                              placeholder="Enter partnership duration"
                              value={collaboration.partnership_duration || ""}
                              onChange={(e) => handleChange(index, e)}
                              name="partnership_duration"
                              // disabled={!editable} // Disable input field when not in editing mode
                            />
                          </div>
                          <div className="form-group">
                            <label
                              className="small mb-1"
                              htmlFor={`description_${index}`}
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id={`description_${index}`}
                              type="text"
                              placeholder="Enter description"
                              value={collaboration.description_activity || ""}
                              onChange={(e) => handleChange(index, e)}
                              name="description_activity"
                              col="30"
                              rows="5"
                              // disabled={!editable} // Disable input field when not in editing mode
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={handleAddMore}
                    >
                      Add Experience
                    </button>
                    {/* <button className="btn btn-primary" onClick={handleSubmitClick}>Submit</button> */}
                  </div>
                  <div className="my-3">
                    <h2>Social Media Container</h2>
                    <div className="container p-0 my-3">
                      <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="profile" title="Youtube">
                          {/* YouTube section */}
                          <div>
                            <h2>YouTube Data</h2>
                            {youtubeData.map((youtube, index) => (
                              <div key={index}>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputVideoType_${index}`}
                                    >
                                      Video Type
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputVideoType_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter video type"
                                      value={youtube.video_type || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "video_type",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputSubscribers_${index}`}
                                    >
                                      Subscribers
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputSubscribers_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter subscribers"
                                      value={youtube.subscribers || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "subscribers",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputPerVideoReach_${index}`}
                                    >
                                      Per Video Reach
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputPerVideoReach_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter per video reach"
                                      value={youtube.per_video_reach || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "per_video_reach",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputYoutubeLink_${index}`}
                                    >
                                      YouTube Link
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputYoutubeLink_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter YouTube link"
                                      value={youtube.youtube_link || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "youtube_link",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputLocation_${index}`}
                                    >
                                      Location
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputLocation_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter location"
                                      value={youtube.location || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "location",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputDescription_${index}`}
                                    >
                                      Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id={`inputDescription_${index}`}
                                      placeholder="Enter description"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      value={youtube.description || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "description",
                                          e.target.value
                                        )
                                      }
                                      rows="3"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button
                              className="btn btn-primary"
                              onClick={handleAddYoutube}
                            >
                              Add YouTube Data
                            </button>
                          </div>
                        </Tab>
                        <Tab eventKey="security" title="Instagram">
                          <div>
                            <h2>Instagram Data</h2>
                            {instagramData.map((instagram, index) => (
                              <div key={index}>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputVideoType_${index}`}
                                    >
                                      Video Type
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputVideoType_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter video type"
                                      value={instagram.post_type || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "post_type",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputSubscribers_${index}`}
                                    >
                                      Subscribers
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputSubscribers_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter followers"
                                      value={instagram.followers || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "followers",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputPerVideoReach_${index}`}
                                    >
                                      Per Video Reach
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputPerVideoReach_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter per video reach"
                                      value={instagram.per_video_reach || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "per_video_reach",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputYoutubeLink_${index}`}
                                    >
                                      YouTube Link
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputYoutubeLink_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter Instagram link"
                                      value={instagram.instagram_link || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "instagram_link",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputLocation_${index}`}
                                    >
                                      Location
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputLocation_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter location"
                                      value={instagram.location || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "location",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputDescription_${index}`}
                                    >
                                      Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id={`inputDescription_${index}`}
                                      placeholder="Enter description"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      value={instagram.description || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "description",
                                          e.target.value
                                        )
                                      }
                                      rows="3"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button
                              className="btn btn-primary"
                              onClick={handleAddInstagram}
                            >
                              Add Instagram Data
                            </button>
                          </div>
                        </Tab>
                        <Tab eventKey="notification" title="Facebook">
                          <div>
                            <h2>Instagram Data</h2>
                            {facebookData.map((facebook, index) => (
                              <div key={index}>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputVideoType_${index}`}
                                    >
                                      Video Type
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputVideoType_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter video type"
                                      value={facebook.post_type || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "post_type",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputSubscribers_${index}`}
                                    >
                                      Subscribers
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputSubscribers_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter followers"
                                      value={facebook.followers || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "followers",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputPerVideoReach_${index}`}
                                    >
                                      Per Video Reach
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputPerVideoReach_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter per video reach"
                                      value={facebook.per_video_reach || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "per_video_reach",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputYoutubeLink_${index}`}
                                    >
                                      YouTube Link
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputYoutubeLink_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter facebook link"
                                      value={facebook.facebook_link || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "facebook_link",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputLocation_${index}`}
                                    >
                                      Location
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputLocation_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter location"
                                      value={facebook.location || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "location",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputDescription_${index}`}
                                    >
                                      Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id={`inputDescription_${index}`}
                                      placeholder="Enter description"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      value={facebook.description || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "description",
                                          e.target.value
                                        )
                                      }
                                      rows="3"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button
                              className="btn btn-primary"
                              onClick={handleAddFacebook}
                            >
                              Add Facebook Data
                            </button>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary" type="button" onClick={handleSubmitClick}>
                    Save changes
                  </button> */}
                  {/* <div>
                    {!editable && ( // Show Edit button when not in editing mode
                      <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    )}
                    {editable && ( // Show Save button when in editing mode
                      <button className="btn btn-primary" type="button" onClick={handleSubmitClick}>Save Changes</button>
                    )}
                  </div> */}
                  <div className="container">
                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      type="button"
                      onClick={handleSubmitClick}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentProfileInfo;
