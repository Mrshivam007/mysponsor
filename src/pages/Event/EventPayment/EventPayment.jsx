import React, { useEffect, useState } from "react";
import calendar from "../../../assets/img/calendar.svg";
import camera from "../../../assets/img/camera.svg";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg1 from "../../../assets/img/list_events_card1.jpg";
import cardImg2 from "../../../assets/img/list_events_card2.jpg";
import cardImg3 from "../../../assets/img/list_events_card3.jpg";
import { Choice, EventsHeader, Footer, NavBar } from "../../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EventNavBar from "../EventNavbar/EventNavbar";
const EventPayment = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (
        <>
            <div
                className="list-events-bg"
                style={{
                    width: "100%",
                    height: "auto",
                    backgroundImage: `url(${bgimage})`,
                }}
            >
                <EventsHeader title={"Your Events"} logo={listevents} />

                

            </div>
        </>
    );
};

export default EventPayment;
