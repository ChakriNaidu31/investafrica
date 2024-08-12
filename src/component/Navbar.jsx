import "../component/Navbar.css"
import logo from "../assets/logo.svg";
import globe from "../assets/globe.png";
import map from "../assets/map.png";
import dropmap from "../assets/dropmap.png";
import carrow from "../assets/carrow.png";
import list from "../assets/list.png";
import crop from "../assets/crop.jpg";
import horti from "../assets/horti.jpg";
import ques from "../assets/ques.png";
import livestock from "../assets/livestock.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {


  const navigate = useNavigate();

  const ToCountry = () => {
    navigate("/country");
  };
  const navigatetoRegister = () => {
    navigate("/signup");
  };
  const navigatetoLogin= () => {
    navigate("/");
  };

  return (
    <nav className="nav-bar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <a className="" href="#">
              <img src={logo} className="logo" alt="Logo" />
            </a>
          </div>
          <div className="col-6 d-flex">
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div className="">
                <div className="d-flex justify-content-end">
                  <div>
                    <b className="lang">Eng</b>
                    <img src={globe} className="img-fluid" alt="Globe" />
                  </div>
                  <div>
                    <button className="btn nav-signup" onClick={navigatetoRegister} >SignUp</button>
                  </div>
                  <div>
                    <button className="btn btn-success nav-login-btn px-3" onClick={navigatetoLogin}>Login</button>
                  </div>
                </div>
                <div className="d-flex justify-content-space-between">
                  <div>
                    <button
                      type="button"
                      className="btn dropdown-toggle nav-menu "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Countries
                    </button>
                    <div className="dropdown-menu p-4 text-body-secondary w-100">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 mb-4">
                            <h1 className="nav-menu-header">Countries</h1>
                          </div>
                          <div className="col-lg-6 col-sm-12 my-auto">
                            <form className="d-flex" role="search">
                              <input
                                className="form-control py-3"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />

                            </form>
                          </div>



                          <div className="col-12 mt-5">
                            <OwlCarousel
                              className="owl-theme"
                              loop
                              margin={10}

                              dots={false}
                              items={6} // Show 6 items at a time
                              responsive={{
                                0: {
                                  items: 1.5,
                                },
                                600: {
                                  items: 2,
                                },
                                1000: {
                                  items: 4.5, // Change the number of items displayed based on the screen width
                                },
                              }}
                            >
                              <div className="item ht-200" onClick={ToCountry}>
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Nigeria<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Morocco<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Egypt<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Ghana<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Kenya<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Libya<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>

                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Mali<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>

                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Niger<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>

                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Senegal<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>

                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Sudan<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>

                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Sudan<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                              <div className="item ht-200">
                                <div className="position-relative">
                                  <img
                                    src={dropmap}
                                    className="img-fluid nav-country-img"
                                  />
                                  <p className="mt-2 nav-country-text">Ethiopia<img src={carrow} className="ms-1 carrow" /></p>
                                </div>
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-10">
                    <button
                      type="button"
                      className="btn dropdown-toggle nav-menu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Industries
                    </button>
                    <div className="dropdown-menu px-4 pt-0 pb-0 text-body-secondary w-100">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-lg-3 col-sm-12  p-3">
                                <div className="row">
                                  <div className="col-12 mb-4">
                                    <h1 className="nav-menu-header">Industry</h1>
                                  </div>
                                  <div className="col-12">
                                    <p>Discover</p>
                                  </div>
                                  <div className="col-12 mt-2">
                                    <button className="btn btn-discover"><img src={list} className="img-fluid me-2" /> Top Categories</button>
                                  </div>
                                  <div className="col-12 mt-2">
                                    <button className="btn btn-discover"><img src={list} className="img-fluid me-2" /> All list</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-12  p-3 b-l-r">
                                <div className="row">
                                  <div className="col-12 px-3">
                                    <form className="d-flex" role="search">
                                      <input
                                        className="form-control py-3"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                      />
                                    </form>
                                  </div>

                                  <div className="col-12 mt-2">
                                    <div>
                                      <div className="px-3">
                                        <span className="table-head">Name</span><span className="table-head float-end">Result</span>
                                        <hr className="my-2 hrline" />
                                      </div>

                                      {/* ----------------- */}
                                      <div className="min-scroll">
                                        <div className="in-data active">
                                          <span className="table-data">Agriculture</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Tourism</span><span className="table-data float-end">1000</span>

                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Infrastructure</span><span className="table-data float-end">1000</span>

                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>

                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                           <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                        <div className="in-data">                                      
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                        <div className="in-data">                                      
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                        <div className="in-data">                                      
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                        <div className="in-data">                                      
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                        <div className="in-data">    
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline"/>
                                      </div>

                                    </div>
                                  </div>
                                </div>

                              </div>
                              <div className="col-lg-5 col-sm-12 ">
                                <div className="row p-3 indus-scroll">
                                  <div className="col-3 text-center">
                                    <img src={crop} className="ind-img" />
                                    <p className="ind-img-cap">Crop Production</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={livestock} className="ind-img" />
                                    <p className="ind-img-cap">Livestock Farming</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={horti} className="ind-img" />
                                    <p className="ind-img-cap">Horticulture</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <img src={ques} className="ind-img" />
                                    <p className="ind-img-cap">???</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-10">
                    <button
                      type="button"
                      className="btn dropdown-toggle nav-menu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </button>
                    <div className="dropdown-menu p-4 text-body-secondary w-100">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 mb-4 text-center">
                            <h1 className="nav-menu-header">About</h1>
                          </div>
                          <div className="col-lg-3 col-sm-12 text-center">
                            <button className="btn nav-about-btn">About</button>

                          </div>
                          <div className="col-lg-3 col-sm-12 text-center">
                            <button className="btn nav-about-btn">MATCHING PLATFORM</button>
                          </div>
                          <div className="col-lg-3 col-sm-12 text-center">
                            <button className="btn nav-about-btn">FAQ</button>

                          </div>
                          <div className="col-lg-3 col-sm-12 text-center">
                            <button className="btn nav-about-btn">HELP</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
