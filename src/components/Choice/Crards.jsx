import "./cards.css";
import img1 from "../../assets/img/choice/choice-card-1.png";
import img2 from "../../assets/img/choice/choice-card-2.png";
import { Link } from "react-router-dom";
const Choice = () => {
  return (
    <>
      <div className="page-section">
        <h1 className="choice-heading" style={{ background: "transparent" }}>
          Centered Heading
        </h1>

        <div className="container" style={{ marginTop: "2%" }}>
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div className="col-lg-6">
              <div
                className="card-service wow fadeInUp choice-card"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="body choice-body choice-1 text-left">
                  <h2 className="font-weight-bolder mb-0">Events</h2>
                  <div className="card_line"></div>
                  <p className="choice-para mt-4 text-left">
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <Link
                    to="/events"
                    className="choice-btn btn text-white py-1 font-weight-bold"
                    style={{
                      float: "left",
                      backgroundColor: "#00448B",
                      borderRadius: "15px",
                    }}
                  >
                    Explore now
                  </Link>
                </div>
                <div
                  className="header choice-img"
                  style={{ textAlign: "right" }}
                >
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card-service wow fadeInUp choice-card"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="body choice-body choice-2 text-left">
                  <h2 className="font-weight-bolder mb-0">Content Creators</h2>
                  <div className="card_line"></div>
                  <p className="choice-para mt-4 text-left">
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <Link
                    to="/cc"
                    className="choice-btn btn text-white py-1 font-weight-bold"
                    style={{
                      float: "left",
                      backgroundColor: "#00448B",
                      borderRadius: "15px",
                    }}
                  >
                    Explore now
                  </Link>
                </div>
                <div
                  className="header choice-img"
                  style={{ textAlign: "right" }}
                >
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p
              className="choice-bottom-para"
              style={{ padding: "2% 8%", textAlign: "center" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              autem incidunt deleniti cum quidem dolore earum vitae doloribus
              ducimus quod eum dicta pariatur facilis mollitia, laborum,
              temporibus quaerat quas nesciunt excepturi ipsum nulla iste nisi.
              Eaque.
            </p>
          </div>
        </div>
        <div className="line">
          <a
            href="service.html"
            className="btn text-white py-1 px-4 font-weight-bold"
            style={{
              marginTop: "-26px",
              backgroundColor: "#00448B",
              borderRadius: "15px",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Choice;
