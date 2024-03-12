import React from "react";

function RecommendationSection({ recommendation }) {
  return (
    <section
      id="features"
      className="features"
      style={{ borderRadius: "15px" }}
    >
      <div className="container">
        <div className="row">
          {recommendation.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 col-6 mt-4">
              <div className="icon-box">
                <i className={`bi bi-${feature.icon}`}></i>
                <h3>
                  <a href={feature.link}>{feature.title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendationSection;
