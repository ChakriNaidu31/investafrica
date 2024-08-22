import "../component/Navbar.css"
import logo from "../assets/logo.svg";
import globe from "../assets/globe.png";
import dropmap from "../assets/dropmap.png";
import carrow from "../assets/carrow.png";
import list from "../assets/list.png";
import crop from "../assets/crop.jpg";
import horti from "../assets/horti.jpg";
import ques from "../assets/ques.png";
import livestock from "../assets/livestock.jpg";
import drip from "../assets/drip.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  //TODO: countries, industries and about dropdown symbols not matching with Figma

  const ToCountry = () => {
    navigate("/country");
  };
  const ToIndustry = () => {
    navigate("/industry");
  };
  const navigatetoRegister = () => {
    navigate("/signup");
  };
  const navigatetoLogin = () => {
    navigate("/login");
  };
  const navigatetoHome = () => {
    navigate("/home");
  };
  const [isHomePage, setIsHomePage] = useState(false);
  const [search, setSearch] = useState("");
  const [suggest, setSuggest] = useState(false);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    handleUrlChange();
  }, [location]);
  const handleUrlChange = () => {
    checkUrl();
  };
  const checkUrl = () => {
    if(window.location.href.includes('home')){
      setIsHomePage(true);
    }
    else{
      setIsHomePage(false);
    }
  };
  
  const countries = [
    { name: "Nigeria", img: dropmap },
    { name: "Morocco", img: dropmap },
    { name: "Egypt", img: dropmap },
    { name: "Ghana", img: dropmap },
    { name: "Kenya", img: dropmap },
    { name: "Libya", img: dropmap },
    { name: "Mali", img: dropmap },
    { name: "Niger", img: dropmap },
    { name: "Senegal", img: dropmap },
    { name: "Sudan", img: dropmap },
    { name: "Ethiopia", img: dropmap },
  ];
  

  
  const [seearch, setSeearch] = useState("");

  // Filter countries based on search input
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(seearch.toLowerCase())
  );

  // Use a Set to ensure unique items
  const uniqueCountries = [...new Set(filteredCountries.map(country => country.name))]
    .map(name => filteredCountries.find(country => country.name === name));
  return (
    
    <nav className="nav-bar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <a className="" href="#">
              <img src={logo} className="logo" alt="Logo" onClick={navigatetoHome}/>
            </a>
          </div>
          <div className="col-8">
            
          {!isHomePage && 
          <div>
            <div className="d-flex align-items-baseline search-style">
              <div className=" searchbar w-130">
              <select className="form-select border-0" defaultValue={""}>
            <option value="">COUNTRIES</option>
            <option value="1">Industries</option>
            <option value="2">Technology</option>
            <option value="3">Countries</option>
          </select>
                </div >
            <div className="d-flex mt-3 searchbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-icon-style" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input type="text" className="inputs" placeholder="Search" onFocus={() => setSuggest(true)} onBlur={() => setSuggest(false)} />
            </div>
            <div>
            <button className="rbutton" onClick={() => { console.log(search) }}> SEARCH</button>
            </div>
            </div>
         
       </div>
          }
          </div>
          <div className="col-3 d-flex">
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div className="">
                <div className="d-flex justify-content-end">
                  <div>
                    <b className="lang">Eng</b>
                    <img src={globe} className="img-fluid" alt="Globe" />
                  </div>
                  <div>
                    <button className="btn nav-signup" onClick={navigatetoRegister}>SignUp</button>
                  </div>
                  <div>
                    <button className="btn btn-success nav-login-btn px-3" onClick={navigatetoLogin}>LOGIN</button>
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
                      Countries<img src={drip} className="ms-2"/>
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
              value={seearch}
              onChange={(e) => setSeearch(e.target.value)} // Update search state
            />
          </form>
        </div>

        <div className="col-12 mt-5">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            dots={false}
            items={6}
            responsive={{
              0: {
                items: 1.5,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4.5,
              },
            }}
          >
            {uniqueCountries.map((country, index) => (
              <div className="item ht-200" key={index} onClick={ToCountry}>
                <div className="position-relative">
                  <img
                    src={country.img}
                    className="img-fluid nav-country-img"
                    alt={country.name}
                  />
                  <p className="mt-2 nav-country-text">
                    {country.name}
                    <img src={carrow} className="ms-1 carrow" alt="arrow" />
                  </p>
                </div>
              </div>
            ))}
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
                      Industries<img src={drip} className="ms-2"/>
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
                                          <span className="table-data" onClick={ToIndustry}>Agriculture</span><span className="table-data float-end">1000</span>
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
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
                                        <div className="in-data">
                                          <span className="table-data">Industry Name</span><span className="table-data float-end">1000</span>
                                        </div>
                                        <hr className="my-2 hrline" />
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
                      About<img src={drip} className="ms-2"/>
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
