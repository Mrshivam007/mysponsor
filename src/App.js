import { Provider } from "react-redux";
import "./App.css";
import "./assets/css/bootstrap.css";
import "./assets/css/maicons.css";
import "./assets/css/theme.css";
import "./assets/css/animation.css";
import Main from "./Routes/main.jsx";
import store from "./redux/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
