import "../login/login.css";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Show error messages under each control, if it is not filled and if there's any validation error. Invoke API only if validation succeeds.
    // TODO: For password control, add validation to have minimum 8 characters (Atleast 1 uppercase, 1 lowercase, 1 digit and 1 symbol)
    // TODO: Remove all console logs when responses handled properly.
    // TODO: API integration for forgot password and reset password

    let formData = {};
    formData.emailAddress = email;
    formData.password = password;

    axios({
      url: `http://localhost:3001/user/login`,
      method: "POST",
      data: formData
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("ia_user", JSON.stringify(res.data));
        navigate("/home");
      })
      .catch((err) => {
        // TODO: Handle error
        console.log(err);
      });
  };

  const navigatetoRegister = () => {
    navigate("/signup");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} className="" alt="Logo" height={55} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 invisible">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div>
                  <b>Eng</b>
                  <img src={globe} className="img-fluid me-2" alt="Globe" />
                </div>
                <button className="btn btn-secondary px-3" type="button" onClick={navigateToHome}>
                  BACK
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="col-12 p-0">
          <div className="signin-body d-flex align-items-center py-4 bg-body-tertiary">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleLogin}>
                <h1 className="mb-3 login-head">Sign In</h1>
                <div className="mb-3">
                  <label
                    htmlFor="emailAddress"
                    className="form-label login-label"
                  >
                    Email or username
                  </label>
                  <input
                    type="text"
                    className="form-control login-input"
                    id="emailAddress"
                    placeholder="Enter email or username"
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="userPassword"
                    className="form-label login-label"
                  >
                    Password
                  </label>
                  <span className="float-end login-fg">Forgot your password?</span>
                  <input
                    type="password"
                    className="form-control login-input"
                    id="userPassword"
                    placeholder="Enter password"
                    onInput={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check text-start my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button className="btn py-2 px-4 login-btn mt-2" type="submit">
                  Log in
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="login-inv">New to Invest Africa?</p>
                <button className="btn login-register py-2 px-4" type="submit" onClick={navigatetoRegister}>
                  Register for an account
                </button>
              </div>
              <div className="text-start mt-5">
                <span className="login-credit">Help?</span>
                <span className="login-credit ms-4">About us</span>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
