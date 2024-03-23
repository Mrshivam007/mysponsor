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
  const [youtube_logo, setYoutube_logo] = useState(null);
  const [youtube_logoFileName, setYoutube_logoFileName] = useState(null);
  const [youtube_shorts, setYoutube_shorts] = useState(null);
  const [youtube_shortsFileName, setYoutube_shortsFileName] = useState(null);
  const [insta_profile_pic, setInsta_profile_pic] = useState(null);
  const [insta_profile_picFileName, setInsta_profile_picFileName] =
    useState(null);
  const [fb_profile_pic, setFb_profile_pic] = useState(null);
  const [fb_profile_picFileName, setFb_profile_picFileName] = useState(null);
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
  const hiddenFileInput4 = useRef(null);
  const hiddenFileInput5 = useRef(null);
  const hiddenFileInput6 = useRef(null);
  const hiddenFileInput7 = useRef(null);

  const handleProfileClick = (e) => {
    hiddenFileInput2.current.click();
  };
  const handleYoutubeLogoClick = (e) => {
    hiddenFileInput4.current.click();
  };
  const handleYoutubeShortsClick = (e) => {
    hiddenFileInput5.current.click();
  };
  const handleInstaPicClick = (e) => {
    hiddenFileInput6.current.click();
  };
  const handleFbPicClick = (e) => {
    hiddenFileInput7.current.click();
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
  const handleYoutubePicChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setYoutube_logo(file);
    setYoutube_logoFileName(uniqueFilename); // Save the unique filename in state
  };
  const handleYoutubeShortChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setYoutube_shorts(file);
    setYoutube_shortsFileName(uniqueFilename); // Save the unique filename in state
  };
  const handleInstaPicChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setInsta_profile_pic(file);
    setInsta_profile_picFileName(uniqueFilename); // Save the unique filename in state
  };
  const handleFbPicChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);

    setFb_profile_pic(file);
    setFb_profile_picFileName(uniqueFilename); // Save the unique filename in state
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
  const [location, setLocation] = useState("");
  const [collaborations, setCollaborations] = useState([]);
  const [youtubeData, setYoutubeData] = useState([]);
  const [instagramData, setInstagramData] = useState([]);
  const [facebookData, setFacebookData] = useState([]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    if (profileDetails?.contentDetails?.channel_name) {
      setBusinessName(profileDetails.contentDetails.channel_name);
    }
    if (profileDetails?.contentDetails?.location) {
      setLocation(profileDetails.contentDetails.location);
    }
    // Initialize collaborations state with data from profileDetails
    if (profileDetails?.contentDetails?.past_company) {
      setCollaborations(profileDetails.contentDetails.past_company);
    }
    if (profileDetails?.contentDetails?.profile_pic) {
      setProfile(profileDetails.contentDetails.profile_pic);
    }
    if (profileDetails?.contentDetails?.youtube_logo) {
      setYoutube_logo(profileDetails.contentDetails.youtube_logo);
    }
    if (profileDetails?.contentDetails?.youtube_shorts) {
      setYoutube_shorts(profileDetails.contentDetails.youtube_shorts);
    }
    if (profileDetails?.contentDetails?.insta_profile_pic) {
      setInsta_profile_pic(profileDetails.contentDetails.insta_profile_pic);
    }
    if (profileDetails?.contentDetails?.fb_profile_pic) {
      setFb_profile_pic(profileDetails.contentDetails.fb_profile_pic);
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
        channel_name: "",
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
        followings: "",
        posts: "",
        per_video_reach: "",
        instagram_link: "",
        channel_name: "",
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
        channel_name: "",
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
        // formData.append("profile_pic", profile); // Change the field name as needed
      } else {
        // Append the profile file with its name
        formData.append("profile_pic", profile, profileFileName); // Change the field name as needed
      }
    }
    if (youtube_logo) {
      if (typeof youtube_logo === "string") {
        // Append the youtube_logo URL directly
        // formData.append("youtube_logo_pic", youtube_logo); // Change the field name as needed
      } else {
        // Append the youtube_logo file with its name
        formData.append("youtube_logo", youtube_logo, youtube_logoFileName); // Change the field name as needed
      }
    }
    if (youtube_shorts) {
      if (typeof youtube_shorts === "string") {
        // Append the youtube_shorts URL directly
        // formData.append("youtube_shorts_pic", youtube_shorts); // Change the field name as needed
      } else {
        // Append the youtube_shorts file with its name
        formData.append(
          "youtube_shorts",
          youtube_shorts,
          youtube_shortsFileName
        ); // Change the field name as needed
      }
    }
    if (insta_profile_pic) {
      if (typeof insta_profile_pic === "string") {
        // Append the insta_profile_pic URL directly
        // formData.append("insta_profile_pic_pic", insta_profile_pic); // Change the field name as needed
      } else {
        // Append the insta_profile_pic file with its name
        formData.append(
          "insta_profile_pic",
          insta_profile_pic,
          insta_profile_picFileName
        ); // Change the field name as needed
      }
    }
    if (fb_profile_pic) {
      if (typeof fb_profile_pic === "string") {
        // Append the fb_profile_pic URL directly
        // formData.append("fb_profile_pic_pic", fb_profile_pic); // Change the field name as needed
      } else {
        // Append the fb_profile_pic file with its name
        formData.append(
          "fb_profile_pic",
          fb_profile_pic,
          fb_profile_picFileName
        ); // Change the field name as needed
      }
    }
    if (cover) {
      if (typeof cover === "string") {
        // Append the cover URL directly
        // formData.append("cover_page", cover); // Change the field name as needed
      } else {
        // Append the cover file with its name
        formData.append("cover_page", cover, coverFileName); // Change the field name as needed
      }
    }
    if (logo) {
      if (typeof logo === "string") {
        // Append the logo URL directly
        // formData.append("channel_logo", logo); // Change the field name as needed
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
    formData.append("location", location);
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
              style={{ width: "100%", height: 'auto' }}
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
            <div className="container px-0">
              <div className="desktop-view">
                <div className="row py-5">
                  <div className="col-4 mx-auto p-0">
                    <div className="bg-white shadow rounded overflow-hidden">
                      <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                          <div className="profile my-3">
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
                              style={{
                                height: "180px",
                                width: "180px",
                                borderRadius: "50%",
                                overflow: "hidden", // Ensure the border radius is applied
                              }}
                              className="mb-2 img-thumbnail"
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
                        </div>
                        <div className="media-body text-center">
                          <h3 className="mt-0 mb-0">
                            {userDetails?.firstname}&nbsp;
                            {userDetails?.lastname}
                          </h3>
                          <h5>
                            Content Creator &nbsp;
                            <i
                              class="bi bi-patch-check-fill"
                              style={{ color: "#007bff" }}
                            ></i>
                          </h5>
                          <p className="mb-0">{userDetails?.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card mx-0 mb-4">
                      <div className="card-header">Account Details</div>
                      <div className="card-body p-2">
                        <form>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-12">
                              <label
                                className="small mb-1"
                                for="inputFirstName"
                              >
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
                            <div className="col-md-12">
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
                            <label
                              className="small mb-1"
                              for="inputEmailAddress"
                            >
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
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-view">
                <div className="box mx-auto p-0">
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                      <div className="media align-items-end profile-head">
                        <div className="profile my-3">
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
                            style={{
                              height: "180px",
                              width: "180px",
                              borderRadius: "50%",
                              overflow: "hidden", // Ensure the border radius is applied
                            }}
                            className="mb-2 img-thumbnail"
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
                      </div>
                      <div className="media-body text-center">
                        <h3 className="mt-0">
                          {userDetails?.firstname}&nbsp;
                          {userDetails?.lastname}
                        </h3>
                        <h5>
                          Content Creator &nbsp;
                          <i
                            class="bi bi-patch-check-fill"
                            style={{ color: "#007bff" }}
                          ></i>
                        </h5>
                        <p className="mb-0">{userDetails?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* PROFILE PICTURE SECTION */}
          <div className="container">
            <div className="card mx-0 mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body p-2">
                <form>
                  <div className="mobile-view">
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
                  </div>
                  {/* <div className="mb-3">
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
                  </div> */}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Location
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="text"
                      placeholder="Enter your location"
                      value={location}
                      onChange={handleLocationChange}
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
                            {/* <div className="desktop-view"> */}
                            <div
                              className="box1 form-photos-box mt-2 mb-0 d-flex flex-row justify-content-center p-md-3"
                              style={{
                                width: "100%",
                                height: "auto",
                                background: "none",
                                boxShadow: "none",
                                margin: "0",
                                padding: "0",
                                border: "0",
                                gap: "5px",
                              }}
                            >
                              <div className="col-xl-4 p-0">
                                <div
                                  className="card mb-4 mx-0 mb-xl-0"
                                  style={{ boxShadow: "none" }}
                                >
                                  <div className="card-header text-center p-2">
                                    Youtube Profile Pic
                                  </div>
                                  <div className="card-body p-1 text-center">
                                    <img
                                      className="img-account-profile mb-2 mx-auto"
                                      style={{ width: "100%" }}
                                      // src={cover ? URL.createObjectURL(cover) : noCover}
                                      src={
                                        youtube_logo
                                          ? typeof youtube_logo === "string"
                                            ? youtube_logo
                                            : URL.createObjectURL(youtube_logo)
                                          : noLogo
                                      }
                                      alt="Profile Pic"
                                    />
                                    <div className="small font-italic text-muted mb-4">
                                      Your Youtube logo
                                    </div>
                                    <input
                                      className="mx-auto w-75"
                                      type="file"
                                      accept="image/*"
                                      onChange={handleYoutubePicChange}
                                      // disabled={!editable} // Disable input field when not in editing mode
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4 p-0">
                                <div
                                  className="card mb-4 mx-0 mb-xl-0"
                                  style={{ boxShadow: "none" }}
                                >
                                  <div className="card-header text-center p-2">
                                    Youtube Shorts Clip
                                  </div>
                                  <div className="card-body p-1 text-center">
                                    {youtube_shorts &&
                                    typeof youtube_shorts !== "string" ? (
                                      <video
                                        controls
                                        autoPlay
                                        className="mx-auto w-75"
                                      >
                                        <source
                                          src={URL.createObjectURL(
                                            youtube_shorts
                                          )}
                                          type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    ) : (
                                      <img
                                        className="img-account-profile rounded-circle mb-2 mx-auto"
                                        src={
                                          youtube_shorts
                                            ? youtube_shorts
                                            : noLogo
                                        }
                                        alt="Profile Pic"
                                      />
                                    )}

                                    <div className="small font-italic text-muted mb-4">
                                      Your Youtube Shorts Clip
                                    </div>
                                    <input
                                      className="mx-auto w-75"
                                      type="file"
                                      accept="video/*"
                                      onChange={handleYoutubeShortChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* </div> */}
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
                                  {/* <div className="col-md-6">
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
                                  </div> */}
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputchannel_name_${index}`}
                                    >
                                      Channel Name
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputchannel_name_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter Channel Name"
                                      value={youtube.channel_name || ""}
                                      onChange={(e) =>
                                        handleYoutubeChange(
                                          index,
                                          "channel_name",
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
                            <div
                              className="box1 form-photos-box mt-2 mb-0 d-flex justify-content-center p-3"
                              style={{
                                width: "100%",
                                height: "auto",
                                background: "none",
                                boxShadow: "none",
                              }}
                            >
                              <div className="col-xl-4">
                                <div className="card mb-4 mb-xl-0">
                                  <div className="card-header">
                                    Instagram Profile Pic
                                  </div>
                                  <div className="card-body text-center">
                                    <img
                                      className="img-account-profile mb-2 mx-auto"
                                      style={{ width: "100%" }}
                                      // src={cover ? URL.createObjectURL(cover) : noCover}
                                      src={
                                        insta_profile_pic
                                          ? typeof insta_profile_pic ===
                                            "string"
                                            ? insta_profile_pic
                                            : URL.createObjectURL(
                                                insta_profile_pic
                                              )
                                          : noLogo
                                      }
                                      alt="Profile Pic"
                                    />
                                    <div className="small font-italic text-muted mb-4">
                                      Your Instagram Profile Photo
                                    </div>
                                    <input
                                      className="mx-auto w-75"
                                      type="file"
                                      accept="image/*"
                                      onChange={handleInstaPicChange}
                                      // disabled={!editable} // Disable input field when not in editing mode
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
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
                                      Followers
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
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputSubscribers_${index}`}
                                    >
                                      Following
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputSubscribers_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter Following"
                                      value={instagram.following || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "following",
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
                                      Posts
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputSubscribers_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode

                                      placeholder="Enter posts"
                                      value={instagram.posts || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "posts",
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
                                  {/* <div className="col-md-6">
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
                                  </div> */}
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputchannel_name_${index}`}
                                    >
                                      Channel Name
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputchannel_name_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter Channel Name"
                                      value={instagram.channel_name || ""}
                                      onChange={(e) =>
                                        handleInstagramChange(
                                          index,
                                          "channel_name",
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
                            <h2>Facebook Data</h2>
                            <div
                              className="box1 form-photos-box mt-2 mb-0 d-flex justify-content-center p-3"
                              style={{
                                width: "100%",
                                height: "auto",
                                background: "none",
                                boxShadow: "none",
                              }}
                            >
                              <div className="col-xl-4">
                                <div className="card mb-4 mb-xl-0">
                                  <div className="card-header">
                                    Facebook Profile Pic
                                  </div>
                                  <div className="card-body text-center">
                                    <img
                                      className="img-account-profile mb-2 mx-auto"
                                      style={{ width: "100%" }}
                                      // src={cover ? URL.createObjectURL(cover) : noCover}
                                      src={
                                        fb_profile_pic
                                          ? typeof fb_profile_pic === "string"
                                            ? fb_profile_pic
                                            : URL.createObjectURL(
                                                fb_profile_pic
                                              )
                                          : noLogo
                                      }
                                      alt="Profile Pic"
                                    />
                                    <div className="small font-italic text-muted mb-4">
                                      Your Facebook Profile Photo
                                    </div>
                                    <input
                                      className="mx-auto w-75"
                                      type="file"
                                      accept="image/*"
                                      onChange={handleFbPicChange}
                                      // disabled={!editable} // Disable input field when not in editing mode
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
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
                                  {/* <div className="col-md-6">
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
                                  </div> */}
                                  <div className="col-md-6">
                                    <label
                                      className="small mb-1"
                                      htmlFor={`inputchannel_name_${index}`}
                                    >
                                      Channel Name
                                    </label>
                                    <input
                                      className="form-control"
                                      id={`inputchannel_name_${index}`}
                                      type="text"
                                      // disabled={!editable} // Disable input field when not in editing mode
                                      placeholder="Enter Channel Name"
                                      value={facebook.channel_name || ""}
                                      onChange={(e) =>
                                        handleFacebookChange(
                                          index,
                                          "channel_name",
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
