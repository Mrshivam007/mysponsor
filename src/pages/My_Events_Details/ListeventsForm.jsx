import React from "react";
import { Footer, NavBar } from "../../components";
import backgroundimg from "../../assets/img/circle-bg.png";

const ListeventsForm = () => {
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
        <div className="container px-0">
          <div className="row">
            <div className="col-6">
              <div className="container">
                <h1 className="font-weight-bold">Enter event description</h1>
                <div className="box1" style={{ width: "100%", height: "auto" }}>
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

                    <div className="row form-group">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
            <div className="col-6">
              <div className="container">
                <h1 className="font-weight-bold">Enter event description</h1>
                <div className="box1" style={{ width: "100%", height: "auto" }}>
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
              <h1 className="font-weight-bold">Enter event description</h1>
              <div
                className="box1 mt-2"
                style={{ width: "100%", height: "auto" }}
              >
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
              <h1 className="font-weight-bold">Add Photos or Videos</h1>
              <div
                className="box1 mt-2 d-flex justify-content-center"
                style={{ width: "100%", height: "auto" }}
              >
                <div
                  className="box bg-white d-flex justify-content-center align-items-center p-3"
                  style={{ width: "30%", borderRadius: "10px" }}
                >
                  <div className="box text-center">
                    <h5 className="font-weight-bold">Add media</h5>
                    <p>(atleast 3 photos & 1 video)</p>
                    {/* <button
                      className="btn"
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        border: "none",
                        width: "60%",
                        borderRadius: "5px",
                        background: "#009FF9",
                      }}
                    >+ Add more</button> */}

                    <input type="file" style={{ width: "74%" }} />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="List Event"
                style={{
                  width: "100%",
                  color: "white",
                  padding: "1%",
                  fontWeight: "bolder",
                  border: "none",
                  borderRadius: "10px",
                  background: "#009FF9",
                  boxShadow: "0px 1px 10px -4px rgba(0, 0, 0, 0.25)",
                }}
              />
              <button
                className="btn btn-outline-primary mt-3"
                style={{
                  width: "100%",
                  padding: "1%",
                  fontWeight: "bolder",
                  borderRadius: "10px",
                  boxShadow: "0px 1px 10px -4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListeventsForm;
