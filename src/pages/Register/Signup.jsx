import { useState } from "react";
import backgroundimg from "../../assets/img/circle-bg.png";
import { Footer, NavBar, SponserE } from "../../components";
import { EventsCards } from "../../data/data";
import { signup } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [user_type, setUserType] = useState("");
    const [is_admin, setAdmin] = useState("");
    const [terms, setTerms] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const auth = useSelector((state) => state.auth);
    const { error, loading } = auth;
    const [showMessage, setShowMessage] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errorsObj = {};
    
        if (email.trim() === '') {
          errorsObj.email = 'email is required';
        }
        if (password.trim() === '') {
          errorsObj.password = 'password is required';
        }
        if (password2.trim() === '') {
          errorsObj.password2 = 'password2 is required';
        }
        if (firstname.trim() === '') {
          errorsObj.firstname = 'firstname is required';
        }
        if (lastname.trim() === '') {
          errorsObj.lastname = 'lastname is required';
        }
        // ... validate other fields similarly
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
      };

    
    const submitHandler = (e) => {
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
                user_type,
                // isAdminValue, // Pass isAdminValue as an argument instead of directly assigning within the function call
            )
        );
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
            email.length === 0 ||
            !email.includes("@") ||
            newPassword !== password2
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



    return (
        <>
            <NavBar />
            <div
                className="bg-sponsor"
                style={{
                    height: "auto",
                    padding: '1%',
                    backgroundImage: `url(${backgroundimg})`,
                }}
            >
                <div className="container">
                    <div className="box1">
                        {/* <div class="col-lg-6 mb-5 mb-lg-0"> */}
                        <form action="#" class="contact-form" onSubmit={submitHandler}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" onChange={handleUserType} value="event" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Event
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" onChange={handleUserType} value="Content" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Content
                                </label>
                            </div>
                            <h2 class="mb-4 font-weight-medium text-secondary">SignUp</h2>
                            <div class="row form-group">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <label class="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control" value={firstname} onChange={handleFirstName} placeholder="First Name" />
                                    {errors.firstname && <p className="error-msg">{errors.firstname}</p>}

                                </div>
                                <div class="col-md-6">
                                    <label class="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" value={lastname} onChange={handleLastName} placeholder="Last Name" />
                                    {errors.lastname && <p className="error-msg">{errors.lastname}</p>}
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="email">Email</label>
                                    <input type="email" id="email" class="form-control" value={email} onChange={handleEmailChange} placeholder="Email" />
                                    <p className="error-msg">{emailError}</p>
                                    {errors.email && <p className="error-msg">{errors.email}</p>}
                                </div>
                            </div>

                            <div class="row form-group">

                                <div class="col-md-12">
                                    <label class="text-black" for="subject">Password</label>
                                    <input type="text" id="subject" class="form-control" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                        handlePassword(e);
                                    }} placeholder="Password" />
                                    <p className="error-msg">{passwordError}</p>
                                    {errors.password && <p className="error-msg">{errors.password}</p>}

                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="message">Confirm Password</label>
                                    <input type="text" id="subject" class="form-control" value={password2} onChange={(e) => {
                                        setPassword2(e.target.value);
                                        handleConfirmPassword(e);
                                    }} placeholder="Confirm Password"
                                    />
                                    <p className="error-msg">{ConfirmPasswordError}</p>
                                    {errors.password2 && <p className="error-msg">{errors.password2}</p>}
                                </div>
                            </div>

                            <div class="row form-group mt-4">
                                <div class="col-md-12">
                                    <input type="submit" value="Submit" class="btn btn-primary" />
                                </div>
                                <div class="col-md-12 mt-4">
                                    <p style={{ textAlign: 'center' }}>Already have an account? <Link to="/login">Login</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;