import logo from "../assets/logo.svg";
import globe from "../assets/globe.png";
import map from "../assets/map.png";
import dropmap from "../assets/dropmap.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Navbar() {
  return (
    <nav className="nav-bar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row">
            <div className="col-6">
            <a className="" href="#">
            <img src={logo} className="img-fluid" alt="Logo" />
          </a>
            </div>
            <div className="col-6 d-flex">
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="">
              <div className="d-flex justify-content-end">
                <div>
                  <b>Eng</b>
                  <img src={globe} className="img-fluid" alt="Globe" />
                </div>
                <div>
                  <button className="btn">SignUp</button>
                </div>
                <div>
                  <button className="btn btn-success login-btn">Login</button>
                </div>
              </div>
              <div className="d-flex justify-content-space-between">
                <div>
                  <button
                    type="button"
                    className="btn dropdown-toggle nav-menu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Countries
                  </button>
                  <div className="dropdown-menu p-4 text-body-secondary w-100">
                    <p>About country</p>
                    <p className="mb-0">Information about the country.</p>
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
                  <div className="dropdown-menu p-4 text-body-secondary w-100">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h1>Countries</h1>
                        </div>
                        <div className="col-lg-6 col-sm-12 my-auto">
                          <form className="d-flex" role="search">
                            <input
                              className="form-control py-4"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />
                            <button
                              className="btn btn-outline-success px-3"
                              type="submit"
                            >
                              Search
                            </button>
                          </form>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                          <div className="map">
                            <img src={map} className="img-fluid" />
                          </div>
                        </div>

                        <div className="col-12 mt-5">
                          <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            nav
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
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Nigeria</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Morocco</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Egypt</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Ghana</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Kenya</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Libya</p>
                              </div>
                            </div>

                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Mali</p>
                              </div>
                            </div>

                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Niger</p>
                              </div>
                            </div>

                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Senegal</p>
                              </div>
                            </div>

                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Sudan</p>
                              </div>
                            </div>

                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Sudan</p>
                              </div>
                            </div>
                            <div className="item ht-200">
                              <div className="position-relative">
                                <img
                                  src={dropmap}
                                  className="img-fluid country-img"
                                />
                                <p className="mt-2 country-text">Ethiopia</p>
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
                    About
                  </button>
                  <div className="dropdown-menu p-4 text-body-secondary w-100">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 col-sm-12">
                          <div class="quote-wrapper">
                            <blockquote
                              class="text"
                              cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
                            >
                              <p>ABOUT</p>
                              <footer></footer>
                            </blockquote>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                          <div class="quote-wrapper">
                            <blockquote
                              class="text"
                              cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
                            >
                              <p>MATCHING PLATFORM</p>
                              <footer></footer>
                            </blockquote>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                          <div class="quote-wrapper">
                            <blockquote
                              class="text"
                              cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
                            >
                              <p>FAQ</p>
                              <footer></footer>
                            </blockquote>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                          <div class="quote-wrapper">
                            <blockquote
                              class="text"
                              cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
                            >
                              <p>HELP</p>
                              <footer></footer>
                            </blockquote>
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
          
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
