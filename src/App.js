import "./App.css";
import Navbar from "./component/Navbar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
