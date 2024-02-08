import backgroundimg from "../../assets/img/circle-bg.png";
import React, { useEffect, useState } from "react";
import { Footer, NavBar } from "../../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux"; 

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const auth = useSelector((state) => state.auth);
  const [showMessage, setShowMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { error, loading } = auth;
  console.log(error);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(email, password));
      // Destructure the error from the response payload
      console.log(response);
      console.log("Api Error",error);
      console.log("Api response",response);
      if (error.non_field_errors[0] === "Email or Password is not Valid") {
        const showMessage =
          "Your entered Email or Password is not valid";
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
  return (
    <>
      <NavBar />
      <div
        className="bg-sponsor"
        style={{
          height: "auto",
          padding: "1%",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        {successMessage && (
          <div className="container">
            <div class="alert alert-success" role="alert">
              {successMessage}
            </div>
          </div>
        )}
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
                <div class="col-md-12 mt-4 text-lg">
                  <p style={{ textAlign: "center" }}>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
