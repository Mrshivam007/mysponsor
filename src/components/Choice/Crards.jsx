import "./cards.css";
import img1 from "../../assets/img/services/service-2.svg";
const Choice = () => {
  return (
    <>
      <div className="page-section">
        <div className="choice-line">
          <h1 className="choice-heading">Centered Heading</h1>
        </div>
        <div className="container" style={{ marginTop: "2%" }}>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="card-service wow fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="body" style={{ textAlign: "left" }}>
                  <h1 className="text-secondary" style={{ fontWeight: "bold" }}>
                    Events
                  </h1>
                  <div className="card_line"></div>
                  <p className="choice-para mt-4" style={{ textAlign: "left" }}>
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <a
                    href="service.html"
                    className="choice-btn btn btn-primary"
                    style={{ float: "left" }}
                  >
                    Read More
                  </a>
                </div>
                <div className="header" style={{ textAlign: "right" }}>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="card-service wow fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="body" style={{ textAlign: "left" }}>
                  <h1 className="text-secondary" style={{ fontWeight: "bold" }}>
                    Content Creator
                  </h1>
                  <div className="card_line"></div>
                  <p className=" choice-para mt-4" style={{ textAlign: "left" }}>
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <a
                    href="service.html"
                    className=" choice-btn btn btn-primary"
                    style={{ float: "left" }}
                  >
                    Read More
                  </a>
                </div>
                <div className="header" style={{ textAlign: "right" }}>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p style={{ padding: "2% 8%", textAlign: "center" }}>
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
            className="btn btn-primary"
            style={{ marginTop: "-26px" }}
          >
            Read More
          </a>
          {/* <h1 class="heading">Centered Heading</h1> */}
        </div>
      </div>
    </>
  );
};

export default Choice;
