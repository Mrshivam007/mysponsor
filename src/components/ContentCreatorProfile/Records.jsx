import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";
import { Modal } from "react-bootstrap";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import { creatorApproach, fetchCreatorbyId } from "../../redux/actions/creatorAction";
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
      icon: "bi-shop",
      description: "Description for Company 1",
      url: "#"
    },
    {
      company_name: "Company 2",
      icon: "bi-people",
      description: "Description for Company 2",
      url: "#"
    },
    {
      company_name: "Company 2",
      icon: "bi-people",
      description: "Description for Company 2",
      url: "#"
    },
    {
      company_name: "Company 2",
      icon: "bi-people",
      description: "Description for Company 2",
      url: "#"
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
      if (creatorApproachDetails.msg == "The creator successfully makes contact.") {
        // console.log("Content created successfully");
        // sessionStorage.setItem(
        //   "creatorApproachSuccess",
        //   "Your request sent to the creator!"
        // );
        setSuccessMessage("Your request sent to the creator!");
        handleClose()
        // window.location.reload();
        // navigate("/your_content/upcoming_content"); // Replace '/' with the desired route for the home page
      } else {
        console.log("An error occurred while creating the content");
        // window.scroll(0, 0);
        // setCreateLoading(false);
        handleClose()
        setErrorMessage("An error occurred during contacting the creator");
      }
    }
    let timer;
    if (successMessage) {
      // Set a timer to remove the success message after 3 seconds
      timer = setTimeout(() => {
        setSuccessMessage('');
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
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const singleCompamny = pastCompanies && pastCompanies.length == 1;
  const doubleCompamny = pastCompanies && pastCompanies.length == 2;


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
                  pastCompanies?.map((company, index) => (
                    <div key={index} className="card-wrapper d-flex align-items-stretch mb-lg-0">
                      <div className="icon-box" style={{ width: '100%' }}>
                        <div className="icon">
                          <i className={`bi ${company.icon}`}></i>
                        </div>
                        <h4 className="title">
                          <a href={company.url}>{company.company_name}</a>
                        </h4>
                        <p className="description">
                          {company.description_activity}
                        </p>
                        <div className="additional-info" style={{ fontSize: '14px', marginTop: '10px' }}>
                          <p><strong>Type:</strong> {company.collaboration_type}</p>
                          <p><strong>Duration:</strong> {company.partnership_duration}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : doubleCompamny ? (
                  // Render a different UI for two companies
                  <div className="row">
                    {pastCompanies?.map((company, index) => (
                      <div key={index} className="col-md-6">
                        <div className="card-wrapper d-flex align-items-stretch mb-lg-0">
                          <div className="icon-box" style={{ width: '100%' }}>
                            <div className="icon">
                              <i className={`bi ${company.icon}`}></i>
                            </div>
                            <h4 className="title">
                              <a href={company.url}>{company.company_name}</a>
                            </h4>
                            <p className="description">
                              {company.description_activity}
                            </p>
                            <div className="additional-info" style={{ fontSize: '14px', marginTop: '10px' }}>
                              <p><strong>Type:</strong> {company.collaboration_type}</p>
                              <p><strong>Duration:</strong> {company.partnership_duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Render a different UI for other cases
                  <Slider {...settings}>
                    {pastCompanies?.map((company, index) => (
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
                          <div className="additional-info" style={{ fontSize: '14px', marginTop: '10px' }}>
                            <p><strong>Type:</strong> {company.collaboration_type}</p>
                            <p><strong>Duration:</strong> {company.partnership_duration}</p>
                          </div>
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

              <div className="col col-md-3 d-flex align-items-stretch mb-2 mb-lg-0 px-0">
                <div
                  className="add-box text-white text-center"
                  onClick={handleShow}
                >
                  <h1>
                    <i className="bi bi-plus-lg"></i>
                  </h1>
                  <h4 className="title">Add Your Company</h4>
                  <p>
                    Work with Content Creator 01 to add your company among the
                    others
                  </p>
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
        <Modal.Body>
          <div className="container">
            <h1 className="d-flex justify-content-between">
              <span>
                {/* <img
                  src={youtube}
                  alt=""
                  style={{ width: "30%", height: "auto", display: "inline" }}
                /> */}
                Request An Content Creator for Your Promotion
              </span>
              <i
                className="bi bi-x"
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              ></i>
            </h1>

            <div className="container">
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
                  PSonsoring Item
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
            <button className="btn btn-success" onClick={handleSubmitClick}>Submit</button>
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Records;