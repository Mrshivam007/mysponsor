import chtbtimg from "../../assets/img/chatbot-img.png";
import "./chatbot.css";
const Chatbot = () => {
  return (
    <>
      <div
        class="card chatbot-card mb-5"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "18px",
          backgroundColor: "#004EA9",
        }}
      >
        <div class="row g-0" style={{margin:"0px"}}>
          <div class="col-5">
            <img
              src={chtbtimg}
              class="img-fluid rounded-start chatbot-img"
              alt=""
              style={{ margin: "15% 0% 5% 0%" }}
            />
          </div>
          <div class="col-7  mt-0">
            <div class="card-body py-3 px-0">
              <h5 class="chat-title text-white font-weight-bold d-inline">
                Hi, I am ChatBot
              </h5>
              <br />
              <span className="text text-white" style={{ fontSize: "15px" }}>
                If you have any query ask me !
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
