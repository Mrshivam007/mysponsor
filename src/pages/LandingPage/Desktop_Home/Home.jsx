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
const Home = () => {
  return (
    <>
      
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
      <a
        href="#!"
        className="btn text-white py-1 px-4 font-weight-bold d-none d-md-block"
        style={{
          width: "15%",
          margin: "auto",
          backgroundColor: "rgb(0, 68, 139)",
          borderRadius: "10px",
        }}
      >
        Read More
      </a>
      {/* <Chatbot /> */}
      <Banner />
      <Categories line={"Categories"} />
      <SponserHome />
      
    </>
  );
};

export default Home;
