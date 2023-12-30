import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import apiurl from "../../../constant/config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContent } from "../../../redux/actions/contentAction";
// import { cardData2 } from "../../data/data";
const SponsorCalendarCard = ({ line, cardData }) => {

    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1, // Display one card at a time on mobile
    //   slidesToScroll: 1,
    //   prevArrow: null, // Hide the previous arrow
    //   nextArrow: null, // Hide the next arrow
    // };
    console.log(cardData);
    const navigate = useNavigate();

    const handleSponsorClick = (data) => {
        navigate("/mycontent-details", { state: { contentData: data } });
    };

    return (
        <>
            {/* Content Creator Layer */}

            <h1 className="sponsor-text">{line}</h1>

            <h2 className="sponsor-mobile-text">{line}</h2>

            <div
                className="sponsor-second-container container"
                style={{ marginTop: "4rem" }}
            >
                <div className="row">
                    {cardData &&
                        cardData.map((data) => (
                            <div className="col-lg-6 col-sm-12 mb-3" key={data.id}>
                                <div className="card">
                                    <div
                                        className="row g-0"
                                        style={{ width: "auto", height: "100%" }}
                                    >
                                        <div className="col-4 col-md-5 col-sm-4 cc-img-container d-flex">
                                            <img
                                                src={apiurl + data.thumbnail1}
                                                className="img-fluid rounded-start cc-img"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-6 col-md-5 col-sm-6 px-lg-0 d-flex align-items-center">
                                            <div className="card-body cc-card-body">
                                                <h5 className="card-title font-weight-bold d-inline">
                                                    {data.title}
                                                </h5>
                                                <br />
                                                <span className="card-text">
                                                    Platform: {data.content_platform}
                                                </span>
                                                <br />
                                                <span className="card-text">
                                                    <i className="bi bi-cash text-success"></i>
                                                    &nbsp;&nbsp; {data.content_category}
                                                </span>
                                                <br />
                                                <p className="card-text">
                                                    <i className="bi bi-people-fill text-danger"></i>
                                                    &nbsp;&nbsp; {data.audience_expected}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" col-2 col-md-2 col-sm-2 pl-lg-0">
                                            <button
                                                className="btn btn-primary btn-block"
                                                style={{
                                                    height: "100%",
                                                    borderRadius: "0px 18px 18px 0px",
                                                    backgroundColor: "#004EA9",
                                                }}
                                                onClick={() => handleSponsorClick(data)}
                                            >
                                                <span className="text-xl">&gt;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div
                    className="container d-flex justify-content-center"
                    style={{ paddingBottom: "4vh" }}
                >
                    <Link to="/cc">
                        <button
                            className="btn btn-outline-primary mt-4"
                            style={{
                                borderRadius: "15px",
                                border: "2px solid #004EA9",
                                background: "#FFF",
                                boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.18)",
                                fontWeight: "bolder",
                                color: "#004EA9",
                            }}
                        >
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SponsorCalendarCard;
