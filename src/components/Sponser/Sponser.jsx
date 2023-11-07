// import circle1 from "../../assets/img/circle1.svg";
// import circle2 from "../../assets/img/circle2.svg";
// import circle5 from "../../assets/img/circle5.svg";
// import circle7 from "../../assets/img/circle7.svg";
import sponser_card from "../../assets/img/blog/blog-1.jpg";
import ccimg_card from "../../assets/img/mrbeast.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sponser.css";
const Sponser = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one card at a time on mobile
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="sponsor-line">
        <h1 className="sponsor-text">Sponser Events Near You</h1>
      </div>
      <h2 className="sponsor-mobile-text">Sponser Events Near You</h2>
      

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
        <div className="sponsor-desktop">
          <div className="row my-5">
            {/* <Slider {...settings}> */}
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
            {/* </Slider> */}
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
        <div className="sponsor-mobile">
          {/* <div className="row my-5"> */}
            <Slider {...settings}>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
                      <div class="text-overlay">
                        <p className="text-lg font-weight-bold mb-0 ">
                          Ganesh Chaturthi
                        </p>
                        <p>Durg, C.G.</p>
                      </div>
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
            </Slider>
            <div className="container d-flex justify-content-center">
              <button
                className="btn btn-outline-primary mt-4"
                style={{ borderRadius: "15px" }}
              >
                See More
              </button>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* Content Creator Layer */}

      <div className="line">
        <h1 className="heading">Sponser Content Creators</h1>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3">
            <div
              class="card"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-4 col-md-5 col-sm-4">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start cc-img"
                    alt=""
                  />
                </div>
                <div class="col-6 col-md-5 col-sm-6 mt-0">
                  <div class="card-body mb">
                    <h5 class="card-title font-weight-bold d-inline">
                      Mr. Beast
                    </h5>
                    <br />
                    <span class="card-text ">Platform:- Youtube</span>
                    <br />
                    <span class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; 1 Million &lt;
                    </span>
                    <br />
                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; 50 Million
                    </p>
                  </div>
                </div>
                <div class=" col-2 col-md-2 col-sm-2">
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
          <div className="col-lg-6 col-sm-12 mb-3">
            <div
              class="card"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-4 col-md-5 col-sm-4">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start cc-img"
                    alt=""
                  />
                </div>
                <div class="col-6 col-md-5 col-sm-6 mt-0">
                  <div class="card-body mb">
                    <h5 class="card-title font-weight-bold d-inline">
                      Mr. Beast
                    </h5>
                    <br />
                    <span class="card-text ">Platform:- Youtube</span>
                    <br />
                    <span class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; 1 Million &lt;
                    </span>
                    <br />
                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; 50 Million
                    </p>
                  </div>
                </div>
                <div class=" col-2 col-md-2 col-sm-2">
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
          <div className="col-lg-6 col-sm-12 mb-3">
            <div
              class="card"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-4 col-md-5 col-sm-4">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start cc-img"
                    alt=""
                  />
                </div>
                <div class="col-6 col-md-5 col-sm-6 mt-0">
                  <div class="card-body mb">
                    <h5 class="card-title font-weight-bold d-inline">
                      Mr. Beast
                    </h5>
                    <br />
                    <span class="card-text ">Platform:- Youtube</span>
                    <br />
                    <span class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; 1 Million &lt;
                    </span>
                    <br />
                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; 50 Million
                    </p>
                  </div>
                </div>
                <div class=" col-2 col-md-2 col-sm-2">
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
          <div className="col-lg-6 col-sm-12 mb-3">
            <div
              class="card"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            >
              <div class="row g-0">
                <div class="col-4 col-md-5 col-sm-4">
                  <img
                    src={ccimg_card}
                    class="img-fluid rounded-start cc-img"
                    alt=""
                  />
                </div>
                <div class="col-6 col-md-5 col-sm-6 mt-0">
                  <div class="card-body mb">
                    <h5 class="card-title font-weight-bold d-inline">
                      Mr. Beast
                    </h5>
                    <br />
                    <span class="card-text ">Platform:- Youtube</span>
                    <br />
                    <span class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; 1 Million &lt;
                    </span>
                    <br />
                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; 50 Million
                    </p>
                  </div>
                </div>
                <div class=" col-2 col-md-2 col-sm-2">
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
