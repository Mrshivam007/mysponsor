import { Link } from "react-router-dom";
import {
  NavBar,
  Header,
  Choice,
  Chatbot,
  Banner,
  Categories,
  SponserHome,
  Footer,
} from "../../../components";
import { useEffect, useState } from "react";
import PopUp from "../../../components/PopUp/PopUp";
const SponsorHome = () => {
  const [registerMessage, setRegisterMessage] = useState("");

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const registerMessag = sessionStorage.getItem('registerMessage');
    // Clear success message from sessionStorage
    sessionStorage.removeItem('registerMessage');

    if (registerMessag) {
      setRegisterMessage(registerMessag);

      // Set a timer to clear the message after 5 seconds
      const timer = setTimeout(() => {
        setRegisterMessage('');
      }, 5000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePopUpClose = () => {
    setRegisterMessage('');
  };


  return (
    <>

      {/* {registerMessage && (
        <div className="popup">
          <div className="popup-content">
            <div
              className="alert alert-success"
              role="alert"
              style={{ borderRadius: '10px' }}
            >
              {registerMessage}
            </div>
          </div>
        </div>
      )} */}
      {registerMessage && (
        <PopUp message={registerMessage} onClose={handlePopUpClose} />
      )}


      <Header />
      <Choice line={"Sponsor Your Choice"} />
      <div>
        <p
          className="choice-bottom-para"
          style={{ padding: "2% 8%", textAlign: "center" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem
          incidunt deleniti cum quidem dolore earum vitae doloribus ducimus quod
          eum dicta pariatur facilis mollitia, laborum, temporibus quaerat quas
          nesciunt excepturi ipsum nulla iste nisi. Eaque.
        </p>
      </div>
      <Link
        to={"/choice"}
        className="btn text-white py-1 px-4 font-weight-bold d-none d-md-block"
        style={{
          width: "25%",
          margin: "auto",
          backgroundColor: "rgb(0, 68, 139)",
          borderRadius: "10px",
        }}
      >
        Read More
      </Link>
      <Chatbot />
      <Banner />
      <Categories line={"Categories"} />
      <SponserHome />
      {/*  */}

    </>
  );
};

export default SponsorHome;
