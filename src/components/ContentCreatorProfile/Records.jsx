import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";
import { Modal } from "react-bootstrap";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import {
  creatorApproach,
  fetchCreatorbyId,
} from "../../redux/actions/creatorAction";
import SuccessToast from "../Toast/Success";
const Records = (data) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const animatedComponents = makeAnimated();
  const [businessSelection, setBusinessSelection] = useState([]);
  const [sponsorSelection, setSponsorSelection] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  console.log("Content Profile Data on records ", data);

  const pastCompanies = [
    {
      company_name: "Company 1",
      // icon: "bi-shop",
      description_activity:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, laudantium libero dignissimos vero nulla eius pariatur, voluptas esse veniam illo ducimus blanditiis voluptates distinctio sequi sit odio nisi repudiandae! Consequuntur voluptatibus dolorum sed velit autem neque eaque esse, odit distinctio, quam veritatis repellendus, maxime minima accusantium quas iste molestiae exercitationem cumque? Nostrum, atque animi.",
      partnership_duration: "3 month",
    },
    {
      company_name: "Company 2",
      // icon: "bi-people",
      description_activity:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, laudantium libero dignissimos vero nulla eius pariatur, voluptas esse veniam illo ducimus blanditiis voluptates distinctio sequi sit odio nisi repudiandae! Consequuntur voluptatibus dolorum sed velit autem neque eaque esse, odit distinctio, quam veritatis repellendus, maxime minima accusantium quas iste molestiae exercitationem cumque? Nostrum, atque animi.",
      partnership_duration: "1.5 month",
    },
    {
      company_name: "Company 2",
      // icon: "bi-people",
      description_activity:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, laudantium libero dignissimos vero nulla eius pariatur, voluptas esse veniam illo ducimus blanditiis voluptates distinctio sequi sit odio nisi repudiandae! Consequuntur voluptatibus dolorum sed velit autem neque eaque esse, odit distinctio, quam veritatis repellendus, maxime minima accusantium quas iste molestiae exercitationem cumque? Nostrum, atque animi.",
      partnership_duration: "20 days",
    },
    {
      company_name: "Company 2",
      icon: "bi-people",
      description_activity:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, laudantium libero dignissimos vero nulla eius pariatur, voluptas esse veniam illo ducimus blanditiis voluptates distinctio sequi sit odio nisi repudiandae! Consequuntur voluptatibus dolorum sed velit autem neque eaque esse, odit distinctio, quam veritatis repellendus, maxime minima accusantium quas iste molestiae exercitationem cumque? Nostrum, atque animi.",
      partnership_duration: "3 days",
    },
    // Add more companies as needed
  ];

  const [businessType, setBusinessType] = useState([
    { value: "Health Care", label: "Health Care" },
    { value: "Fashion", label: "Fashion" },
    { value: "Sports", label: "Sports" },
    { value: "Food", label: "Food" },
    { value: "Travel", label: "Travel" },
    { value: "Technology", label: "Technology" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Family", label: "Family" },
    { value: "Gaming", label: "Gaming" },
    { value: "Finance", label: "Finance" },
  ]);

  const creator_id = data.data?.user_id.id;
  const past_company = data.data?.past_company;
  const shouldUseSlider = pastCompanies && pastCompanies.length > 2;

  console.log("Past company Details ", past_company);

  const [sponsoringItem, setSponsoringItem] = useState([
    { value: "tag_ads", label: "#ADS" },
    { value: "sponsored_by", label: "Sponsored By" },
    { value: "reel_sponsored", label: "Reel Sponsored" },
  ]);
  const handleBusinessChange = (selectedItems) => {
    setBusinessSelection(selectedItems);
  };
  const handleSponsorChange = (selectedItems) => {
    setSponsorSelection(selectedItems);
  };
  const auth = useSelector((state) => state.auth);
  const creator = useSelector((state) => state.creator);
  const { userDetails } = auth;
  const { creatorApproachDetails, creatorApproachError } = creator;
  console.log("Getting success message ", creatorApproachDetails);
  console.log("Getting error message ", creatorApproachError);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sponsor_id", userDetails?.user_id);
    formData.append("content_id", creator_id);
    const businessType = businessSelection.map((item) =>
      item.value.replace(/"/g, "")
    );
    const sponsorType = sponsorSelection.map((item) =>
      item.value.replace(/"/g, "")
    );
    formData.append("business_type", JSON.stringify(businessType));
    formData.append("sponsoring_items", JSON.stringify(sponsorType));
    try {
      // Make POST API call
      await dispatch(creatorApproach(formData));
      dispatch(fetchCreatorbyId(creator_id));
      console.log("Form Data ", formData);
      // sessionStorage.setItem("creatorApproveMessage", "Class created successfully!");
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };

  useEffect(() => {
    if (creatorApproachDetails) {
      if (
        creatorApproachDetails.msg == "The creator successfully makes contact."
      ) {
        // console.log("Content created successfully");
        // sessionStorage.setItem(
        //   "creatorApproachSuccess",
        //   "Your request sent to the creator!"
        // );
        setSuccessMessage("Your request sent to the creator!");
        handleClose();
        // window.location.reload();
        // navigate("/your_content/upcoming_content"); // Replace '/' with the desired route for the home page
      } else {
        console.log("An error occurred while creating the content");
        // window.scroll(0, 0);
        // setCreateLoading(false);
        handleClose();
        setErrorMessage("An error occurred during contacting the creator");
      }
    }
    let timer;
    if (successMessage) {
      // Set a timer to remove the success message after 3 seconds
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }

    // Cleanup function to clear the timer if component unmounts or success message changes
    return () => clearTimeout(timer);
  }, [creatorApproachDetails, successMessage]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const singleCompamny = past_company && past_company.length == 1;
  const doubleCompamny = past_company && past_company.length == 2;

  return (
    <>
      {successMessage && (
        <div className="container">
          <div
            className="alert alert-success"
            role="alert"
            style={{ borderRadius: "10px" }}
          >
            {successMessage}
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="container">
          <div
            className="alert alert-danger"
            role="alert"
            style={{ borderRadius: "10px" }}
          >
            {errorMessage}
          </div>
        </div>
      )}
      <section id="services" class="services">
        <div class="container">
          <div className="row">
            <div className="records-wrapper container d-flex align-items-stretch">
              <div className={`col col-md-9 px-0`}>
                {singleCompamny ? (
                  // Render individual card for single company
                  past_company?.map((company, index) => (
                    <div
                      key={index}
                      className="card-wrapper d-flex align-items-stretch mb-lg-0"
                    >
                      <div className="icon-box" style={{ width: "100%" }}>
                        {/* <div className="icon"> */}
                        <p
                          className="description"
                          style={{ marginBottom: "0%", textAlign: "left" }}
                        >
                          {company.partnership_duration}
                        </p>
                        {/* <i className={`bi ${company.icon}`}></i> */}
                        {/* </div> */}
                        <h4 className="title">
                          <a href={company.url}>{company.company_name}</a>
                        </h4>
                        {/* <div>
                          <h5 className="title" style={{ marginBottom: '4px', textAlign: 'left', padding: '0% 4%' }}>
                            Type: {company.collaboration_type}
                            <span style={{ float: 'right' }}>
                              Duration: {company.partnership_duration}
                            </span>
                          </h5>
                        </div> */}
                        <p
                          className="description"
                          style={{
                            height: "14vh",
                            overflowY: "auto",
                            scrollbarWidth: "thin",
                            scrollbarColor: "red white",
                          }}
                        >
                          {company.description_activity}
                        </p>
                      </div>
                    </div>
                  ))
                ) : doubleCompamny ? (
                  // Render a different UI for two companies
                  <div className="row">
                    {past_company?.map((company, index) => (
                      <div key={index} className="col-md-6">
                        <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                          <div className="icon-box" style={{ width: "100%" }}>
                            {/* <div className="icon">
                              <i className={`bi ${company.icon}`}></i>
                            </div> */}
                            {/* <p className="description" style={{ height: '14vh' }}>
                              {company.description_activity}
                            </p>   */}
                            <p
                              className="description"
                              style={{ marginBottom: "0%", textAlign: "left" }}
                            >
                              {company.partnership_duration}
                            </p>
                            <h4 className="title">
                              <a href={company.url}>{company.company_name}</a>
                            </h4>
                            <p
                              className="description"
                              style={{
                                height: "14vh",
                                overflowY: "auto",
                                scrollbarWidth: "thin",
                                scrollbarColor: "red white",
                              }}
                            >
                              {company.description_activity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Render a different UI for other cases
                  <Slider {...settings}>
                    {past_company?.map((company, index) => (
                      <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                        <div className="icon-box">
                          <p
                            className="description"
                            style={{ marginBottom: "0%", textAlign: "left" }}
                          >
                            {company.partnership_duration}
                          </p>
                          <h4 className="title">
                            <a href={company.url}>{company.company_name}</a>
                          </h4>
                          <p
                            className="description"
                            style={{
                              height: "14vh",
                              overflowY: "auto",
                              scrollbarWidth: "thin",
                              scrollbarColor: "red white",
                            }}
                          >
                            {company.description_activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                {/* <Slider {...settings}>
                  <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Sed ut perspiciatis</a>
                      </h4>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                  <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-book"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Magni Dolores</a>
                      </h4>
                      <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                  <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-shop"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Lorem Ipsum</a>
                      </h4>
                      <p className="description">
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi
                      </p>
                    </div>
                  </div>
                  <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Sed ut perspiciatis</a>
                      </h4>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                  <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-book"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Magni Dolores</a>
                      </h4>
                      <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                </Slider> */}
              </div>

              <div className="col col-md-3 d-flex align-items-stretch mb-2 mb-md-0 px-0">
                <div
                  className="add-box text-white text-center"
                  onClick={handleShow}
                >
                  <h1>
                    <i className="bi bi-plus-lg"></i>
                  </h1>
                  <h4 className="title">Add Your Company</h4>
                  <p>Work with Content Creator 01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          {/* <div className="box d-flex"> */}
          <span className="record-modal-heading">
            {/* <img
                  src={youtube}
                  alt=""
                  style={{ width: "30%", height: "auto", display: "inline" }}
                /> */}
            Make a Content Request to the Creator
          </span>
          <h2>
            <i
              className="bi bi-x-circle"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            ></i>
          </h2>
          {/* </div> */}
        </Modal.Header>
        <Modal.Body>
          <div className="container px-0">
            {/* <h1 className="d-flex justify-content-between"> */}
            {/* <span className="record-modal-heading"> */}
            {/* <img
                  src={youtube}
                  alt=""
                  style={{ width: "30%", height: "auto", display: "inline" }}
                /> */}
            {/* Request An Content Creator for Your Promotion */}
            {/* </span> */}
            {/* <i
                className="bi bi-x"
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              ></i> */}
            {/* </h1> */}

            {userDetails?.user_type === "Sponsor" ? (
              <>
                <div className="container px-0 my-2">
                  {/* <div className="row" style={{ rowGap: "20px" }}> */}
                  <div>
                    <label className="large" for="inputEmailAddress">
                      Business Type
                    </label>
                    <Select
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      onChange={handleBusinessChange}
                      isMulti
                      options={businessType}
                      value={businessSelection}
                    />
                  </div>
                  <div>
                    <label className="large" for="inputEmailAddress">
                      Sponsoring Item
                    </label>
                    <Select
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      onChange={handleSponsorChange}
                      isMulti
                      options={sponsoringItem}
                      value={sponsorSelection}
                    />
                  </div>
                </div>
                <button className="btn btn-success" onClick={handleSubmitClick}>
                  Submit
                </button>
              </>
            ) : (
              <>
                <div className="container px-0 my-2">
                  {/* <div className="row" style={{ rowGap: "20px" }}> */}
                  "Unlock the potential to connect with creators by registering as a sponsor today."
                </div>
              </>
            )}
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Records;
