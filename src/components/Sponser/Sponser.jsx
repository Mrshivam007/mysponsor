// import circle1 from "../../assets/img/circle1.svg";
// import circle2 from "../../assets/img/circle2.svg";
// import circle5 from "../../assets/img/circle5.svg";
// import circle7 from "../../assets/img/circle7.svg";
import sponser_card from "../../assets/img/blog/blog-1.jpg";
import ccimg_card from "../../assets/img/mrbeast.svg";
import "./sponser.css";
const Sponser = () => {
  return (
    <>
      <div className="line">
        <h1 className="heading">Sponser Events Near You</h1>
      </div>

      {/* Colored Background */}
      {/* <div className="container-fluid" id="sponser_bg">
        <div className="row">
          <div className="col-lg-4" style={{background:`url${circle1}`}}></div>
          <div className="col-lg-4" style={{background:`url${circle2}`}}></div>
          <div className="col-lg-4" style={{background:`url${circle5}`}}></div>
          <div className="col-lg-4" style={{background:`url${circle7}`}}></div>
          <div className="col-lg-4" style={{background:`url${circle1}`}}></div>
        </div>
      </div> */}

      {/* Events Layer  */}

      <div className="container" id="sponser_layer">
        <div className="row my-5">
          <div className="col-lg-3 col-md-6 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    src={sponser_card}
                    alt=""
                    style={{ width: "100%" }}
                    className="sponser_card_img"
                  />
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div
                    className="col"
                    style={{ borderRight: "1px solid #cfcfcf" }}
                  >
                    <h6 className="post-title">
                      <a href="blog-details.html">Price Band</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-cash text-success"></i>
                      <b> $10,000 &gt;</b>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="post-title">
                      <a href="blog-details.html">Audience</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> 1 Million+ </b>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary mx-auto rounded-0"
                style={{ width: "100%" }}
              >
                Sponser Now
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    src={sponser_card}
                    alt=""
                    style={{ width: "100%" }}
                    className="sponser_card_img"
                  />
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div
                    className="col"
                    style={{ borderRight: "1px solid #cfcfcf" }}
                  >
                    <h6 className="post-title">
                      <a href="blog-details.html">Price Band</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-cash text-success"></i>
                      <b> $10,000 &gt;</b>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="post-title">
                      <a href="blog-details.html">Audience</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> 1 Million+ </b>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary mx-auto rounded-0"
                style={{ width: "100%" }}
              >
                Sponser Now
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    src={sponser_card}
                    alt=""
                    style={{ width: "100%" }}
                    className="sponser_card_img"
                  />
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div
                    className="col"
                    style={{ borderRight: "1px solid #cfcfcf" }}
                  >
                    <h6 className="post-title">
                      <a href="blog-details.html">Price Band</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-cash text-success"></i>
                      <b> $10,000 &gt;</b>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="post-title">
                      <a href="blog-details.html">Audience</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> 1 Million+ </b>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary mx-auto rounded-0"
                style={{ width: "100%" }}
              >
                Sponser Now
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    src={sponser_card}
                    alt=""
                    style={{ width: "100%" }}
                    className="sponser_card_img"
                  />
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div
                    className="col"
                    style={{ borderRight: "1px solid #cfcfcf" }}
                  >
                    <h6 className="post-title">
                      <a href="blog-details.html">Price Band</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-cash text-success"></i>
                      <b> $10,000 &gt;</b>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="post-title">
                      <a href="blog-details.html">Audience</a>
                    </h6>
                    <div className="post-date">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> 1 Million+ </b>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary mx-auto rounded-0"
                style={{ width: "100%" }}
              >
                Sponser Now
              </button>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <button
              className="btn btn-outline-primary mt-4"
              style={{ borderRadius: "15px" }}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Content Creator Layer */}

      <div className="line">
        <h1 className="heading">Sponser Content Creators</h1>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              class="card "
              style={{ maxWidth: "489px", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start"
                    alt=""
                    style={{ margin: "13%" }}
                  />
                </div>
                <div class="col-md-5 mt-4">
                  <div class="card-body mb">
                    <h5 class="card-title font-weight-bold">Mr. Beast</h5>

                    <p class="card-text font-weight-bold">Platform:- Youtube</p>

                    <p class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      <b> &nbsp;&nbsp; $10,000 &gt;</b>
                    </p>

                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> &nbsp;&nbsp; 1 Million+ </b>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    style={{
                      height: "100%",
                      borderRadius: "0px 18px 18px 0px",
                    }}
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              class="card mb-3"
              style={{ maxWidth: "489px", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start"
                    alt=""
                    style={{ margin: "13%" }}
                  />
                </div>
                <div class="col-md-5 mt-4">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">Mr. Beast</h5>

                    <p class="card-text font-weight-bold">Platform:- Youtube</p>

                    <p class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      <b> &nbsp;&nbsp; $10,000 &gt;</b>
                    </p>

                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> &nbsp;&nbsp; 1 Million+ </b>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    style={{
                      height: "100%",
                      borderRadius: "0px 18px 18px 0px",
                    }}
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              class="card mb-3"
              style={{ maxWidth: "489px", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start"
                    alt=""
                    style={{ margin: "13%" }}
                  />
                </div>
                <div class="col-md-5 mt-4">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">Mr. Beast</h5>

                    <p class="card-text font-weight-bold">Platform:- Youtube</p>

                    <p class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      <b> &nbsp;&nbsp; $10,000 &gt;</b>
                    </p>

                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> &nbsp;&nbsp; 1 Million+ </b>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    style={{
                      height: "100%",
                      borderRadius: "0px 18px 18px 0px",
                    }}
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              class="card mb-3"
              style={{ maxWidth: "489px", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start"
                    alt=""
                    style={{ margin: "13%" }}
                  />
                </div>
                <div class="col-md-5 mt-4">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">Mr. Beast</h5>

                    <p class="card-text font-weight-bold">Platform:- Youtube</p>

                    <p class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      <b> &nbsp;&nbsp; $10,000 &gt;</b>
                    </p>

                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      <b> &nbsp;&nbsp; 1 Million+ </b>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    style={{
                      height: "100%",
                      borderRadius: "0px 18px 18px 0px",
                    }}
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponser;
