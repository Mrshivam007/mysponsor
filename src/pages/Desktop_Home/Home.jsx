import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Chatbot from "../../components/Chatbot/Chatbot";
import Choice from "../../components/Choice/Crards";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/home-header";
import NavBar from "../../components/Navbar/navbar";
import SponserHome from "../../components/Sponser/SponsorHome";

const Home = () => {
    return ( 
        <>
        <NavBar />
        <Header />
        <Choice />
        <Chatbot />
        <Banner />
        <Categories />
        <SponserHome />
        <Footer />
        </>
     );
}
 
export default Home;