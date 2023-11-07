import "./categories.css";
import cat_card from "../../assets/img/cat_card.svg";

const Categories = () => {
  return (
    <>
      <div class="categ-line mt-5 mb-5">
        <h1 class="categ-heading">Categories</h1>
      </div>

      {/* Background of categories section */}

      <div
        className="row"
        style={{
          width: "100%",
          height: "80vh",
          margin: 0,
          padding: 0,
          zIndex: "-1",
        }}
      >
        <div className="col-6 bg-image1"></div>
        <div className="col-6 bg-image2"></div>
      </div>

      {/* Categories card */}

      <div className="box1">
        <div className="row category-row">
          <div className="col-sm-6 category-card1">
            <div
              className="card-service wow1 fadeInUp"
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="body" style={{ textAlign: "left" }}>
                <h1
                  className="category-heading text-light mt-4"
                  style={{ fontWeight: "bold" }}
                >
                  Sports Events
                </h1>

                <p
                  className="category-para text-light"
                  style={{ textAlign: "left" }}
                >
                  Sponser Now
                </p>
              </div>
              <div className="cat-img">
                <img
                  src={cat_card}
                  alt=""
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 category-card2">
            <div
              className="card-service wow2 fadeInUp"
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="body" style={{ textAlign: "left" }}>
                <h1
                  className="category-heading text-light"
                  style={{ fontWeight: "bold" }}
                >
                  Sports Events
                </h1>

                <p
                  className="category-para text-light mt-4"
                  style={{ textAlign: "left" }}
                >
                  Sponser Now
                </p>
              </div>
              <div className="cat-img">
                <img
                  src={cat_card}
                  alt=""
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row category-row">
          <div className="col-sm-6 category-card1">
            <div
              className="card-service wow1 fadeInUp"
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="body" style={{ textAlign: "left" }}>
                <h1
                  className="category-heading text-light mt-4"
                  style={{ fontWeight: "bold" }}
                >
                  Sports Events
                </h1>

                <p
                  className="category-para text-light"
                  style={{ textAlign: "left" }}
                >
                  Sponser Now
                </p>
              </div>
              <div className="cat-img">
                <img
                  src={cat_card}
                  alt=""
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 category-card2">
            <div
              className="card-service wow2 fadeInUp"
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="body" style={{ textAlign: "left" }}>
                <h1
                  className="category-heading text-light"
                  style={{ fontWeight: "bold" }}
                >
                  Sports Events
                </h1>

                <p
                  className="category-para text-light mt-4"
                  style={{ textAlign: "left" }}
                >
                  Sponser Now
                </p>
              </div>
              <div className="cat-img">
                <img
                  src={cat_card}
                  alt=""
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary" style={{ width: "100%" }}>
          Browse Categories
        </button>
      </div>
    </>
  );
};

export default Categories;
