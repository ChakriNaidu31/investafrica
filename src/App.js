import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home/home";
import Country from "./pages/country/country";
function App() {
  return (
    <div>
      <Navbar />
      <div className=" mt-100">
        <Home />
      </div>
      <Country />
    </div>
  );
}

export default App;
