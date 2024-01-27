import React, { useEffect, useState } from "react";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createEventProfile,
  createSponsorProfile,
  getEventProfile,
  getSponsorProfile,
} from "../../../redux/actions/profileAction";
const EventProfileInfo = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.sponsorProfile);
  useEffect(() => {
    dispatch(getEventProfile());
  }, []);

  console.log("Sponsor Profile ", profileDetails);
  // const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState("");
  const [contact, setContact] = useState("");
  console.log(profileDetails?.eventDetails?.business_name);

  const [businessName, setBusinessName] = useState(
    profileDetails?.eventDetails?.business_name || ""
  );

  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

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

  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  // console.log("Sponsor Profile ",userDetails);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "organisation_name",
      profileDetails?.eventDetails?.organisation_name || businessName
    );
    formData.append(
      "contact_no",
      profileDetails?.eventDetails?.contact_no || contact
    );
    formData.append(
      "event_type",
      profileDetails?.eventDetails?.event_type || businessType
    );
    formData.append("user_id", userDetails?.user_id);
    try {
      // Make POST API call
      await dispatch(createEventProfile(formData));
      sessionStorage.setItem("successMessage", "Class created successfully!");
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };

  return (
    <>
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile mx-auto rounded-circle mb-2"
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
                  {/* <div className="mb-3">
                    <label className="small mb-1" for="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div> */}
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
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputOrgName">
                        Business name
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        value={
                          profileDetails?.eventDetails?.organisation_name ||
                          businessName
                        }
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputLocation">
                        Business Type
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value={
                          profileDetails?.eventDetails?.event_type ||
                          businessType
                        }
                        onChange={(e) => setBusinessType(e.target.value)}
                      />
                    </div>
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
                      value={
                        profileDetails?.eventDetails?.contact_no || contact
                      }
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  {/* <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" for="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                      />
                    </div>
                  </div> */}
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSubmitClick}
                  >
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

export default EventProfileInfo;
