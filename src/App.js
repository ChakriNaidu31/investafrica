import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home/home";
import Country from "./pages/country/country";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";

function App() {
  const location = useLocation();

  // Define routes where Navbar and the specific div should be displayed
  const showNavbar =
    location.pathname === "/home" || location.pathname === "/country";

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <div className="mt-100">
              <Home />
            </div>
          }
        />
        <Route
          path="/country"
          element={
            <div className="mt-100">
              <Country />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
