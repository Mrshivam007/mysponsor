import "./App.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Choice from "./components/Choice/Crards";
import Navbar from "./components/Header/navbar";
import Sponser from "./components/Sponser/Sponser";
import Footer from "./components/Footer/Footer.jsx";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import "./assets/css/bootstrap.css";
import "./assets/css/maicons.css";
import "./assets/css/theme.css";
// import "./navbar.css"

function App() {
  return (
    <>
      <Navbar />
      <Choice />
      <Chatbot />
      <Banner />
      <Categories />
      <Sponser />
      <Footer />
    </>
  );
}

export default App;
