import backgroundimg from "../../assets/img/circle-bg.png";
import { useEffect, useRef, useState } from "react";
import { Footer, NavBar } from "../../components";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { googleLogin, login, signup } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import SuccessToast from "../../components/Toast/Success";
import axios from "axios";
import apiurl from "../../constant/config";

const ContentRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const auth = useSelector((state) => state.auth);
    const [showMessage, setShowMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const { error, userDetails, loading, userRegisterDetails, registerError } = auth;
    console.log(error);
    console.log(userDetails);
    const [showLogin, setShowLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const [step, setStep] = useState(1);
    const [user_type, setUserType] = useState("");
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    // const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [errors, setErrors] = useState({});
    const [verificationError, setVerificationError] = useState("");
    const [otpMessage, setOtpMessage] = useState(false);
    const [emailExistMsg, setemailExistMsg] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const otpFieldsRef = useRef([]);
    const [signupLoading, setSignupLoading] = useState(false);
    const [signUpMessage, setSignUpMessage] = useState(false);
    const location = useLocation();
    // const eventId = new URLSearchParams(location.search).get("eventId");
    const contentId = location.state?.contentId || null;
    console.log("got event id from landing page ", contentId);



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
            setemailExistMsg("");
            setOtpMessage("");
            setIsEmailFilled(false);
          }
        } catch (error) {
          console.error("Error while calling emailOtp API:", error);
        }
      };

      const handleSubmitOtp = async () => {
        try {
          const joinedOtp = otpValues.join(""); // Join OTP array into a single string
          const response = await axios.post(
            `${apiurl}/api/user/otp/varify/`,
            { email, otp: joinedOtp } // Send the joined OTP string to the API
          );
          console.log("Response from emailOtpVerification:", response.data);
          if (response.data.msg === "Valid OTP") {
            setVerificationError(false);
            setIsEmailVerified(true);
            setOtpMessage("Email Verified");
    
            // Proceed to the next step upon successful OTP verification
            setStep(step + 1);
          } else if (response.data.msg === "Invalid OTP") {
            // setShowOtpInput(false);
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


      const handleConfirmPassword = (event) => {
        const newConfirmPassword = event.target.value;
        setPassword2(newConfirmPassword);
        if (newConfirmPassword !== password) {
          setConfirmPasswordError("Passwords do not match");
          setIsDisabled(true);
        } else {
          setConfirmPasswordError("");
          setIsDisabled(email.length === 0 || password.length < 8);
        }
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


    const handleUserType = (event) => {
        const newUserType = event.target.value;
        setUserType(newUserType);
      };

      const handleFirstName = (event) => {
        const newFirstName = event.target.value;
        setFirstname(newFirstName);
      };
      const handleLastName = (event) => {
        const newLastName = event.target.value;
        setLastname(newLastName);
      };


      const nextStep = () => {
        if (validatePersonalInfo()) {
          // setStep(step + 1);
          emailOtpClick();
        }
      };

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



    const toggleForm = () => {
        setShowLogin((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    useEffect(() => {
        // Retrieve success message from sessionStorage
        const message = sessionStorage.getItem("successMessage");

        // Clear success message from sessionStorage
        sessionStorage.removeItem("successMessage");

        if (message) {
            setSuccessMessage(message);
        }
    }, []);

    const prevStep = () => {
        setStep(step - 1);
      };

    const handleSuccess = async (credentialResponse) => {
        try {
            const details = jwtDecode(credentialResponse.credential);
            const { email, given_name, family_name } = details;

            // Dispatch the action to send user details to the API
            await dispatch(googleLogin(email, given_name, family_name));

            sessionStorage.setItem("registerMessage", "Logged in successfully!");

            console.log("Logged in successfully:", email, given_name, family_name);
            // window.location.reload();
        } catch (error) {
            console.error("Error processing Google login:", error);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(login(email, password));
            // Destructure the error from the response payload
            sessionStorage.setItem("registerMessage", "Logged in successfully!");
            console.log(response);
            console.log("Api Error", error);
            console.log("Api response", response);
            if (error.non_field_errors[0] === "Email or Password is not Valid") {
              const showMessage = "Your entered Email or Password is not valid";
              setShowMessage(showMessage);
            } else if (error === "Request failed with status code 400") {
              const showMessage = "Unable to Determine";
              setShowMessage(showMessage);
            } else if (error === "Request failed with status code 404") {
              const showMessage = "Email or Password is not Valid";
              setShowMessage(showMessage);
            } else {
              setShowMessage(false);
              navigate(`/mycontent-details?contentId=${contentId}`);
            }
        } catch (error) {
            // Handle any errors that occur during the dispatch
            console.log("error message", error);
            console.error("An error occurred during login:", error);
            // Optionally, you can set an error message for the user
            setShowMessage("An error occurred during login. Please try again.");
        }
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        if (!newEmail) {
            setEmailError("Please enter an email address");
            setIsDisabled(true);
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            setEmailError("Please enter a valid email address");
            setIsDisabled(true);
        } else {
            setEmailError("");
            setIsDisabled(password.length < 8);
        }
    };
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            setIsDisabled(true);
        } else {
            setPasswordError("");
            setIsDisabled(email.length === 0 || !email.includes("@"));
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

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

    const submitHandlerSignup = async (e) => {
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
          const isAdminValue = false;
          dispatch(
            signup(email, password, firstname, lastname, password2, user_type)
          );
          setSignupLoading(true);
          sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
          console.log("Register Message inside function ", userRegisterDetails);
          // navigate("/login");
          // console.log("Signup Success");
        }
      };

      useEffect(() => {
        if (userRegisterDetails) {
          if (userRegisterDetails.msg == "Registration Successful") {
            // sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
            // navigate("/login");
            setSignUpMessage(true);
            toggleForm()
            // console.log("Event created successfully");
            // sessionStorage.setItem("successMessage", "Event created successfully!");
            // navigate("/events/upcoming_event");
          } else {
            console.log("An error occurred while Registration");
            window.scroll(0, 0);
            setSignupLoading(false);
            setErrorMessage("An error occurred while Registration");
          }
        } else if (registerError) {
          console.log("An error occurred while creating the event");
          setSignupLoading(false);
          window.scroll(0, 0);
          setErrorMessage(
            registerError?.email[0] || "An error occurred while Registration"
          );
        }
      }, [userRegisterDetails, registerError]);


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
                  </div>
                </div>
                <div className="container" style={{ alignItems: 'center'}}>
                <button
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={otpLoading}
                  style={{width: '50%'}}
                >
                  <div style={{ alignItems: 'center' }}>
                    {!otpLoading && <div>Next</div>} {/* Conditionally render "Next" */}
                    {otpLoading && (
                      <div style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
                        <div className="mr-2">Processing...</div>
                        <div className="otpLoading"></div>
                      </div>
                    )}
                  </div>
                </button>
                </div>
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
                <div className="container">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitOtp}
                    style={{ marginBottom: '10px', width: '100%' }} // Add some bottom margin for spacing
                  >
                    Submit OTP
                  </button>
                </div>
                <div className="container">
                  <button className="btn btn-info" style={{ width: '100%' }} onClick={prevStep}>
                    Previous
                  </button>
                </div>
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
                <div className="container">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={submitHandlerSignup}
                    disabled={signupLoading}
                    style={{ marginBottom: '10px', width: '100%' }} // Add some bottom margin for spacing
                  >
                    <div style={{ alignItems: 'center' }}>
                      {!signupLoading && <div>Submit</div>} {/* Conditionally render "Next" */}
                      {signupLoading && (
                        <div style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
                          <div className="mr-2">Processing...</div>
                          <div className="otpLoading"></div>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
                <div className="container">
                  <button className="btn btn-info" style={{width: '100%'}} onClick={prevStep}>
                    Previous
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
            <div>
                {showLogin ? (
                    <div
                        className="bg-sponsor"
                        style={{
                            height: "auto",
                            padding: "1%",
                            backgroundImage: `url(${backgroundimg})`,
                        }}
                    >

                        {successMessage && <SuccessToast message={successMessage} />}
                        {signUpMessage && <SuccessToast message={"Register Successfully"} />}

                        <div className="container">
                            <div className="box1">
                                <form action="#" class="contact-form" onSubmit={submitHandler}>
                                    <h2 class="mb-4 font-weight-medium text-secondary">Login</h2>
                                    {showMessage && (
                                        <div class="alert alert-danger" role="alert">
                                            {showMessage}
                                        </div>
                                    )}

                                    <div class="row form-group" style={{ marginBottom: "0px" }}>
                                        <div class="col-md-12">
                                            <label class="text-black" for="email">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                class="form-control"
                                                placeholder="Email"
                                            />
                                            <p style={{ color: "red" }}>{emailError}</p>
                                        </div>
                                    </div>

                                    <div class="row form-group" style={{ marginBottom: "0px" }}>
                                        <div class="col-md-12">
                                            <label class="text-black" for="subject">
                                                Password
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id="subject"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                                <span
                                                    className="eye-icon"
                                                    style={{
                                                        position: "absolute",
                                                        right: "10px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {/* Eye icon for displaying password */}
                                                    {showPassword ? (
                                                        <i className="bi bi-eye-slash-fill"></i>
                                                    ) : (
                                                        <i className="bi bi-eye-fill"></i>
                                                    )}
                                                </span>
                                            </div>
                                            <p style={{ color: "red" }}>{passwordError}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link style={{ float: "right" }}>Forgot password?</Link>
                                    </div>
                                    <div class="row form-group mt-4" style={{ textAlign: "center" }}>
                                        <div class="col-md-12">
                                            <input
                                                type="submit"
                                                style={{ width: "50%" }}
                                                value="Submit"
                                                class="btn btn-primary"
                                            />
                                        </div>
                                    </div>
                                </form>
                                {/* <h2 class="title-section" style={{ textAlign: 'center' }}>Register with google as an Sponsor</h2> */}
                                <div className="container">
                                    <div class="line-text">Or</div>
                                </div>
                                {/* <div class="divider mx-auto"></div> */}
                                <div style={{ textAlign: "center" }}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            borderColor: "#9D78BD",
                                            textTransform: "none",
                                            position: "relative",
                                        }}
                                    >
                                        <GoogleOAuthProvider clientId="79933480626-2mokrgjd11tt8bslaopuhie4nt4csinv.apps.googleusercontent.com">
                                            {" "}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: "10px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                }}
                                            >
                                                {/* <img
                          src={google}
                          alt="Google Icon"
                          style={{ width: "24px" }}
                        /> */}
                                            </div>
                                            <GoogleLogin
                                                onSuccess={handleSuccess}
                                                // onError={handleError}
                                                style={{ width: "10vh" }}
                                            />
                                        </GoogleOAuthProvider>
                                    </Button>
                                </div>

                                <p
                                    style={{
                                        textAlign: "center",
                                        marginBottom: "0%",
                                        marginTop: "4%",
                                    }}
                                >
                                    Don't have an account?{" "}
                                    <Link style={{ fontWeight: "bold", color: "blue" }} onClick={toggleForm}>
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
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
                                            </div>
                                            {user_type == "" ? (
                                                <p className="text-danger">*Select a type to register*</p>
                                            ) : null}
                                        </>
                                    )}
                                    {renderStep()}
                                    <div class="row form-group mt-4">
                                        <div class="col-md-12 mt-4 text-lg">
                                            <p style={{ textAlign: "center" }}>
                                                Already have an account?{" "}
                                                <Link
                                                    style={{ fontWeight: "bold", color: "blue" }}
                                                    onClick={toggleForm}
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
                )}

            </div>
        </>
    );
};

export default ContentRegister;
