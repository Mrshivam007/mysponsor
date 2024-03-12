import youtube from "../../../assets/img/youtube.jpg";
import twitch from "../../../assets/img/twitch.jpg";
import facebook from "../../../assets/img/Facebook.png";
import instagram from "../../../assets/img/instagram.jpg";
import snapchat from "../../../assets/img/snapchat.jpg";
import tiktok from "../../../assets/img/tiktok.jpg";
import { Link } from "react-router-dom";
const CreatorPlatform = () => {
    return (
        <>
            <div className="container socialmedia-desktop-container">
                <div className="box1">
                    <div className="row">
                        <div className="col-6 col-md-6 socialmedia-card1">
                            <div
                                className="card-service platform-container fadeInUp"
                                style={{
                                    maxWidth: "100%",
                                    backgroundColor: "#FF6762",
                                }}
                            >
                                <Link to={"/youtube"}>
                                    <div className="platform-img d-flex justify-content-center">
                                        <img
                                            src={youtube}
                                            alt=""
                                            style={{ width: "60%", height: "auto", margin: "8%" }}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <h3 className=" text-center font-weight-bolder ">Youtube</h3>
                        </div>
                        <div className="col-6 col-md-6 socialmedia-card1">
                            <div
                                className="card-service platform-container fadeInUp"
                                style={{
                                    maxWidth: "100%",
                                    backgroundColor: "#5A3E85",
                                }}
                            >
                                <div className="platform-img d-flex justify-content-center">
                                    <img
                                        src={twitch}
                                        alt=""
                                        style={{ width: "48%", height: "auto", margin: "8%" }}
                                    />
                                </div>
                            </div>
                            <h3 className=" text-center font-weight-bolder ">Twitch</h3>
                        </div>
                    </div>
                    <div className="row socialmedia-row">
                        <div className="col-6 col-md-6 socialmedia-card1">
                            <div
                                className="card-service platform-container fadeInUp"
                                style={{
                                    maxWidth: "100%",
                                    background: "linear-gradient(112deg ,#3871C9 , #FF6942 )",
                                }}
                            >
                                <Link to={"/instagram"}>
                                    <div className="platform-img d-flex justify-content-center">
                                        <img
                                            src={instagram}
                                            alt=""
                                            style={{ width: "50%", height: "auto", margin: "8%" }}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <h3 className=" text-center font-weight-bolder ">Instagram</h3>
                        </div>
                        <div className="col-6 col-md-6 socialmedia-card1">
                            <div
                                className="card-service platform-container fadeInUp"
                                style={{
                                    maxWidth: "100%",
                                    backgroundColor: "#69C9D0",
                                }}
                            >
                                <div className="platform-img d-flex justify-content-center">
                                    <img
                                        src={tiktok}
                                        alt=""
                                        style={{ width: "47%", height: "auto", margin: "8%" }}
                                    />
                                </div>
                            </div>
                            <h3 className=" text-center font-weight-bolder ">TikTok</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CreatorPlatform;