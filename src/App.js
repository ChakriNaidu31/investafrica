import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home/home";
import Country from "./pages/country/country";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Country />
    </div>
  );
}

export default App;
