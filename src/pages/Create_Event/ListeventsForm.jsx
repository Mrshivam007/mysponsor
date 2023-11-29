import React from "react";
import { Footer, NavBar } from "../../components";
import "../Create_Content/form.css";
import backgroundimg from "../../assets/img/circle-bg.png";
import { useEffect } from "react";

const ListeventsForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  return (
    <>
      <NavBar />
      <div
        className="bg-form"
        style={{
          height: "auto",
          padding: "1%",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        <div className="container event-form px-md-0">
          <div className="row">
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter event info
                </h1>
                <h2 className="sponsor-mobile-text">Enter event info</h2>
                <div className="box1">
                  {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
                  <form action="#" className="contact-form">
                    {/* <div className="row form-group">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label className="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control" />
                                </div>
                            </div> */}

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="email"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Enter name"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Enter venue"
                        />
                      </div>
                    </div>

                    <div className="row form-group gap-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <select className="form-control" value={""}>
                          <option className="text-muted">Enter category</option>
                          <option>--select event category--</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-6">
                        <label className="font-weight-bold">Start Date</label>
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>
                      <div className="col-6">
                        <label className="font-weight-bold">End Date</label>
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>
                    </div>

                    {/* 
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-black" for="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                </div>
                        </div> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter organizer info
                </h1>
                <h2 className="sponsor-mobile-text">Enter organizer info</h2>
                <div className="box1">
                  {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
                  <form action="#" className="contact-form">
                    {/* <div className="row form-group">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label className="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control" />
                                </div>
                            </div> */}

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Organiser name"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="number"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Contact"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="email"
                          id="email"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                      </div>
                    </div>

                    {/* 
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label className="text-black" for="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                </div>
                        </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <h1 className="font-weight-bold d-none d-lg-block">
                Enter event description
              </h1>
              <h2 className="sponsor-mobile-text">Enter event description</h2>
              <div className="box1 mt-2">
                <textarea
                  className="form-control"
                  placeholder="Enter description (100 words)"
                  col="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <h1 className="font-weight-bold d-none d-lg-block">
                Add Photos & Videos
              </h1>
              <h2 className="sponsor-mobile-text">Add Photos & Videos</h2>
              <div className="box1 mt-2 d-flex justify-content-center">
                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add media</h5>
                    <p>(atleast 3 photos & 1 video)</p>
                    <input
                      type="file"
                      style={{ width: "74%", borderRadius: "0" }}
                    />
                  </div>
                </div>
              </div>
              <input type="submit" className="submit" value="List Event" />
              <button className="btn btn-outline-primary mt-3">Discard</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListeventsForm;
