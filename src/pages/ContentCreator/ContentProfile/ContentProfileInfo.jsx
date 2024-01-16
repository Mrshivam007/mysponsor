import React, { useEffect, useState } from "react";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
import { Tab, Tabs } from "react-bootstrap";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { createContentProfile, createEventProfile, createSponsorProfile, getContentProfile, getEventProfile, getSponsorProfile } from "../../../redux/actions/profileAction";
const ContentProfileInfo = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const dispatch = useDispatch();
  const profileDetails = useSelector(state => state.sponsorProfile)
  useEffect(() => {
    dispatch(getContentProfile())
  }, [])

  console.log("Sponsor Profile ", profileDetails);
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [contact, setContact] = useState('');
  const [ytVideoType, setYtVideoType] = useState('');
  const [subscriber, setSubscriber] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [perVideoReach, setPerVideoReach] = useState('');
  const [instaFollowers, setInstaFollowers] = useState('');
  const [instaPostType, setInstaPostType] = useState('');
  const [instaPerPostLink, setInstaPerPostLink] = useState('');
  const [instaLink, setInstaLink] = useState('');
  const [faceFollowers, setFaceFollowers] = useState('');
  const [facePostType, setFacePostType] = useState('');
  const [perFacePostLink, setFerPostLink] = useState('');
  const [faceLink, setfaceLink] = useState('');
  
  console.log(profileDetails?.ContentDetails?.business_name);
  const [profilePic, setProfilePic] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const youtubeData = [
    {
      "video_type": ytVideoType || "",
      "subscribers": subscriber || "",
      "youtube__link": youtubeLink || "",
      "per_video_reach": perVideoReach || "",
    },
  ];

  const instagramData = [
    {
      "followers": instaFollowers || "",
      "post_type": instaPostType || "",
      "per_post_link": instaPerPostLink || "",
      "instagram_link": instaLink || "",
    },
  ];

  const facebookData = [
    {
      "followers": faceFollowers || "",
      "post_type": facePostType || "",
      "per_post_link": perFacePostLink || "",
      "facebook_link": faceLink || "",
    },
  ];

  const youtubeDataString = JSON.stringify(youtubeData);
  const instagramDataString = JSON.stringify(instagramData);
  const facebookDataString = JSON.stringify(facebookData);



  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  // console.log("Sponsor Profile ",userDetails);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", userDetails?.user_id);
    formData.append("channel_name", profileDetails?.contentDetails?.channel_name || businessName);
    formData.append("contact_no", profileDetails?.contentDetails?.contact_no || contact);
    formData.append("youtube",JSON.stringify(profileDetails?.contentDetails?.youtube) || youtubeDataString )
    formData.append("instagram", JSON.stringify(profileDetails?.contentDetails?.instagram) || instagramDataString)
    formData.append("facebook", JSON.stringify(profileDetails?.contentDetails?.facebook) || facebookDataString)
    try {
      // Make POST API call
      await dispatch(createContentProfile(formData));
      sessionStorage.setItem("successMessage", "Class created successfully!");
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };

  console.log(profileDetails?.contentDetails?.contact_no);

  return (
    <>
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src={profilePic ? profilePic : noProfilepic}
                  alt="Profile Pic"
                />

                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <input
                  className="mx-auto w-75"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
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
                    <label className="small mb-1" for="inputEmailAddress">
                      Channel Name
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your organization name"
                      value={profileDetails?.contentDetails?.channel_name || businessName}
                      onChange={(e) => setBusinessName(e.target.value)} />
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
                      value={profileDetails?.contentDetails?.contact_no || contact}
                      onChange={(e) => setContact(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    Social Media
                    <div className="container my-3">
                      <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="profile" title="Youtube">
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputFirstName">
                                Video Type
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={ profileDetails?.contentDetails?.youtube[0]?.video_type || ytVideoType}
                                onChange={(e) => setYtVideoType(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputLastName">
                                Subscriber
                              </label>
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={profileDetails?.contentDetails?.youtube[0]?.subscribers || subscriber}
                                onChange={(e) => setSubscriber(e.target.value)} />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputFirstName">
                                Per Video Reach
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={profileDetails?.contentDetails?.youtube[0]?.per_video_reach || perVideoReach}
                                onChange={(e) => setPerVideoReach(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputLastName">
                                Channel Link
                              </label>
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={profileDetails?.contentDetails?.youtube[0]?.youtube__link || youtubeLink}
                                onChange={(e) => setYoutubeLink(e.target.value)} />
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="security" title="Instagram">
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputFirstName">
                                Followers
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={profileDetails?.contentDetails?.instagram[0]?.followers || instaFollowers}
                                onChange={(e) => setInstaFollowers(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputLastName">
                                Instagram Post Type
                              </label>
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={profileDetails?.contentDetails?.instagram[0]?.post_type || instaPostType}
                                onChange={(e) => setInstaPostType(e.target.value)} />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputFirstName">
                                Per Post Reach
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={profileDetails?.contentDetails?.instagram[0]?.per_post_link || instaPerPostLink}
                                onChange={(e) => setInstaPerPostLink(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="small mb-1" for="inputLastName">
                                Instagram Link
                              </label>
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={profileDetails?.contentDetails?.instagram[0]?.instagram_link || instaLink}
                                onChange={(e) => setInstaLink(e.target.value)} />
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="notification" title="Facebook">
                          Facebook
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button" onClick={handleSubmitClick}>
                    Save changes
                  </button>
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
