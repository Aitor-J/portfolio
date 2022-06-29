import "./App.scss";
import Home from "./home/Home";
import Loader from "./loader/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <Home />
    </div>
  );
};

export default App;
