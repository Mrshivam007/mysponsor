import backgroundimg from "../../assets/img/circle-bg.png";
import React, { useState } from "react";
import { Footer, NavBar, SponserE } from "../../components";
import { EventsCards } from "../../data/data";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {

    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        // if (error === 'Request failed with status code 401'){
        //   const showMessage = "Your request requires admin approval before you can login as a teacher."
        //    setShowMessage(showMessage);
        // }
        // else if (error === "Request failed with status code 400"){
        //   const showMessage = "Unable to Determine"
        //   setShowMessage(showMessage);
        // }
        // else {
        //   setShowMessage(false);
        // }
      };

      const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        // if (!newEmail) {
        //   setEmailError("Please enter an email address");
        //   setIsDisabled(true);
        // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
        //   setEmailError("Please enter a valid email address");
        //   setIsDisabled(true);
        // } else {
        //   setEmailError("");
        //   setIsDisabled(password.length < 8);
        // }
      };
      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        // if (newPassword.length < 8) {
        //   setPasswordError("Password must be at least 8 characters long");
        //   setIsDisabled(true);
        // } else {
        //   setPasswordError("");
        //   setIsDisabled(email.length === 0 || !email.includes("@"));
        // }
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
                            <h2 class="mb-4 font-weight-medium text-secondary">Login</h2>
                            {/* <div class="row form-group">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <label class="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label class="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" />
                                </div>
                            </div> */}

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="email">Email</label>
                                    <input type="email" id="email" value={email} onChange={handleEmailChange} class="form-control" placeholder="Email" />
                                </div>
                            </div>

                            <div class="row form-group">

                                <div class="col-md-12">
                                    <label class="text-black" for="subject">Password</label>
                                    <input type="text" id="subject" value={password} onChange={handlePasswordChange} class="form-control" placeholder="Password" />
                                </div>
                            </div>
{/* 
                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="5" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                </div>
                        </div> */}

                            <div class="row form-group mt-4">
                                <div class="col-md-12">
                                    <input type="submit" value="Submit" class="btn btn-primary" />
                                    <Link style={{float: 'right'}}>forgot password?</Link>
                                </div>
                                <div class="col-md-12 mt-4">
                                <p style={{textAlign: 'center'}}>Don't have an account? <Link to="/signup">Register</Link></p>
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

export default Login;