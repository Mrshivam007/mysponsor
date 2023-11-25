import backgroundimg from "../../assets/img/circle-bg.png";
import { Footer, NavBar, SponserE } from "../../components";
import { EventsCards } from "../../data/data";
import { Link } from "react-router-dom";

const Signup = () => {
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
                        <form action="#" class="contact-form">
                            <h2 class="mb-4 font-weight-medium text-secondary">SignUp</h2>
                            <div class="row form-group">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <label class="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control" placeholder="First Name" />
                                </div>
                                <div class="col-md-6">
                                    <label class="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" placeholder="Last Name" />
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="email">Email</label>
                                    <input type="email" id="email" class="form-control" placeholder="Email" />
                                </div>
                            </div>

                            <div class="row form-group">

                                <div class="col-md-12">
                                    <label class="text-black" for="subject">Password</label>
                                    <input type="text" id="subject" class="form-control" placeholder="Password" />
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-md-12">
                                    <label class="text-black" for="message">Confirm Password</label>
                                    <input type="text" id="subject" class="form-control" placeholder="Confirm Password" />
                                </div>
                        </div>

                            <div class="row form-group mt-4">
                                <div class="col-md-12">
                                    <input type="submit" value="Submit" class="btn btn-primary" />
                                </div>
                                <div class="col-md-12 mt-4">
                                <p style={{textAlign: 'center'}}>Already have an account? <Link to="/login">Login</Link></p>
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