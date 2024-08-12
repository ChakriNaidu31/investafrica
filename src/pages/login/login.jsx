import "../login/login.css";
import logo from "../../assets/logo.svg";
import globe from "../../assets/globe.png";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <img src={logo} className="" alt="Logo" height={55} />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 invisible">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <div>
                  <b>Eng</b>
                  <img src={globe} className="img-fluid me-2" alt="Globe" />
                </div>
                <button class="btn btn-secondary px-3" type="submit">Back</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="col-12 p-0">
          <body class="signin-body d-flex align-items-center py-4 bg-body-tertiary">
            <main class="form-signin w-100 m-auto">
              <form>
                <h1 class="mb-3 login-head">Sign In</h1>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label login-label">Email or username</label>
                    <input type="email" class="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label login-label">Password</label>
                    <span className="float-end login-fg">Forgot password</span>
                    <input type="password" class="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                  </div>
                </form>
                <div class="form-check text-start my-3">
                  <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button class="btn py-2 px-4 login-btn mt-2" type="submit">Log in</button>
              </form>
              <div className="text-center mt-3">
                <p className="login-inv">New to Invest Africa?</p>
                <button class="btn login-register py-2 px-4" type="submit">Register for an account</button>
              </div>
              <div className="text-start mt-5">
                <span className="login-credit">Help?</span>
                <span className="login-credit ms-4">About us</span>
              </div>
            </main>
          </body>
        </div>
      </div>
    </div>
  )
}

export default Login;