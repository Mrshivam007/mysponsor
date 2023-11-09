import sponser_card from "../../assets/img/blog/blog-1.jpg";
import ccimg_card from "../../assets/img/mrbeast.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sponser.css";
import backgroundimg from "../../assets/img/circle-bg.png"
import arrow from "../../assets/img/right-arrow.png"
const Sponser = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one card at a time on mobile
    slidesToScroll: 1,
    prevArrow: null, // Hide the previous arrow
    nextArrow: null, // Hide the next arrow
  };

  return (
    <>
      <div className="bg-sponsor" style={{ height: 'auto', marginBottom: '-4vh', backgroundImage: `url(${backgroundimg})` }}>
        <div className="sponsor-line">
          <h1 className="sponsor-text">Sponser Events Near You</h1>
        </div>
        <h2 className="sponsor-mobile-text">Sponser Events Near You</h2>

        {/* Events Layer  */}

        <div className="container sponsor-container" id="sponser_layer">
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
            <div className="row" style={{ flexWrap: 'nowrap' }}>
              <div className="col-lg-1" style={{ alignSelf: 'center', width: '24%'}}>
                <div className="sponsor-card-indicator">
                  EVENTS
                  {/* hello */}
                <img src={arrow} style={{transform: 'rotate(90deg)'}} />
                </div>
              </div>
              <div className="col-lg-4" style={{ width: '76%' }}>

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
                      <div className="body sponsor-card-detail">
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
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <button
                className="sponsor-btn btn btn-outline-light mt-4"
                style={{ borderRadius: "15px", backgroundColor: 'white', marginBottom: '2vh', width: '100%', color: 'blue' }}
              >
                See More
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Content Creator Layer */}

        <div className="sponsor-line" style={{borderTop: 'none', paddingBottom: '1px'}}>
          <h1 className="sponsor-text" style={{backgroundColor: 'transparent'}}>Sponsor Content Creator</h1>
        </div>
        <h2 className="sponsor-mobile-text">Sponsor Content Creator</h2>


        <div className="sponsor-second-container container mb-4" style={{ marginTop: '8rem' }}>
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
          <div className="container d-flex justify-content-center" style={{paddingBottom: '4vh'}}>
            <button
              className="btn btn-outline-primary mt-4"
              style={{ borderRadius: "15px" }}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponser;
