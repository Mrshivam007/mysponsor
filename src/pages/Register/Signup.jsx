import { useEffect, useRef, useState } from "react";
import backgroundimg from "../../assets/img/circle-bg.png";
import axios from "axios";
import apiurl from "../../constant/config";
import { Footer, NavBar } from "../../components";
import { emailOtp, login, signup } from "../../redux/actions/authActions";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./loading.css";
import OtpInput from "react-otp-input";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailFilled, setEmailFilled] = useState(false);
  const [emailExistMsg, setemailExistMsg] = useState(false);
  const [otpMessage, setOtpMessage] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [emailVerificationError, setEmailVerificationError] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [user_type, setUserType] = useState("");
  const [terms, setTerms] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const auth = useSelector((state) => state.auth);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { userDetails, emailOtpDetails, userRegisterDetails, registerError } =
    auth;
  const inputRefs = useRef([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [step, setStep] = useState(1);

  console.log("otp details ", emailOtpDetails);
  const validateForm = () => {
    const errorsObj = {};

    // if (email.trim() === "") {
    //   errorsObj.email = "email is required";
    // }
    if (password.trim() === "") {
      errorsObj.password = "password is required";
    }
    if (password2.trim() === "") {
      errorsObj.password2 = "password2 is required";
    }
    if (firstname.trim() === "") {
      errorsObj.firstname = "firstname is required";
    }
    if (lastname.trim() === "") {
      errorsObj.lastname = "lastname is required";
    }
    // ... validate other fields similarly
    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const isFormValid = validateForm();

  //   if (isFormValid) {
  //     try {
  //       const { data } = await axios.post(
  //         `${apiurl}/api/user/register/`,
  //         {
  //           email,
  //           first_name: firstname,
  //           last_name: lastname,
  //           password,
  //           password2,
  //           user_type,
  //         }
  //       );

  //       // Check if registration was successful
  //       if (data.is_approve) {
  //         sessionStorage.setItem("successMessage", "Sign Up Successful!!!");
  //         console.log("Register Message inside function ", data);
  //         // Handle successful signup, maybe redirect or show a success message
  //       } else {
  //         // Handle registration failure
  //         // Maybe display an error message or take appropriate action
  //       }
  //     } catch (error) {
  //       // Handle error
  //       console.error("Error during signup:", error);
  //       // Maybe display an error message or take appropriate action
  //     }
  //   }
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const isFormValid = validateForm();

  //   if (isFormValid) {
  //     if (!isEmailFilled) {
  //       setEmailVerificationError("Please verify your email.");
  //       return; // Exit early if email is not verified
  //     }
  //     if (!isEmailVerified) {
  //       setEmailVerificationError("Please verify your email.");
  //       return; // Exit early if email is not verified
  //     }

  //     const isAdminValue = false;
  //     dispatch(
  //       signup(
  //         email,
  //         password,
  //         firstname,
  //         lastname,
  //         password2,
  //         user_type
  //       )
  //     );
  //     sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
  //     console.log("Register Message inside function ", userRegisterDetails);
  //     // navigate("/login");
  //     // console.log("Signup Success");
  //   }
  // };

  // OTP PART START
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const otpFieldsRef = useRef([]);

  const handleInput = (index, value) => {
    if (value.length > 1) {
      return;
    }
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value.length === 1 && index < otpValues.length - 1) {
      otpFieldsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus();
    }
  };

  // OTP PART END

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    const hasAlphaNumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);
    if (!hasAlphaNumeric) {
      setPasswordError("Password must contain both letters and numbers");
      return;
    }

    if (password !== password2) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    // If password validation passes, proceed with form submission
    const isFormValid = validateForm();

    if (isFormValid) {
      if (!isEmailFilled) {
        setEmailVerificationError("Please verify your email.");
        return; // Exit early if email is not verified
      }
      if (!isEmailVerified) {
        setEmailVerificationError("Please verify your email.");
        return; // Exit early if email is not verified
      }

      const isAdminValue = false;
      dispatch(
        signup(email, password, firstname, lastname, password2, user_type)
      );
      sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
      console.log("Register Message inside function ", userRegisterDetails);
      // navigate("/login");
      // console.log("Signup Success");
    }
  };

  useEffect(() => {
    if (userRegisterDetails) {
      if (userRegisterDetails.msg == "Registration Successful") {
        sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
        navigate("/login");
        // console.log("Event created successfully");
        // sessionStorage.setItem("successMessage", "Event created successfully!");
        // navigate("/events/upcoming_event");
      } else {
        console.log("An error occurred while Registration");
        window.scroll(0, 0);
        setErrorMessage("An error occurred while Registration");
      }
    } else if (registerError) {
      console.log("An error occurred while creating the event");
      window.scroll(0, 0);
      setErrorMessage(
        registerError?.email[0] || "An error occurred while Registration"
      );
    }
  }, [userRegisterDetails, registerError]);

  console.log("Register Message outside function ", userRegisterDetails);
  console.log("Register Error outside function ", registerError);

  // const emailOtpClick = async () => {
  //   setOtpLoading(true);
  //   try {
  //     const response = await axios.post(
  //       `${apiurl}/api/user/email/varification/`,
  //       { email },
  //     );
  //     console.log('Response from emailOtp:', response.data);
  //     if (response.data.message === 'OTP sent successfully') {
  //       setOtpLoading(false);
  //       setShowOtpInput(true);
  //       setemailExistMsg(false)
  //       setOtpMessage(response.data.message);
  //       setIsEmailFilled(true);
  //       setEmailFilled(true); // Update emailFilled state to true upon successful email verification
  //     }
  //     else if (response.data.msg === 'Email Is Already Exist') {
  //       console.log("email already exist");
  //       setOtpLoading(false);
  //       setemailExistMsg(response.data.msg);
  //     } else {
  //       setOtpLoading(false);
  //       setShowOtpInput(false);
  //       setemailExistMsg(false)
  //       setOtpMessage(false);
  //       setEmailFilled(false); // Ensure emailFilled state is set to false if OTP is not sent successfully
  //     }
  //   } catch (error) {
  //     console.error('Error while calling emailOtp API:', error);
  //   }
  // };

  const emailOtpClick = async () => {
    setOtpLoading(true);
    try {
      const response = await axios.post(
        `${apiurl}/api/user/email/varification/`,
        { email }
      );
      console.log("Response from emailOtp:", response.data);
      if (response.data.message === "OTP sent successfully") {
        setOtpLoading(false);
        setShowOtpInput(true);
        setemailExistMsg("");
        setOtpMessage(response.data.message);
        setIsEmailFilled(true);
        setStep(step + 1); // Proceed to the next step upon successful OTP verification
      } else if (response.data.msg === "Email Is Already Exist") {
        console.log("email already exist");
        setOtpLoading(false);
        setemailExistMsg(response.data.msg);
      } else {
        setOtpLoading(false);
        setShowOtpInput(false);
        setemailExistMsg("");
        setOtpMessage("");
        setIsEmailFilled(false);
      }
    } catch (error) {
      console.error("Error while calling emailOtp API:", error);
    }
  };

  console.log("exist message ", emailExistMsg);

  // const handleSubmitOtp = async () => {
  //   try {
  //     const joinedOtp = otp.join(''); // Join OTP array into a single string
  //     const response = await axios.post(
  //       `${apiurl}/api/user/otp/varify/`,
  //       { email, otp: joinedOtp }, // Send the joined OTP string to the API
  //     );
  //     console.log('Response from emailOtpVerification:', response.data);
  //     if (response.data.msg === "Valid OTP") {
  //       setShowOtpInput(false);
  //       setEmailFilled(false);
  //       setVerificationError(false);
  //       setIsEmailVerified(true);
  //       setOtpMessage('Email Verified');
  //       // Handle OTP verification success
  //     }
  //     // Handle successful verification
  //   } catch (error) {
  //     console.error('Error while verifying OTP:', error);
  //     setVerificationError(error.response.data.message || 'An error occurred during verification.');
  //   }
  // };

  const handleSubmitOtp = async () => {
    try {
      const joinedOtp = otpValues.join(""); // Join OTP array into a single string
      const response = await axios.post(
        `${apiurl}/api/user/otp/varify/`,
        { email, otp: joinedOtp } // Send the joined OTP string to the API
      );
      console.log("Response from emailOtpVerification:", response.data);
      if (response.data.msg === "Valid OTP") {
        setShowOtpInput(false);
        setEmailFilled(false);
        setVerificationError(false);
        setIsEmailVerified(true);
        setOtpMessage("Email Verified");

        // Proceed to the next step upon successful OTP verification
        setStep(step + 1);
      } else if (response.data.msg === "Invalid OTP") {
        // setShowOtpInput(false);
        // setEmailFilled(false);
        // setVerificationError(false);
        // setIsEmailVerified(true);
        setVerificationError("Invalid Otp Entered.");
        // Proceed to the next step upon successful OTP verification
      }
      // Handle successful verification
    } catch (error) {
      console.error("Error while verifying OTP:", error);
      setVerificationError(
        error.response.data.message || "An error occurred during verification."
      );
    }
  };

  // const handleOtpChange = (e) => {
  //   setOtp(e.target.value);
  // };
  // const handleOtpChange = (e) => {
  //   const value = e.target.value;
  //   // Ensure that only numeric values are entered and length does not exceed 4
  //   if (!isNaN(value) && value.length <= 4) {
  //     setOtp(value);
  //   }
  // };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return; // Only allow numeric input
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);

    // Focus next input
    if (index < 3 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      // Move focus to the previous input on backspace press
      inputRefs.current[index - 1].focus();
    }
  };

  // Other code...
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!newEmail) {
      setEmailError("Please enter an email address");
      setIsDisabled(true);
      setEmailFilled(false); // Email not filled
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setEmailError("Please enter a valid email address");
      setIsDisabled(true);
      setEmailFilled(false); // Email not filled
    } else {
      setEmailError("");
      setIsDisabled(password.length < 8);
      setEmailFilled(true); // Email filled and valid
    }
  };
  const handleFirstName = (event) => {
    const newFirstName = event.target.value;
    setFirstname(newFirstName);
  };
  const handleLastName = (event) => {
    const newLastName = event.target.value;
    setLastname(newLastName);
  };
  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check password length
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setIsDisabled(true);
      return;
    }

    // Check password strength
    const hasAlphaNumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(newPassword);
    if (!hasAlphaNumeric) {
      setPasswordError("Password must contain both letters and numbers");
      setIsDisabled(true);
      return;
    }

    setPasswordError("");
    setIsDisabled(
      email.length === 0 || !email.includes("@") || newPassword !== password2
    );
  };

  const handleConfirmPassword = (event) => {
    const newConfirmPassword = event.target.value;
    setPassword2(newConfirmPassword);
    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      setIsDisabled(true);
    } else {
      setConfirmPasswordError("");
      setIsDisabled(email.length === 0 || password.length < 8 || !terms);
    }
  };

  const handleUserType = (event) => {
    const newUserType = event.target.value;
    setUserType(newUserType);
  };

  const validatePersonalInfo = () => {
    let valid = true;
    const newErrors = {};

    if (!firstname.trim()) {
      newErrors.firstname = "First Name is required";
      valid = false;
    }

    if (!lastname.trim()) {
      newErrors.lastname = "Last Name is required";
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Please enter an email address");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validatePersonalInfo()) {
      // setStep(step + 1);
      emailOtpClick();
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className=" text-secondary ">Personal Information</h2>
            <div class="row form-group">
              <div class="col-md-12 mb-3 mb-md-0">
                <label class="text-black" for="fname">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  class="form-control"
                  value={firstname}
                  onChange={handleFirstName}
                  placeholder="First Name"
                  disabled={user_type === "" ? true : false}
                />
                {errors.firstname == "" ? (
                  <p className="error-msg">{errors.firstname}</p>
                ) : null}
                {errors.firstname && (
                  <p className="error-msg">{errors.firstname}</p>
                )}
              </div>
              <div class="col-md-12">
                <label class="text-black" for="lname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  class="form-control"
                  value={lastname}
                  onChange={handleLastName}
                  placeholder="Last Name"
                  disabled={user_type === "" ? true : false}
                />
                {errors.lastname == "" ? (
                  <p className="error-msg">{errors.lastname}</p>
                ) : null}
                {errors.lastname && (
                  <p className="error-msg">{errors.lastname}</p>
                )}
              </div>
            </div>

            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  disabled={user_type === "" ? true : false}
                />

                <p className="error-msg">{emailError}</p>
                {otpMessage && (
                  <p
                    style={{
                      marginBottom: "0px",
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    {otpMessage}
                  </p>
                )}
                {emailExistMsg && <p className="error-msg">{emailExistMsg}</p>}
                {errors.email == "" ? (
                  <p className="error-msg">{errors.email}</p>
                ) : null}
                {errors.email && <p className="error-msg">{errors.email}</p>}
                {/* {emailFilled && (
                  <div>
                    <a
                      type="button"
                      className="link-opacity-100"
                      style={{ float: "right", color: "blue" }}
                      onClick={emailOtpClick}
                    >
                      Verify Email
                    </a>
                  </div>
                )} */}
              </div>
            </div>
            {/* Your form elements for personal information */}
            <button
              className="btn btn-primary"
              onClick={nextStep}
              disabled={otpLoading}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
                  <div>Processing...</div>
                  <div className="otpLoading"></div>
                </div>                {otpLoading && (
                  <div style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
                    <div>Processing...</div>
                    <div className="otpLoading"></div>
                  </div>
                )}
              </div>
            </button>


          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-secondary">Account Information</h2>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="text-black" htmlFor="otp">
                  Enter OTP
                </label>
                {/* <div>
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="number"
                      pattern="[0-9]*"
                      maxLength="1"
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(input) => inputRefs.current.push(input)}
                      style={{ width: '50px', marginRight: '10px' }} // Adjust width and spacing as needed
                    />
                  ))}
                </div> */}
                <div className="otp-main-container">
                  <div className="otp-container">
                    {otpValues.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="otp-input"
                        value={value}
                        onChange={(e) => handleInput(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackspace(index);
                          }
                        }}
                        ref={(ref) => {
                          otpFieldsRef.current[index] = ref;
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {verificationError && (
                <p className="error-msg">{verificationError}</p>
              )}
            </div>
            <div className="container d-flex justify-content-between">
              <button className="btn btn-info" onClick={prevStep}>
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitOtp}
              >
                Submit OTP
              </button>
            </div>
            {/* Your form elements for account information */}
            {/* <button onClick={nextStep}>Next</button> */}
          </div>
        );
      case 3:
        return (
          <div>
            {/* <h2>Confirmation</h2> */}
            {/* <p>Thank you for registering!</p> */}
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="subject">
                  Password
                </label>
                <input
                  type="text"
                  id="subject"
                  class="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePassword(e);
                  }}
                  placeholder="Password"
                />
                <p className="error-msg">{passwordError}</p>
                {errors.password == "" ? (
                  <p className="error-msg">{errors.password}</p>
                ) : null}
              </div>
            </div>

            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="message">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="subject"
                  class="form-control"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                    handleConfirmPassword(e);
                  }}
                  placeholder="Confirm Password"
                />
                <p className="error-msg">{ConfirmPasswordError}</p>
                {errors.password2 == "" ? (
                  <p className="error-msg">{errors.password2}</p>
                ) : null}
              </div>
            </div>
            <div className="container d-flex justify-content-between">
              <button className="btn btn-info" onClick={prevStep}>
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitOtp}
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="bg-sponsor"
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
        <div className="container">
          <div className="box1">
            <h2 class="mb-4 font-weight-medium text-secondary">Register</h2>
            <form action="#" class="contact-form" onSubmit={submitHandler}>
              {step == 1 && (
                <>
                  <h4 class="font-weight-medium text-secondary">
                    Register yourself as:
                  </h4>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="User Type"
                  >
                    <button
                      type="button"
                      className={`btn ${user_type === "Event"
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                      onClick={handleUserType}
                      value="Event"
                    >
                      Event
                    </button>
                    <button
                      type="button"
                      className={`btn ${user_type === "Content"
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                      onClick={handleUserType}
                      value="Content"
                    >
                      Content
                    </button>
                    <button
                      type="button"
                      className={`btn ${user_type === "Sponsor"
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                      onClick={handleUserType}
                      value="Sponsor"
                    >
                      Sponsor
                    </button>
                    {/* Add more buttons for other options if needed */}
                  </div>
                  {user_type == "" ? (
                    <p className="text-danger">*Select a type to register*</p>
                  ) : null}
                </>
              )}

              {renderStep()}

              {/* <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    class="form-control"
                    value={firstname}
                    onChange={handleFirstName}
                    placeholder="First Name"
                  />
                  {errors.firstname == "" ? (
                    <p className="error-msg">{errors.firstname}</p>
                  ) : null}
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    class="form-control"
                    value={lastname}
                    onChange={handleLastName}
                    placeholder="Last Name"
                  />
                  {errors.lastname == "" ? (
                    <p className="error-msg">{errors.lastname}</p>
                  ) : null}
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />

                  <p className="error-msg">{emailError}</p>
                  {otpMessage && <p style={{ marginBottom: '0px', fontWeight: 'bold', color: 'green' }}>{otpMessage}</p>}
                  {emailExistMsg && <p className="error-msg">{emailExistMsg}</p>}
                  {errors.email == "" ? (
                    <p className="error-msg">{errors.email}</p>
                  ) : null}
                  {emailFilled && (
                    <div>
                      <a type="button" className="link-opacity-100" style={{ float: 'right', color: 'blue' }} onClick={emailOtpClick}>
                        Verify Email
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {emailVerificationError && <p style={{ fontWeight: 'bold', color: 'red' }}>{emailVerificationError}</p>}
              {otpLoading && <div class="otpLoading"></div>}
              {showOtpInput && (
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="otp">
                      Enter OTP
                    </label>
                    <div>
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          type="number"
                          pattern="[0-9]*"
                          maxLength="1"
                          value={otp[index]}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          ref={(input) => inputRefs.current.push(input)}
                          style={{ width: '50px', marginRight: '10px' }} // Adjust width and spacing as needed
                        />
                      ))}
                    </div>
                    <button type="button" className="link-opacity-100" style={{ float: 'right', color: 'blue' }} onClick={handleSubmitOtp}>Submit OTP</button>
                  </div>
                </div>
              )}
              {verificationError && <p>{verificationError}</p>}
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="subject">
                    Password
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handlePassword(e);
                    }}
                    placeholder="Password"
                  />
                  <p className="error-msg">{passwordError}</p>
                  {errors.password == "" ? (
                    <p className="error-msg">{errors.password}</p>
                  ) : null}
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                      handleConfirmPassword(e);
                    }}
                    placeholder="Confirm Password"
                  />
                  <p className="error-msg">{ConfirmPasswordError}</p>
                  {errors.password2 == "" ? (
                    <p className="error-msg">{errors.password2}</p>
                  ) : null}
                </div>
              </div> */}

              <div class="row form-group mt-4">
                {/* <div class="col-md-12">
                  <input type="submit" value="Submit" class="btn btn-primary" />
                </div> */}
                <div class="col-md-12 mt-4 text-lg">
                  <p style={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link
                      style={{ fontWeight: "bold", color: "blue" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
