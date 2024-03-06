import backgroundimg from "../../assets/img/circle-bg.png";
import React, { useEffect, useState } from "react";
import { Footer, NavBar } from "../../components";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { login, signup } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import SuccessToast from "../../components/Toast/Success";

const SponsorLogin = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [user_type, setUserType] = useState("Sponsor");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [errors, setErrors] = useState({});
    const [terms, setTerms] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const auth = useSelector((state) => state.auth);
    const [showMessage, setShowMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const { error, loading } = auth;
    console.log(error);
    const location = useLocation();
    const cardData = location.state && location.state.cardData;
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin((prev) => !prev);
    };

    const navigate = useNavigate();

    console.log("Card Data from event", cardData);

    useEffect(() => {
        // Retrieve success message from sessionStorage
        const message = sessionStorage.getItem("successMessage");

        // Clear success message from sessionStorage
        sessionStorage.removeItem("successMessage");

        if (message) {
            setSuccessMessage(message);
        }
    }, []);

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

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        if (error === "Request failed with status code 401") {
            const showMessage =
                "Your request requires admin approval before you can login as a teacher.";
            setShowMessage(showMessage);
        } else if (error === "Request failed with status code 400") {
            const showMessage = "Unable to Determine";
            setShowMessage(showMessage);
        } else if (error === "Request failed with status code 404") {
            const showMessage = "Email or Password is not Valid";
            setShowMessage(showMessage);
        } else {
            setShowMessage(false);
            navigate("/myevent-details", { state: { cardData } })
        }
    };

    const validateForm = () => {
        const errorsObj = {};

        if (email.trim() === "") {
            errorsObj.email = "email is required";
        }
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

    const SignupsubmitHandler = (e) => {
        e.preventDefault();
        const isAdminValue = false; // Define is_admin as a separate variable
        const isFormValid = validateForm();
        if (isFormValid) {
            dispatch(
                signup(
                    email,
                    password,
                    firstname,
                    lastname,
                    password2,
                    user_type
                    // isAdminValue, // Pass isAdminValue as an argument instead of directly assigning within the function call
                )
            );
            sessionStorage.setItem("successMessage", "Sign Up Successsfull!!!");
            toggleForm()
            //   navigate("/sponsor_login", { state: { cardData } });
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

                                    <div class="row form-group">
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

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="subject">
                                                Password
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                value={password}
                                                onChange={handlePasswordChange}
                                                class="form-control"
                                                placeholder="Password"
                                            />
                                            <p style={{ color: "red" }}>{passwordError}</p>
                                        </div>
                                    </div>

                                    <div class="row form-group mt-4">
                                        <div class="col-md-12">
                                            <input type="submit" value="Submit" class="btn btn-primary" />
                                            <Link style={{ float: "right" }}>Forgot password?</Link>
                                        </div>
                                        <div class="col-md-12 mt-4">
                                            <p style={{ textAlign: "center" }}>
                                                Don't have an account? <a onClick={toggleForm}>Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
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
                        <div className="container">
                            <div className="box1">
                                <form action="#" class="contact-form" onSubmit={SignupsubmitHandler}>
                                    <h2 class="mb-4 font-weight-medium text-secondary">SignUp</h2>
                                    <div class="row form-group">
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
                                            {errors.email == "" ? (
                                                <p className="error-msg">{errors.email}</p>
                                            ) : null}
                                        </div>
                                    </div>

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

                                    <div class="row form-group mt-4">
                                        <div class="col-md-12">
                                            <input type="submit" value="Submit" class="btn btn-primary" />
                                        </div>
                                        <div class="col-md-12 mt-4">
                                            <p style={{ textAlign: "center" }}>
                                                Already have an account? <a onClick={toggleForm}>Login</a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* </div> */}
        </>
    );
};

export default SponsorLogin;
