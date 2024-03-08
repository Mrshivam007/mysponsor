import backgroundimg from "../../assets/img/circle-bg.png";
import React, { useEffect, useState } from "react";
import { Footer, NavBar } from "../../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { googleLogin, login } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import SuccessToast from "../../components/Toast/Success";

const EventRegister = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const auth = useSelector((state) => state.auth);
    const [showMessage, setShowMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const { error, loading } = auth;
    console.log(error);
    const [showLogin, setShowLogin] = useState(true);

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
                    <>
                        <h1>Signup page</h1>
                    </>
                )}

            </div>
        </>
    );
};

export default EventRegister;
