import React, { useState } from "react";

function RecommendationSection({ recommendation }) {
  const [openCategory, setOpenCategory] = useState(null);

  const handleRecommendationClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  console.log("Recommendati data by prop ", recommendation);

  return (
    <section id="features" className="features" style={{ borderRadius: "15px" }}>
      <div className="container">
        <div className="row">
          {recommendation?.map((item, index) => {
            const category = Object.keys(item)[0]; // Extracting the category name
            const details = item[category].details; // Extracting details array

            return (
              <div key={index} className={`col-lg-${openCategory ? "6" : "3"} col-md-4 col-${openCategory ? "12" : "6"} mt-4`}>
                <div className="icon-box" onClick={() => handleRecommendationClick(category)}>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className={`fa ${item[category].icon.text}`}></i> {/* Using the icon from the category object */}
                    <h3>{category}</h3> {/* Displaying category as title */}
                  </div>
                  {openCategory === category && (
                    <>
                      <ul>
                        {details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecommendationSection;
