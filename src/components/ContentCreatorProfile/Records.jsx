import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Records = () => {
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

  return (
    <>
      <section id="services" class="services">
        <div class="container">
          {/* <div class="row">
            <div className="container d-flex">
              <Slider {...settings}>
                <div class="col-8 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-shop"></i>
                    </div>
                    <h4 class="title">
                      <a href="">Lorem Ipsum</a>
                    </h4>
                    <p class="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>

                <div class="col-8 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-people"></i>
                    </div>
                    <h4 class="title">
                      <a href="">Sed ut perspiciatis</a>
                    </h4>
                    <p class="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>

                <div class="col-8 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-book"></i>
                    </div>
                    <h4 class="title">
                      <a href="">Magni Dolores</a>
                    </h4>
                    <p class="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>
              </Slider>
              <div class="col-8 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bi bi-fire"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p class="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="records-wrapper container d-flex align-items-stretch">
              <div className="col col-md-9 px-0">
                <Slider {...settings}>
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
                </Slider>
              </div>

              <div className="col col-md-3 d-flex align-items-stretch mb-2 mb-lg-0 px-0">
                <div
                  className="add-box text-white text-center"
                  // style={{
                  //   backgroundColor: "#FF2B66",
                  //   padding: "8% 2%",
                  //   borderRadius: "10px",
                  //   cursor: "pointer",
                  // }}
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
    </>
  );
};

export default Records;
