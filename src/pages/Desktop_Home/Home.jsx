import {
  NavBar,
  Header,
  Choice,
  Chatbot,
  Banner,
  Categories,
  SponserHome,
  Footer,
} from "../../components";
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Choice line={"Sponsor Your Choice"} />
      <Chatbot />
      <Banner />
      <Categories line={"Categories"} />
      <SponserHome />
      <Footer />
    </>
  );
};

export default Home;
