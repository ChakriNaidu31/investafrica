import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home/home";
import Country from "./pages/country/country";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Industry from "./pages/industry/industry";
import Agriculture from "./pages/Agriculture/Agriculture";

function App() {

//(done) TODO: On clicking logo, page should redirect to baseroute (http://localhost:3000/)

  const location = useLocation();

  // Define routes where Navbar and the specific div should be displayed
  const showNavbar =
    location.pathname === "/home" || location.pathname === "/country" || location.pathname === "/industry" || location.pathname === "/agriculture";

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
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
        <Route
          path="/industry"
          element={
            <div className="mt-100">
              <Industry />
            </div>
          }
        />

        <Route
          path="/agriculture"
          element={
            <div className="mt-100">
              <Agriculture />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
