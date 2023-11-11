import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Desktop_Home/Home";
const Main = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default Main;