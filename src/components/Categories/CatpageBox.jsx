import "./categories.css";
// import cat_card from "../../assets/img/cat_card.svg";
import img1 from "../../assets/img/categories/img1.png";
import img2 from "../../assets/img/categories/img2.png";
import img3 from "../../assets/img/categories/img3.png";
import img4 from "../../assets/img/categories/img4.png";
import img5 from "../../assets/img/categories/img5.png";
import img6 from "../../assets/img/categories/img6.png";
import img7 from "../../assets/img/categories/img7.png";
import img8 from "../../assets/img/categories/img8.png";
import img9 from "../../assets/img/categories/img9.png";
import { Link, useNavigate } from "react-router-dom";
import { fetchEventCategory } from "../../redux/actions/eventCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Categories = ({ line }) => {

  const navigate = useNavigate();

  const handleClick = (category, categoryName) => {
    navigate(`/eventCategory/${category}`, { state: { eventData: EventCategory.eventCategory[category], categoryName: categoryName } });
  };

  const dispatch = useDispatch();
  const EventCategory = useSelector(state => state.eventCategory)
  useEffect(() => {
    dispatch(fetchEventCategory())
  }, [])

  console.log("Event Category Details ", EventCategory.eventCategory);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getImageForCategoryImage(index) {
    switch (index) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      case 3:
        return img4;
      default:
        return img1; // Default to img1 if index is out of range
    }
  }

  return (
    <>
      {/* <h1 className="category-text">{line}</h1> */}

      <h2 className="cat-mobile-text">{line}</h2>

      {/* Category cards */}
      <div className="container category-container" style={{ maxWidth: "100%" }}>
        <div className="box1">
          <div className="row category-row">
            {[...Object.entries(EventCategory.eventCategory || {})]
              .filter(([key, value]) => value && value.length > 0)
              .sort((a, b) => b[1].length - a[1].length)
              .map(([category, cardData], index) => (
                <div className="col-sm-6 category-card1" key={category} onClick={() => handleClick(category, capitalizeFirstLetter(category))}>
                  <div
                    className={`card-service wow${index % 2 === 0 ? 1 : 2} fadeInUp`}
                    style={{
                      maxWidth: "100%",
                      display: "flex",
                    }}
                  >
                    <div
                      className="body cat-card-body"
                      style={{ backgroundImage: `url(${getImageForCategoryImage(index)})`, textAlign: "left" }}
                    >
                      <h1
                        className="category-heading text-light mt-5"
                        style={{ fontWeight: "bold" }}
                      >
                        {capitalizeFirstLetter(category)} Event
                      </h1>
                      <p
                        className="category-para text-light"
                        style={{ textAlign: "left" }}
                      >
                        Sponser Now
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="box1 cat-mob-view">
        <div className="row category-row" style={{ marginRight: '2% !important', marginLeft: '2%' }}>
          {[...Object.entries(EventCategory.eventCategory || {})]
            .filter(([key, value]) => value && value.length > 0)
            .sort((a, b) => b[1].length - a[1].length)
            .slice(0, 4) // Limit to the first four available categories
            .reduce((rows, [category, cardData], index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(
                <div className="col-sm-6 category-card1" style={{ paddingRight: '4vh !important' }} key={category} onClick={() => handleClick(category, capitalizeFirstLetter(category))}>
                  <div className={`card-service wow${index % 2 === 0 ? 1 : 2} fadeInUp`} style={{ maxWidth: "100%", display: "flex" }}>
                    <div className="body cat-card-body" style={{ backgroundImage: `url(${getImageForCategoryImage(index)})`, textAlign: "left" }}>
                      <h1 className="category-heading text-light mt-5" style={{ fontWeight: "bold" }}>
                        {capitalizeFirstLetter(category)}
                      </h1>
                      <p className="category-para text-light" style={{ textAlign: "left" }}>
                        Sponser Now
                      </p>
                    </div>
                  </div>
                </div>
              );
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row}
              </div>
            ))}
        </div>

        <button className="category-btn btn" style={{ width: "100%" }}>
          <Link to={"/categories"}>
            <p className="category-btn-text">Browse Categories</p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Categories;
