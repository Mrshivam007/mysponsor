import React from "react";
import "./form.css";
import { Footer, NavBar } from "../../components";
import backgroundimg from "../../assets/img/circle-bg.png";
import { useEffect } from "react";
const CCForm = () => {
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
                  Enter Content creator info
                </h1>
                <h2 className="sponsor-mobile-text">
                  Enter Content creator info
                </h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Content creator name"
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
                          placeholder="Platform (Youtube,Twitch,etc.)"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Contact"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <input
                          type="e-mail"
                          id="subject"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <select className="form-control">
                          <option value="Channel category" hidden>
                            Channel category
                          </option>
                          <option value="--select event category--" disabled>
                            --select event category--
                          </option>
                          <option value="Informative">Informative</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Horror">Horror</option>
                          <option value="Technology">Technology</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="number"
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
            <div className="col-12 col-md-6 px-0">
              <div className="container">
                <h1 className="font-weight-bold d-none d-lg-block">
                  Enter platform info
                </h1>
                <h2 className="sponsor-mobile-text">Enter platform info</h2>
                <div className="box1">
                  <form action="#" className="contact-form">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Channel name"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Channel link"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="number"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Current subscribers"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={""}
                          onChange={""}
                          className="form-control"
                          placeholder="Estimated audience"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <h1 className="font-weight-bold d-none d-lg-block">
                Enter creator description
              </h1>
              <h2 className="sponsor-mobile-text">Enter creator description</h2>
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

export default CCForm;
