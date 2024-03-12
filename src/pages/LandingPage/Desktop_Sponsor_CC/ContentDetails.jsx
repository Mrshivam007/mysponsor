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
import { useDispatch, useSelector } from "react-redux";
import { fetchContentbyId } from "../../../redux/actions/contentByIdAction.js";
import Loading from "../../../components/Loading/Loading.jsx";
const ContentDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const contentData = location.state?.contentData || null;
  const dispatch = useDispatch();
  const contentId = contentData.content_id;
  const contentById = useSelector((state) => state.contentById);
  useEffect(() => {
    dispatch(fetchContentbyId(contentId));
  }, []);
  const isLoading = () => {
    return contentById?.loading;
  };
  console.log("getting content by id ", contentById?.contentById?.[0]);
  const Data = contentById?.contentById?.[0];

  console.log(contentData);
  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
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

            {Data && <MyContentBox contentData={Data} />}
            {/* <SponserE cardData={EventsCards} /> */}

          </div>
        </>
      )}
    </>
  );
};

export default ContentDetails;
