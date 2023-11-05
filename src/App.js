import "./App.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Choice from "./components/Choice/Crards";
import Navbar from "./components/Header/navbar";
import Sponser from "./components/Sponser/Sponser";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Choice />
      <Banner />
      <Categories />
      <Sponser />
      <Footer />
    </>
  );
}

export default App;
