import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home/home";
import Country from "./pages/country/country";
import Login from "./pages/login/login";
function App() {
  return (
    <div>
      <Login/>
      {/* <Navbar />
      <div className=" mt-100">
        <Home />
      </div>
      <Country /> */}
    </div>
  );
}

export default App;
