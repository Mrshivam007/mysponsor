import ccimg_card from "../../assets/img/mrbeast.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponser.css";

const SponserCC = (cardData) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one card at a time on mobile
    slidesToScroll: 1,
    prevArrow: null, // Hide the previous arrow
    nextArrow: null, // Hide the next arrow
  };
  console.log(cardData);

  return (
    <>
      {/* Content Creator Layer */}

      <div
        className="sponsor-line"
        style={{ borderTop: "none", paddingBottom: "1px" }}
      >
        <h1 className="sponsor-text" style={{ backgroundColor: "transparent" }}>
          Sponsor Content Creator
        </h1>
      </div>
      <h2 className="sponsor-mobile-text">Sponsor Content Creator</h2>

      <div
        className="sponsor-second-container container mb-4"
        style={{ marginTop: "8rem" }}
      >
        <div className="row">
        {cardData && cardData?.cardData.map((data) => (
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
                      {data.name}
                    </h5>
                    <br />
                    <span class="card-text ">{data.plateform}</span>
                    <br />
                    <span class="card-text">
                      <i className="bi bi-cash text-success"></i>
                      &nbsp;&nbsp; {data.price} &lt;
                    </span>
                    <br />
                    <p class="card-text">
                      <i className="bi bi-people-fill text-danger"></i>
                      &nbsp;&nbsp; {data.people}
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
        ))}
        </div>
        <div
          className="container d-flex justify-content-center"
          style={{ paddingBottom: "4vh" }}
        >
          <button
            className="btn btn-outline-primary mt-4"
            style={{ borderRadius: "15px" }}
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default SponserCC;
