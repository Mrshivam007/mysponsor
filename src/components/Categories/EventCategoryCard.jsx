import { useLocation } from 'react-router-dom';
import { EventsHeader, SponserE } from '..';
import bgimage from "../../assets/img/circle-bg.png";
import spevents from "../../assets/img/sponsor_events-logo.png";
import { useEffect } from 'react';



const EventCategoryCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);
    const location = useLocation();
    const { eventData, categoryName } = location.state || {};
    console.log("get event category details ", eventData);

    // Now you can use the eventData in your component to display category-specific information

    return (
        <div>
            <div
                className="events-bg"
                style={{
                    width: "100%",
                    height: "auto",
                    backgroundImage: `url(${bgimage})`,
                }}
            >
                <div className="events-page-desktop">

                    <EventsHeader title={"Sponsor Events"} logo={spevents} />


                    <SponserE cardData={eventData} line={`${categoryName} Event`} />
                </div>

                <div className="events-page-mobile">
                    <SponserE cardData={eventData} line={`${categoryName} Event`}/>
                    <div
                        className="btn d-block text-white font-weight-bolder"
                        style={{
                            margin: "5%",
                            borderRadius: "10px",
                            backgroundColor: "rgb(0, 78, 169)",
                        }} >

                        Load More
                    </div>
                </div>




                {/* <div className="events-page-desktop">
          <EventsHeader title={"Sponsor Events"} logo={spevents} />

          {[...Object.entries(eventDetails.eventCategory || {})]
            .filter(([key, value]) => value && value.length > 0)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([category, cardData]) => (
              <SponserE key={category} cardData={cardData} line={`${capitalizeFirstLetter(category)} Event`} />
            ))}
        </div> */}

                {/* <div className="events-page-mobile">
          {[...Object.entries(eventDetails.eventCategory || {})]
            .filter(([key, value]) => value && value.length > 0)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([category, cardData]) => (
              <SponserE key={category} cardData={cardData} line={`${capitalizeFirstLetter(category)} Event`} />
            ))}
          <div
            className="btn d-block text-white font-weight-bolder"
            style={{
              margin: "5%",
              borderRadius: "10px",
              backgroundColor: "rgb(0, 78, 169)",
            }}
          >
            Load More
          </div>
        </div> */}

            </div>
            {/* Display category-specific information using eventData */}
        </div>
    );
};

export default EventCategoryCard;
