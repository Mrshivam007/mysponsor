import React, { useState } from "react";

function RecommendationSection({ recommendation }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleRecommendationClick = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };
  return (
    <section
      id="features"
      className="features"
      style={{ borderRadius: "15px" }}
    >
      <div className="container">
        <div className="row">
          {recommendation.map((feature, index) => (
            <div
              key={index}
              className={`col-lg-${
                openIndex === feature.id ? "6" : "3"
              } col-md-4 col-${openIndex === feature.id ? "12" : "6"} mt-4`}
            >
              <div
                className="icon-box"
                onClick={() => handleRecommendationClick(feature.id)}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <i className={`bi bi-${feature.icon}`}></i>
                  <h3>{feature.title}</h3>
                </div>
                {openIndex === feature.id && (
                  <>
                    <ul>
                      <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nihil, ea.
                      </li>
                      <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nihil, ea.
                      </li>
                      <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nihil, ea.
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendationSection;
