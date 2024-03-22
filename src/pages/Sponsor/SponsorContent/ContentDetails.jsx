import React, { useEffect } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsCards } from "../../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../../components/index.js";
import { useLocation } from "react-router-dom";
import MyContentBox from "../../../components/My_Content_Details_Box/MyContentBox.jsx";
import SponsorContentBox from "./SponsorContentBox.jsx";
import MyContentSponsor from "./MyContentSponsor.jsx";
import { fetchContentbyId } from "../../../redux/actions/contentByIdAction.js";
import { useDispatch, useSelector } from "react-redux";
const ContentDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  
  const contentData = location.state?.contentData || null;
  const contentId = contentData?.content_id
  console.log("got event id from landing ", contentId);
  const dispatch = useDispatch();
  const contentId_local = localStorage.getItem('contentId');
  console.log("got id from local storage ", contentId_local);
  const content_id = contentId || contentId_local
  console.log(contentData);
  const contentById = useSelector((state) => state.contentById);
  useEffect(() => {
    dispatch(fetchContentbyId(content_id));
  }, []);
    console.log("getting content by id ", contentById?.contentById?.[0]);
  const Data = contentById?.contentById;

  return (

    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        {/* <SponsorContentBox contentData={contentData} /> */}
       {Data && <MyContentSponsor contentData={Data} />}
        {/* <SponserE cardData={EventsCards} /> */}
        
      </div>
    </>
  );
};

export default ContentDetails;
