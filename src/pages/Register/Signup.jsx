import { useState } from "react";
import backgroundimg from "../../assets/img/circle-bg.png";
import { Footer, NavBar, SponserE } from "../../components";
import { EventsCards } from "../../data/data";
import { signup } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [user_type, setUserType] = useState("");
    const [is_admin, setAdmin] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const isAdminValue = false; // Define is_admin as a separate variable
        dispatch(
            signup(
                email,
                password,
                firstname,
                lastname,
                password2,
                user_type,
                isAdminValue, // Pass isAdminValue as an argument instead of directly assigning within the function call
            )
        );
    };


    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
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
    };
    const handleConfirmPassword = (event) => {
        const newConfirmPassword = event.target.value;
        setPassword2(newConfirmPassword);
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault" onChange={handleUserType} value="Event" id="flexRadioDefault1" />
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
                                </div>
                                <div class="col-md-6">
                                    <label class="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" value={lastname} onChange={handleLastName} placeholder="Last Name" />
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="email">Email</label>
                                    <input type="email" id="email" class="form-control" value={email} onChange={handleEmailChange} placeholder="Email" />
                                </div>
                            </div>

                            <div class="row form-group">

                                <div class="col-md-12">
                                    <label class="text-black" for="subject">Password</label>
                                    <input type="text" id="subject" class="form-control" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                        handlePassword(e);
                                    }} placeholder="Password" />
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="message">Confirm Password</label>
                                    <input type="text" id="subject" class="form-control" value={password2} onChange={(e) => {
                                        setPassword2(e.target.value);
                                        handleConfirmPassword(e);
                                    }} placeholder="Confirm Password" />
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