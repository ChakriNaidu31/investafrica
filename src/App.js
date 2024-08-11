import "./App.css";
import Navbar from "./component/Navbar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home from "./pages/home/home";
function App() {
  return (
    <div>
      <Navbar />
      <div className=" mt-100">
        <Home />
      </div>
    </div>
  );
}

export default App;
