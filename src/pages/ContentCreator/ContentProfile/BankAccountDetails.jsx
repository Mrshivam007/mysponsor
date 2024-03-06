import React, { useEffect, useState } from "react";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { createBankDetails, getBankDetails } from "../../../redux/actions/profileAction";
import SuccessToast from "../../../components/Toast/Success";
const BnakAccountDetails = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const dispatch = useDispatch();
    const profileDetails = useSelector(state => state.sponsorProfile)
    useEffect(() => {
        dispatch(getBankDetails())
    }, [])

    console.log("Bank Account Details ", profileDetails.bankDetails
    );

    const {createBankDetailResponse, createBankDetailsError} = profileDetails;

    console.log("Create Bank details Response " , createBankDetailResponse);

    // const [businessName, setBusinessName] = useState('');
    const [AccountName, setAccountName] = useState('');
    const [ifscNo, setifscNo] = useState('');
    console.log(profileDetails?.sponsorDetails?.business_name);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [AccountNo, setAccountNo] = useState(profileDetails?.sponsorDetails?.business_name || '');

    const handleAccountNoChange = (e) => {
        setAccountNo(e.target.value);
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
        formData.append("user_id", userDetails?.user_id);
        formData.append("account_no", profileDetails.bankDetails?.account_no || AccountNo);
        formData.append("account_holder_name", profileDetails.bankDetails?.account_no || AccountName);
        formData.append("ifsc_code", profileDetails.bankDetails?.account_no || ifscNo);
        try {
            // Make POST API call
            await dispatch(createBankDetails(formData));
            sessionStorage.setItem("successMessage", "Class created successfully!");
        } catch (error) {
            console.log("An error occurred during API calls:", error);
        }
    };

    useEffect(() => {
        if (createBankDetailResponse) {
            if (createBankDetailResponse.msg == "Account created") {
                console.log("Acccount created successfully");
                sessionStorage.setItem("successMessage", "Account Details Added Successfully!");
                // navigate("/events/upcoming_event");
                dispatch(getBankDetails())
                setSuccessMessage("Account Details Added")
            } else {
                // console.log("An error occurred while creating the event");
                window.scroll(0, 0);
                setErrorMessage("An error occurred during creating an event");
            }
        }
        else if (createBankDetailsError) {
            console.log("An error occurred while creating the event");
            window.scroll(0, 0);
            setErrorMessage("An error occurred during creating an event");
        }
    }, [createBankDetailResponse, createBankDetailsError]);

    return (
        <>
            <div className="container-xl px-4 mt-4">
            {successMessage && <SuccessToast message={successMessage} />}
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
                <div>
                    <div className="card mb-4">
                        <div className="card-header">Bank Account Details</div>
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
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputEmailAddress">
                                        Account Number
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputEmailAddress"
                                        type="number"
                                        placeholder="Enter your bank account number"
                                        value={profileDetails.bankDetails?.account_no || AccountNo}
                                        onChange={(e) => setAccountNo(e.target.value)} />
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputOrgName">
                                            Account Holder Name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputOrgName"
                                            type="text"
                                            placeholder="Enter your Bank Account Holder Name"
                                            value={profileDetails.bankDetails?.account_holder_name || AccountName}
                                            onChange={(e) => setAccountName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputLocation">
                                            IFSC Code
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputLocation"
                                            type="text"
                                            placeholder="Enter your location"
                                            value={profileDetails.bankDetails?.ifsc_code || ifscNo}
                                            onChange={(e) => setifscNo(e.target.value)}
                                        />
                                    </div>
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
                                <button className="btn btn-primary" type="button" onClick={handleSubmitClick}>
                                    Save changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BnakAccountDetails;
