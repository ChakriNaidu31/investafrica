import banner from "../../assets/banner.png";
import cp1 from "../../assets/contentpic1.png";
import cp2 from "../../assets/contentpic2.png";
import cp3 from "../../assets/contentpic3.png";
import ind1 from "../../assets/ind1.jpg";
import ind2 from "../../assets/ind2.jpg";
import ind3 from "../../assets/ind3.jpg";
import ind4 from "../../assets/ind4.jpg";
import ind5 from "../../assets/ind5.jpg";
import ind6 from "../../assets/ind6.jpg";
import ind7 from "../../assets/ind7.jpg";
import ind8 from "../../assets/ind8.jpg";
import ind9 from "../../assets/ind9.jpg";
import ind10 from "../../assets/ind10.jpg";
import ind11 from "../../assets/ind11.jpg";
import ind12 from "../../assets/ind12.jpg";
import ind13 from "../../assets/ind13.jpg";
import ind14 from "../../assets/ind14.jpg";

import con1 from "../../assets/country1.jpg";
import con2 from "../../assets/country2.jpg";
import con3 from "../../assets/country3.jpg";
import con4 from "../../assets/country4.jpg";
import con5 from "../../assets/country5.jpg";
import con6 from "../../assets/country6.jpg";
import con7 from "../../assets/country7.jpg";
import con8 from "../../assets/country8.jpg";
import con9 from "../../assets/country9.jpg";
import con10 from "../../assets/country10.jpg";
import con11 from "../../assets/country11.jpg";
import con12 from "../../assets/country12.jpg";
import con13 from "../../assets/con13.svg";
import con14 from "../../assets/con14.svg";
import con15 from "../../assets/con15.png";
import con16 from "../../assets/con16.png";
import con17 from "../../assets/con17.svg";
import con18 from "../../assets/con18.jpg";
import con19 from "../../assets/con19.svg";
import con20 from "../../assets/con20.png";
import con21 from "../../assets/con21.png";
import con22 from "../../assets/con22.png";
import con23 from "../../assets/con23.png";
import con24 from "../../assets/con24.png";
import con25 from "../../assets/con25.png";
import con26 from "../../assets/con26.png";
import con27 from "../../assets/con27.svg";
import con28 from "../../assets/con28.svg";
import con29 from "../../assets/con29.png";
import con30 from "../../assets/con30.png";
import con31 from "../../assets/con31.png";
import con32 from "../../assets/con32.png";
import con33 from "../../assets/con33.png";
import con34 from "../../assets/con34.png";
import con35 from "../../assets/con35.png";
import con36 from "../../assets/con36.jpg";
import con37 from "../../assets/con37.png";
import con38 from "../../assets/con38.png";
import con39 from "../../assets/con39.png";
import con40 from "../../assets/con40.png";
import con41 from "../../assets/con41.png";
import con42 from "../../assets/con42.png";
import con43 from "../../assets/con43.png";
import con44 from "../../assets/con44.png";
import con45 from "../../assets/con45.png";
import con46 from "../../assets/con46.png";
import con47 from "../../assets/con47.jpg";
import con48 from "../../assets/con48.png";
import con49 from "../../assets/con49.png";
import con50 from "../../assets/con50.png";
import con51 from "../../assets/con51.png";
import propic from "../../assets/propic.png";
import OwlCarousel from "react-owl-carousel";
import React, { useEffect, useState } from "react";
import "../home/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../component/footer";

function Home() {
  // (done) TODO: Why invest in africa color mismatch
  // (done) TODO: Success stories design not matching with Figma
  // (done) TODO: Footer address one line missing. Also address not matching with Figma. Lot of spacing in between and all lines should not be white
  // TODO: Check browser console errors and clear
  // TODO: Api integrations

  const [search, setSearch] = useState("");
  const [suggest, setSuggest] = useState(false);
  const [company, setCompany] = useState([]);

  const [successStories, setSuccessStories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [industries, setIndustries] = useState([]);

  const navigate = useNavigate();

  const fetchHomeDetails = async () => {
    axios({
      url: `http://localhost:3001/home/details`,
      method: "GET",
    })
      .then((res) => {
        setCountries(res.data?.countries);
        setIndustries(res.data?.industries);
        setSuccessStories(res.data?.successStories);
      })
      .catch((err) => {
        // TODO: Handle error
        console.log(err);
      });
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.querySelector(".search");
    if (element) {
      const realelement = element.querySelector("#sticky");
      if (realelement) {
        const tab = realelement.querySelector("#table");
        if (tab) {
          const pos = tab.getBoundingClientRect().top + window.scrollY;

          window.onscroll = () => {
            if (window.scrollY > pos) {
              realelement.style.position = "fixed";

              realelement.style.top = "-50px";
              tab.style.borderRadius = "10px";
              tab.style.border = "1px solid #E0E0E0";
            } else {
              realelement.style.position = "";
              realelement.style.top = "";
              tab.style.border = "";
            }
          };
        } else {
          console.error("Table element not found");
        }
      } else {
        console.error("Sticky element not found");
      }
    } else {
      console.error("Search element not found");
    }

    fetchHomeDetails();
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(null);

  // Handle click on country name
  const handleCountryClick = (countryCode) => {
    setSelectedCountry(countryCode);
    console.log(`Clicked on ${countryCode}`);
  };

  // Get the style for the country name based on whether it's selected
  const getCountryNameStyle = (countryCode) => {
    return {
      cursor: "pointer",
      color: selectedCountry === countryCode ? "blue" : "black", // Change color on selection
    };
  };

  const [searchQuery, setSearchQuery] = useState("");

  // Array of countries with their details
  const countriess = [
    { code: 'NG', name: 'Nigeria', flag: con1 },
    { code: 'MA', name: 'Morocco', flag: con2 },
    { code: 'EG', name: 'Egypt', flag: con3 },
    { code: 'GH', name: 'Ghana', flag: con4 },
    { code: 'KE', name: 'Kenya', flag: con5 },
    { code: 'LY', name: 'Libya', flag: con6 },
    { code: 'MLI', name: 'Mali', flag: con7 },
    { code: 'NE', name: 'Niger', flag: con8 },
    { code: 'SN', name: 'Senegal', flag: con9 },
    { code: 'SD', name: 'Sudan', flag: con10 },
    { code: 'ZW', name: 'Zimbabwe', flag: con11 },
    { code: 'ET', name: 'Ethiopia', flag: con12 },
    { code: 'AO', name: 'Angola', flag: con13 },
{ code: 'BI', name: 'Burundi', flag: con14 },
{ code: 'BJ', name: 'Benin', flag: con15 },
{ code: 'BF', name: 'Burkina Faso', flag: con16 },
{ code: 'BW', name: 'Botswana', flag: con17 },
{ code: 'CF', name: 'Central African Republic', flag: con18 },
{ code: 'CM', name: 'Cameroon', flag: con19 },
{ code: 'DJ', name: 'Djibouti', flag: con22 },
{ code: 'EH', name: 'Western Sahara', flag: con23 },
{ code: 'ER', name: 'Eritrea', flag: con24 },
{ code: 'GA', name: 'Gabon', flag: con25 },
{ code: 'GM', name: 'Gambia', flag: con26 },
{ code: 'GN', name: 'Guinea', flag: con27 },
{ code: 'GW', name: 'Guinea-Bissau', flag: con28 },
{ code: 'GQ', name: 'Equatorial Guinea', flag: con29 },
{ code: 'LR', name: 'Liberia', flag: con30 },
{ code: 'LS', name: 'Lesotho', flag: con31 },
{ code: 'MG', name: 'Madagascar', flag: con32 },
{ code: 'MZ', name: 'Mozambique', flag: con33 },
{ code: 'MR', name: 'Mauritania', flag: con34 },
{ code: 'MW', name: 'Malawi', flag: con36 },
{ code: 'NA', name: 'Namibia', flag: con37 },
{ code: 'RW', name: 'Rwanda', flag: con38 },
{ code: 'SL', name: 'Sierra Leone', flag: con40 },
{ code: 'SO', name: 'Somalia', flag: con41 },
{ code: 'SZ', name: 'Swaziland', flag: con43 },
{ code: 'TD', name: 'Chad', flag: con44 },
{ code: 'TG', name: 'Togo', flag: con45 },
{ code: 'TN', name: 'Tunisia', flag: con46 },
{ code: 'TZ', name: 'Tanzania', flag: con47 },
{ code: 'UG', name: 'Uganda', flag: con48 },
{ code: 'ZA', name: 'South Africa', flag: con49 },
{ code: 'CD', name: 'Democratic Republic of the Congo', flag: con50 },
{ code: 'ZM', name: 'Zambia', flag: con51 },
  ];

  // Filter countries based on search query
  const filteredCountries = countriess.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <main className="">
        <div className="p-4 text-body-emphasis bg-body-secondary banner ">
          <div className="invest-container">
            <h1 className="text-white banner-head">INVEST IN AFRICA</h1>
            <p className="banner-text my-3 text-white">
              Shaping Tomorrow Together,
              <br /> Invest in Africa's Potential.
            </p>
            <div className="search">
              <div id="sticky">
                <table id="table">
                  <tbody>
                    <tr>
                      <td id="searchbar" className="w-130">
                        <select
                          className="form-select border-0"
                          defaultValue={""}
                        >
                          <option value="">COUNTRIES</option>
                          <option value="1">Industries</option>
                          <option value="2">Technology</option>
                          <option value="3">Countries</option>
                        </select>
                      </td>
                      <td id="searchbox" className="d-flex mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search search-icon-style"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input
                          type="text"
                          id="input"
                          placeholder="Search"
                          onFocus={() => setSuggest(true)}
                          onBlur={() => setSuggest(false)}
                        />
                      </td>
                      <td id="button">
                        <button
                          id="rbutton"
                          onClick={() => {
                            console.log(search);
                          }}
                        >
                          {" "}
                          SEARCH
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3">
                <table id="suggest">
                  <tbody>
                    <tr>
                      <td>Frequently searched:</td>
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-l-10"
                      >
                        Agriculture
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-l-10"
                      >
                        Infrastructure
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-l-10"
                      >
                        Tourism
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="col-12 bg-green p-3 invest-container">
        <div className="row nav nav-pills mb-3" id="pills-tab" role="tablist ">
          <div
            class="col-sm-6 col-md-6 col-lg-3 text-center"
            role="presentation"
          >
            <div className="card my-3">
              <div
                className=" active card-body position-relative"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-why"
                role="tab"
                aria-controls="pills-why"
                aria-selected="true"
              >
                <h5 className="card-title text-center">
                  Why Invest In Africa?
                </h5>
                <p className="card-text">
                  Pro Business
                  <br />
                  Youthful Population
                  <br />
                  Growing Economies
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card my-3">
              <div className="card-body position-relative">
                <h5 className="card-title text-center">
                  World of <br></br> Africa
                </h5>
                <p className="card-text">
                  A continent of diversity and beauty where cultures collide,
                  nature flourishes, and business opportunities abound.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card my-3">
              <div className="card-body position-relative">
                <h5 className="card-title text-center">
                  Crafting Tomorrow's Success
                </h5>
                <p className="card-text">
                  Human Capital
                  <br />
                  Natural Resources
                  <br />
                  Finance
                  <br />
                  Infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card my-3">
              <div className="card-body position-relative">
                <h5 className="card-title text-center">Contact Us</h5>
                <p className="card-text">
                  Join our business and be part of something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-12 ">
        <div className="invest-containers bg-green ">
        <ul
          class="row  nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li class="col-3 text-center" role="presentation">
            <div className="card my-3">
              <div
                className=" nav-link active card-body position-relative"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-why"
                type="button"
                role="tab"
                aria-controls="pills-why"
                aria-selected="true"
              >
                <h5 className="card-title text-center">
                  Why Invest In Africa?
                </h5>
                <p className="card-text">
                  Pro Business
                  <br />
                  Youthful Population
                  <br />
                  Growing Economies
                </p>
              </div>
            </div>
          </li>
          <li class="col-3 text-center" role="presentation">
            <div className="card my-3">
              <div
                class="nav-link card-body position-relative"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-world"
                type="button"
                role="tab"
                aria-controls="pills-world"
                aria-selected="false"
              >
                <h5 className="card-title text-center">
                  World of <br></br> Africa
                </h5>
                <p className="card-text">
                  A continent of diversity and beauty where cultures collide,
                  nature flourishes, and business opportunities abound.
                </p>
              </div>
            </div>
          </li>
          <li class="col-3 text-center" role="presentation">
          <div className="card my-3">
              <div
                class="nav-link card-body position-relative"
                id="pills-craft-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-craft"
                type="button"
                role="tab"
                aria-controls="pills-craft"
                aria-selected="false"
              >
              <h5 className="card-title text-center">
                  Crafting Tomorrow's Success
                </h5>
                <p className="card-text">
                  Human Capital
                  <br />
                  Natural Resources
                  <br />
                  Finance
                  <br />
                  Infrastructure
                </p>
              </div>
            </div>

      
          </li>
          <li class="col-3 text-center" role="presentation">
          <div className="card my-3">
              <div
                class="nav-link card-body position-relative"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
             <h5 className="card-title text-center">Contact Us</h5>
                <p className="card-text">
                  Join our business and be part of something extraordinary!
                </p>
              </div>
            </div>
            
          </li>
        </ul>
        </div>
        
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-why"
            role="tabpanel"
            aria-labelledby="pills-why-tab"
            tabindex="0"
          >
            <div className="blog-section p-4 invest-container">
              <div className="col-12 mb-5 mt-2 invest-container">
                <h1 className="heading-style">Why Invest in Africa?</h1>
              </div>
              <div className="col-12 invest-container">
                <div className="row invest-container">
                  <div className="col-lg-4 col-sm-12">
                    <img src={cp1} className="img-fluid mb-3" />
                  </div>
                  <div className="col-lg-8 col-sm-12 my-auto">
                    <p className="content-text">
                      Business-friendly environment with political stability,
                      resilient economy, dynamic investor friendly environment
                      and Government incentives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 sm-d-g invest-container">
                <div className="row invest-container">
                  <div className="col-lg-8 col-sm-12 my-auto sm-o-2">
                    <p className="content-text">
                      Tap into a burgeoning youth market brimming with 1.46
                      billion potential consumers, a demographic primed for
                      dynamic growth and innovation.
                    </p>
                  </div>
                  <div className="col-lg-4 col-sm-12 text-end sm-o-1">
                    <img src={cp2} className="img-fluid mb-3" />
                  </div>
                </div>
              </div>
              <div className="col-12 invest-container">
                <div className="row invest-container">
                  <div className="col-lg-4 col-sm-12">
                    <img src={cp3} className="img-fluid mb-3" />
                  </div>
                  <div className="col-lg-8 col-sm-12 my-auto">
                    <p className="content-text">
                      Leverage a robust economic landscape with a GDP of $108
                      billion, reflecting a flourishing market ripe for
                      lucrative investment opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3 py-4 shadow-lg invest-caro mb-50">
              <div className="col-12 mb-4">
                <h1>Top Industries</h1>
              </div>
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                dots={false}
                items={6} // Show 6 items at a time
                responsive={{
                  0: {
                    items: 2,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 6, // Change the number of items displayed based on the screen width
                  },
                }}
              >
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind1} className="img-fluid industry-img" />
                    <p className="mt-2">Agriculture</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind2} className="img-fluid industry-img" />
                    <p className="mt-2">Banking</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind3} className="img-fluid industry-img" />
                    <p className="mt-2">Manufacturing</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind4} className="img-fluid industry-img" />
                    <p className="mt-2">Mining</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind5} className="img-fluid industry-img" />
                    <p className="mt-2">Oil & Gas</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind6} className="img-fluid industry-img" />
                    <p className="mt-2">Retail</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind7} className="img-fluid industry-img" />
                    <p className="mt-2">Tourism</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind8} className="img-fluid industry-img" />
                    <p className="mt-2">Agriculture</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind9} className="img-fluid industry-img" />
                    <p className="mt-2">Banking</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind10} className="img-fluid industry-img" />
                    <p className="mt-2">Manufacturing</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind11} className="img-fluid industry-img" />
                    <p className="mt-2">Mining</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind12} className="img-fluid industry-img" />
                    <p className="mt-2">Oil & Gas</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind13} className="img-fluid industry-img" />
                    <p className="mt-2">Retail</p>
                  </div>
                </div>
                <div className="item">
                  <div className="industry text-center">
                    <img src={ind14} className="img-fluid industry-img" />
                    <p className="mt-2">Tourism</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-world"
            role="tabpanel"
            aria-labelledby="pills-world-tab"
            tabindex="0"
          >
            <div className="discoverafrica bg-gold">
              <div className="col-12 ">
                <div className="row p-4">
                  <div className="col-12 pb-4 bg-gold ">
                    <h1 className="text-white mt-4 invest-container">
                      Discover Africa
                    </h1>
                  </div>

            <div className="col-lg-4 col-sm-12 p-0 bg-gold py-auto invest-container">
              <div className="bg-white pb-3 rounded m-l-50">
                <form className="d-flex p-3" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </form>

                <div id="scroll" className="px-3">
                  {filteredCountries.map(country => (
                    <div
                      key={country.code}
                      className="contain"
                      style={getCountryNameStyle(country.code)}
                      onClick={() => handleCountryClick(country.code)}
                      onMouseEnter={() => handleCountryClick(country.code)}
                    >
                      <img src={country.flag} alt="flag" id="flag" height={120} width={120} />
                      <p id="name">{country.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 p-0 bg-gold mb-5 ">
              <svg className="img-fluid"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 1000 1001"
                height="700px"
                width="1000px"
                viewBox="0 0 1000 1001"
                style={{ strokeLinejoin: 'round', stroke: '#ddd382', fill: 'none' }}
                id="svg2"
              >
                <path
                  id="AO"
                  data-name="Angola"
                  d="m 495.3,598.6 -36,-0.2 -4.3,1.7 -3.5,-0.3 -5.1,1.9 -1.1,2.7 6,8.7 2.4,9.3 3.6,13.4 -3.8,5.5 -0.6,2.8 2.9,8.3 3.1,8.4 3.6,5 0.6,7.8 -1.4,10.3 -4,6.1 -7.1,9.1 -2.9,5.6 -4.1,12.5 -0.8,5.9 -4.3,12.7 -1.9,12.2 1,8.7 5.9,-2.7 7.2,-2.3 7.8,0.4 7.1,6.3 1.9,-1 48.8,-0.6 8.2,6.6 29.1,2 22.4,-5.7 -7.6,-8.6 -7.8,-11.3 1.6,-44 25.3,0.1 -1,-4.7 2,-5.2 -2,-6.5 1.5,-6.7 -1.2,-4.3 -5.5,-0.8 -7.6,2 -5.3,-0.3 -3,1.3 0.9,-16.5 -3.9,-5.1 -0.8,-8.5 1.9,-8.4 -2.4,-5.3 -0.1,-8.7 -14.8,0.1 1.1,-5 -6.2,0.1 -0.7,2.4 -7.6,0.5 -3.1,8.1 -1.9,3.4 -6.7,-1.9 -4,1.9 -8.1,1.1 -4.6,-7.2 -2.7,-4.5 -3.5,-8.3 -2.9,-10.3 z m -47.4,-2.7 0.4,-6 2,-3.5 4.5,-2.9 -4.6,-4.8 -3.7,2.3 -5,6 3.3,10.4 3.1,-1.5 z"
                  style={{ fill: selectedCountry === 'AO' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('AO')}
                />
                <path
                  id="BI"
                  data-name="Burundi"
                  d="m 669,556.1 -0.6,-5.4 0,0 -6.5,-0.9 -3.8,7.9 -7.4,-1.1 3,6.3 0.1,2.4 4.3,13.2 0,0.6 1.2,-0.2 4.5,-5 4.9,-7.2 3,-2.9 -0.1,-4.5 -2.6,-3.2 z"
                  style={{ fill: selectedCountry === 'BI' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('BI')}
                />
                <path
                  id="BJ"
                  data-name="Benin"
                  d="m 340,356 -9.3,-8 -4.3,0.1 -4.1,4 -2.6,4.2 -6,1.2 -2.5,6.1 -4.1,1.6 -1.6,7.2 3.7,4.1 4.3,4.9 0.4,6.8 2.5,2.8 -0.5,31.8 3,9.5 10.1,-1.6 0.6,-22.3 -0.3,-8.8 2.3,-8.7 3.7,-4.3 5.9,-8.5 -1.3,-3.7 2.4,-5.6 -2.8,-8.2 0.5,-4.6 z"
                  style={{ fill: selectedCountry === 'BJ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('BJ')}
                />
                <path
                  id="BF"
                  data-name="Burkina Faso"
                  d="m 300.7,310.8 -7.8,0 -3,-2.6 -6.7,1.9 -11.3,5.8 -2.3,4.3 -9.4,6.2 -1.7,3.6 -5.1,2.8 -5.8,-1.9 -3.4,3.4 -1.8,9.5 -9.7,11.4 0.3,4.7 -3.4,5.9 0.8,8 5.5,3 2.1,4.6 5.4,2.9 4.3,-3.4 5.7,-0.6 8.3,3.6 -1.6,-10.4 0.3,-7.9 21.1,-0.6 5.4,1 3.9,-2.2 5.6,1.1 10.7,0.3 4.1,-1.6 2.5,-6.1 6,-1.2 2.6,-4.2 0.3,-9.5 -14,-3.1 -0.4,-6.7 -6.9,-9 -1.6,-6.3 1,-6.7 z"
                  style={{ fill: selectedCountry === 'BF' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('BF')}
                />
                <path
                  id="BW"
                  data-name="Botswana"
                  d="m 600.6,762.7 -2.2,-1 -6.9,3.1 -3.6,0 -7.9,5.4 -4.4,-5.7 -18.7,4.9 -9,0.4 -1.9,49.3 -11.8,0.5 -1.4,40.4 3.2,2 6.5,13.2 -1.5,8.4 2.5,4.9 8.5,-1.4 6.2,-6.2 5.8,-4.2 3.2,-6.6 6,-3.2 4.9,1.7 5.5,3.9 9.6,0.6 7.8,-3.2 1.4,-4.3 2.4,-6.6 6.5,-1.1 3.9,-5.2 4.4,-9.3 11.2,-10.3 17.3,-10.2 -7.3,-6.2 -9.2,-2.1 -3.1,-8.8 0.2,-4.9 -5.1,-1.5 -13,-15.2 -3.5,-8 -2.3,-2.4 -4.2,-11.1 z"
                  style={{ fill: selectedCountry === 'BW' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('BW')}
                />
                <path

                  id="CF"
                  data-name="Central African Rep."
               
                  d="m 587,398.1 -1,-0.7 -4.2,-4 -0.9,-4.3 1.9,-5.7 -0.1,-5.7 -7.2,-8.6 -1.5,-5.9 -7.7,2.3 -6,5.6 -8.6,15.1 -11.3,6.4 -11.8,-0.8 -3.4,1.2 1.2,4.9 -6.3,4.8 -5.1,5.4 -15.3,5.3 -3,-3.1 -2.1,-0.3 -2.2,3.6 -10,1 -6.1,14 -2.9,2.6 -0.8,10.7 1.2,5.8 -0.9,4.1 5.8,7.3 1,4.9 4.6,7.2 5.6,4.4 0.6,6.3 1.3,4 6.3,-12.8 7.3,-7.4 8.2,2.4 7.9,0.7 1,-9.6 4.7,-7.1 6.5,-4.4 10.1,4.7 7.8,5.1 9,1.4 9.1,2.7 3.6,-8.4 1.6,-1.1 5.6,1.4 13.5,-6.9 4.9,3 3.9,-0.5 1.8,-3.3 4.5,-1.2 9.2,1.4 7.9,0.4 4,-1.5 -2,-4.4 -9.2,-5.5 -3.2,-8.3 -5.2,-6 -8.3,-7.2 -0.1,-4.5 -6.8,-5.5 -8.4,-5.4 z"
                  style={{ fill: selectedCountry === 'CF' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('CF')}
                />

                <path
                   style={{ fill: selectedCountry === 'CI' ? '#000' : '#ddd382' }}
                   onClick={() => handleCountryClick('CI')}
                  id="CI"
                  data-id="CI"
                  d="m 230.4,373.8 -5,2.1 -2.9,1.7 -1.8,-5.9 -3.5,1.6 -2.1,-0.3 -2.3,4 -9.4,-0.1 -3.3,-2.1 -1.6,1.3 -2.5,1.1 -1,4.7 2.8,5.7 3,11.1 -4.6,1.6 -1.1,1.9 0.9,2.7 -0.8,6.1 -1.9,0 -0.6,4 1.2,6.7 -2.7,6.1 3.6,3.8 3.8,0.9 5.2,5.8 0.3,5.5 -1.1,1.7 -1,11.4 2.3,0.4 12.1,-5.1 8.5,-4 14.5,-2.4 7.8,-0.2 8.5,2.7 5.6,-0.1 0.5,-5.5 -5.2,-11.9 3.2,-15.6 5.1,-11.6 -3.2,-19.7 -8.3,-3.6 -5.7,0.6 -4.3,3.4 -5.4,-2.9 -2.1,-4.6 -5.5,-3 z"
                />
                <path

                  id="CM"
                  data-name="Cameroon"
                  style={{ fill: selectedCountry === 'CM' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('CM')}
                  d="m 477.5,366.6 0.4,-9.2 -1,-9.1 -4.9,-8.9 -3.4,0.8 -0.4,4.4 4.9,5.5 -1.3,2.5 -0.5,4.6 -10.2,10.7 -3.1,8.8 -1.6,7.2 -2.6,3.1 -2.4,9.7 -6.4,5.7 -1.9,7 -2.7,5.6 -1.1,5.7 -8.3,4.7 -6.9,-5.7 -4.6,0.2 -7.2,8.1 -3.6,0.1 -5.7,13.4 -3.1,9.8 -0.1,3.8 3.1,2 2.5,6.2 5.6,2.3 4.8,9.2 -1.8,10.9 19.9,0.3 5.8,-0.9 7.4,1.9 7.3,-1.8 1.5,0.7 15.4,0.6 9.9,3.6 9.7,3.3 0.9,-7.5 -1.3,-4 -0.6,-6.3 -5.6,-4.4 -4.6,-7.2 -1,-4.9 -5.8,-7.3 0.9,-4.1 -1.2,-5.8 0.8,-10.7 2.9,-2.6 6.1,-14 1.8,-3.7 -3.9,-9.6 -1.8,-5.7 -5.3,-2.3 -7.2,-8.1 2.5,-6.5 5.6,1.3 3.4,-0.9 6.8,0.1 -6.8,-12.6 z"
                />
                <path

                  id="CD"
                  data-name="Dem. Rep. Congo"
                  style={{ fill: selectedCountry === 'CD' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('CD')}
                  d="m 618.3,446 -9.2,-1.4 -4.5,1.2 -1.8,3.3 -3.9,0.5 -4.9,-3 -13.5,6.9 -5.6,-1.4 -1.6,1.1 -3.6,8.4 -9.1,-2.7 -9,-1.4 -7.8,-5.1 -10.1,-4.7 -6.5,4.4 -4.7,7.1 -1,9.6 -0.7,8.4 -3.6,7.4 -2.4,8.6 -1.5,12.3 0.7,7.8 -2,4.8 -0.3,5.1 -1.4,4.4 -8.1,6.7 -5.6,7.1 -5.3,13.4 0.3,11.4 -3.1,4.4 -7.2,6.8 -7.2,8.7 -4.5,-2.5 -0.8,-3.9 -6.6,-0.1 -4.2,5.3 -3.2,-1.4 -4.5,2.9 -2,3.5 -0.4,6 -3.1,1.5 1.6,4.3 5.1,-1.9 3.5,0.3 4.3,-1.7 36,0.2 2.9,10.3 3.5,8.3 2.7,4.5 4.6,7.2 8.1,-1.1 4,-1.9 6.7,1.9 1.9,-3.4 3.1,-8.1 7.6,-0.5 0.7,-2.4 6.2,-0.1 -1.1,5 14.8,-0.1 0.1,8.7 2.4,5.3 -1.9,8.4 0.8,8.5 3.9,5.1 -0.9,16.5 3,-1.3 5.3,0.3 7.6,-2 5.5,0.8 4.2,0.3 0.6,4.3 5.7,-0.3 7.7,1.3 3.9,6.2 9.7,2 7.5,-4.4 2.6,7.3 9.2,1.9 4.3,5.9 4.8,7.6 9.3,0.1 -0.6,-14.9 -3.4,2.5 -8.4,-5.4 -3.2,-2.4 1.9,-13.9 2.5,-16.4 -2.6,-6.1 3.6,-8.8 3.3,-1.7 16.4,-2.3 2.1,0.6 0.6,-2.3 -3.4,-3.7 -1.5,-7.6 -7.3,-7.6 -4.1,-9.9 2.3,-5.8 -3.2,-7.8 2.4,-22.1 0.1,0.2 -0.1,-2.4 -3,-6.3 1.2,-7.6 1.7,-1 0.5,-8.3 3.5,-3.8 0.1,-10.5 2.9,-5.3 0.6,-11.1 2.6,-6.4 4.6,-7.2 4.7,-3.7 3.9,-4.9 -4.9,-1.9 0.6,-16.1 0,0 -10.9,-9.2 -2.9,-5.9 -6.8,2.9 -5.7,-0.9 -3.2,2.3 -5.5,-1.7 -7.5,-11.4 -4,1.5 -7.9,-0.4 z"
                />
                <path

                  id="CG"
                  data-name="Congo"
                  style={{ fill: selectedCountry === 'CG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('CG')}
                  d="m 521.5,468.8 -7.9,-0.7 -8.2,-2.4 -7.3,7.4 -6.3,12.8 -0.9,7.5 -9.7,-3.3 -9.9,-3.6 -15.4,-0.6 -0.9,6.1 3.4,7.1 9.1,-1.1 3.1,2.7 -5.3,16.1 5.8,8.2 1.3,10.8 -1.6,9.2 -3.7,6.5 -10.8,-0.6 -6.5,-6.6 -1,6.1 -8.3,1.7 -4.2,3.5 4.6,9.1 -9.3,7.7 9.9,14.6 5,-6 3.7,-2.3 4.6,4.8 3.2,1.4 4.2,-5.3 6.6,0.1 0.8,3.9 4.5,2.5 7.2,-8.7 7.2,-6.8 3.1,-4.4 -0.3,-11.4 5.3,-13.4 5.6,-7.1 8.1,-6.7 1.4,-4.4 0.3,-5.1 2,-4.8 -0.7,-7.8 1.5,-12.3 2.4,-8.6 3.6,-7.4 0.7,-8.4 z"
                />
                <path

                  id="DJ"
                  data-name="Djibouti"
                  style={{ fill: selectedCountry === 'DJ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('DJ')}
                  d="m 820.3,358.7 -5.3,-3.8 6.8,-3.3 0.1,-5.7 -3,-4.3 -3.6,3.4 -5.2,-1.2 -4,6.1 -3.9,6.5 1.1,3.8 0.3,4.2 6.8,0.2 2.9,-0.9 2.8,2.4 4.2,-7.4 z"
                />
                <path

                  id="DZ"
                  data-name="Algeria"
                  style={{ fill: selectedCountry === 'DZ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('DZ')}
                  d="M 392.4,5.7 384.6,6.5 379.8,3.3 367.6,3.4 357,8.9 351.2,6.8 332.3,8 l -19.4,2.5 -11,4.3 -7.2,5.8 -12.4,2.4 -11.1,7.7 4.2,9 0.7,8.4 3.9,14.7 3.1,2.9 -2.2,5.4 -15.2,2.3 -5.4,5.1 -6.7,1.2 -0.6,10.2 -13.8,5.4 -4.6,7 -9.6,3.7 -11.8,2.1 -19.2,10.2 -0.2,16.3 0,1 -0.3,2.7 44.1,33.5 40,30.2 40.4,30.2 2.9,6.4 7.5,4 5.5,2.2 0.2,8.8 13.3,-1.3 16.9,-6.2 34.5,-27.1 40.5,-26.4 -5.4,-8.7 -9.6,-6.4 -5.5,2.5 -4.3,-7.7 -0.6,-5.9 -7.2,-10.1 4.6,-5.8 -1.3,-8.7 1.4,-7.6 -1,-6.3 1.8,-11.3 -0.8,-6.4 -4.1,-12.2 -5.7,-24.7 -7.3,-5.6 -0.2,-3.3 -9.7,-8.3 -1.3,-10.4 7,-7.8 2.4,-11.6 -2.3,-13.4 2.2,-7.2 z"
                />
                <path

                  id="EG"
                  data-name="Egypt"

                  d="m 628.8,88.1 -11.9,-4 -11.5,-3.7 -15.6,0.2 -3.7,6.6 2.2,5.9 -2.4,8.5 4.2,11.2 2.9,49.2 2.2,50.9 48.1,0 46.4,0 47.4,0 -2.2,-2.8 -14.7,-12.4 -0.9,-9 2.2,-2.4 -11.6,-15.3 -4.4,-7.9 -4.9,-7.5 -10.5,-21.6 -8.4,-13.9 -6.1,-14.5 1.1,-1.3 10.1,19.8 5.8,6.2 4.3,4.4 2.5,-2.4 2.7,-7.2 1.6,-10.4 2.8,-5.6 -1.5,-3.5 -8.5,-20.1 0,0 -5.4,3.4 -9.2,-0.8 -9.6,-3.2 -2.3,4.5 -3.8,-6.8 -8.5,-1.8 -10.2,1.2 -4.5,3.9 -8.6,4.4 -5.6,-2.2 z"
                  style={{ fill: selectedCountry === 'EG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('EG')}
                />
                <path

                  id="ER"
                  data-name="Eritrea"
                  style={{ fill: selectedCountry === 'ER' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('ER')}
                  d="m 777.6,303.8 -7,-6.8 -4,-12.7 -7.8,-16 -5.7,7.9 -8.8,2.3 -3.6,4.2 -0.7,9.2 -4.3,20.3 1.5,5.6 14.3,2.9 3.3,-10.4 7.6,6.3 7,-3.2 3,2.9 8.3,0.1 10.8,5.6 3.4,4.8 5.5,4.4 5.4,8.1 4.3,4.5 5.2,1.2 3.6,-3.4 -6.2,-4.2 -4,-4.7 -6.9,-8 -7.1,-7.9 -17.1,-13 z"
                />
                <path

                  id="ET"
                  data-name="Ethiopia"

                  d="m 754.8,310.3 -3.3,10.4 -14.3,-2.9 -1.4,11.9 -4.5,13.6 -7.1,6.8 -4.8,10.6 -1.1,5.7 -5.6,3.8 -3.3,14.5 0.1,1.7 0.4,10.8 -1.8,4.2 -6.4,0.3 -4,7.9 7.5,1 6.3,6.7 2.2,5.6 5.7,3.2 7.4,15 6.4,2.4 0.1,7.7 4.2,4.6 8.5,0 15.7,11.7 3.8,0.2 2.9,-0.4 2.7,1.6 8.2,1.1 3.5,-5.8 11.1,-5.8 4.9,4.7 8.4,0 3.3,-4.4 7.8,-0.2 10.7,-9.8 15.9,-0.6 33.5,-41.5 -10.3,0.1 -40.3,-16.4 -4.8,-5 -4.6,-6.6 -4.8,-7.7 2.5,-4.9 -2.8,-2.4 -2.9,0.9 -6.8,-0.2 -0.3,-4.2 -1.1,-3.8 3.9,-6.5 4,-6.1 -4.3,-4.5 -5.4,-8.1 -5.5,-4.4 -3.4,-4.8 -10.8,-5.6 -8.3,-0.1 -3,-2.9 -7,3.2 -7.6,-6.3 z"
                  style={{ fill: selectedCountry === 'ET' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('ET')} />
                <path

                  id="GA"
                  style={{ fill: selectedCountry === 'GA' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GA')}
                  data-id="GA"
                  d="m 455.9,485.9 -1.5,-0.7 -7.3,1.8 -7.4,-1.9 -5.8,0.9 0.1,16.7 -17.7,-0.2 -4.2,0.8 -2.4,10.3 -3,10.1 -2.7,4.4 -0.3,4.6 7.3,14.3 8.1,11.4 12.5,14 9.3,-7.7 -4.6,-9.1 4.2,-3.5 8.3,-1.7 1,-6.1 6.5,6.6 10.8,0.6 3.7,-6.5 1.6,-9.2 -1.3,-10.8 -5.8,-8.2 5.3,-16.1 -3.1,-2.7 -9.1,1.1 -3.4,-7.1 0.9,-6.1 z"
                />
                <path

                  id="GH"
                  data-name="Ghana"

                  d="m 296.4,364.9 -5.6,-1.1 -3.9,2.2 -5.4,-1 -21.1,0.6 -0.3,7.9 1.6,10.4 3.2,19.7 -5.1,11.6 -3.2,15.6 5.2,11.9 -0.5,5.5 10.9,3.9 11,-4 6.7,-4.7 19.2,-8.1 -2.8,-4.9 -3.2,-8.8 -1,-6.8 2.7,-12.5 -3,-5 -1.2,-10.9 0,-10.1 -5.1,-7.1 0.9,-4.3 z"
                  style={{ fill: selectedCountry === 'GH' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GH')} />
                <path

                  id="GN"
                  data-name="Guinea"
                  style={{ fill: selectedCountry === 'GN' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GN')}
                  d="m 156.4,345.2 -1.8,0.7 -6.6,-1.1 -0.9,1.6 -2.7,0.3 -8.7,-3.4 -5.8,-0.1 -0.3,4.7 -1.3,1.4 0.9,4.6 -1.9,1.8 -2.7,0.1 -3.2,2.3 -3.7,-0.3 -5.5,6.8 3.6,2.2 1.7,3.1 1.3,6.1 3,2.7 3.1,1.8 4.7,5.4 5.3,8.2 6.5,-6.1 1.5,-3.8 2.1,-3 3.3,-0.3 2.9,-2.6 9.7,0 3.3,5 2.6,5.8 -0.4,4 1.9,3.6 -0.1,5.1 3.3,-0.8 2.6,-0.3 3.2,-1.6 5.1,8.5 -0.9,5.6 2.4,2.9 3.4,0.1 2.6,-5.6 3.4,0.4 1.9,0 0.8,-6.1 -0.9,-2.7 1.1,-1.9 4.6,-1.6 -3,-11.1 -2.8,-5.7 1,-4.7 2.5,-1.1 -3.7,-4 0.7,-4.1 -1.6,-1.6 -2.6,1.3 0.6,-4.5 2.5,-3.5 -5,-5.8 -1.4,-3.8 -2.7,-3.1 -2.4,-0.3 -2.9,1.9 -4,1.8 -3.3,3 -5.2,-1.1 -3.3,-3.5 -2,-0.4 -3.2,1.8 -2,0 -0.6,-5 z"
                />
                <path

                  id="GM"
                  data-name="Gambia"
                  style={{ fill: selectedCountry === 'GM' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GM')}
                  d="m 91.9,335.4 11,0.2 3,-1.9 2.2,-0.1 4.5,-3.2 5.2,2.9 5.2,0.3 5.3,-3.1 -2.4,-4 -4,2.3 -3.8,-0.1 -4.7,-3.4 -3.8,0.2 -2.8,3.3 -13.2,0.4 -1.7,6.2 z"
                />
                <path

                  id="GW"
                  data-name="Guinea-Bissau"
                  style={{ fill: selectedCountry === 'GW' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GW')}
                  d="m 129.9,343.2 -22.4,-0.6 -3.3,1.6 -4,-0.5 -6.5,2.3 0.7,2.9 3.7,3 -0.1,2.1 2.7,3.9 5.1,0.9 6.4,5.8 5.5,-6.8 3.7,0.3 3.2,-2.3 2.7,-0.1 1.9,-1.8 -0.9,-4.6 1.3,-1.4 0.3,-4.7 z"
                />
                <path

                  id="GQ"
                  data-name="Eq. Guinea"
                  style={{ fill: selectedCountry === 'GQ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('GQ')}
                  d="m 433.9,486 -19.9,-0.3 -4.1,15.5 2.2,2.1 4.2,-0.8 17.7,0.2 -0.1,-16.7 z"
                />
                <path

                  id="KE"
                  data-name="Kenya"

                  d="m 807.2,463.1 -8.4,0 -4.9,-4.7 -11.1,5.8 -3.5,5.8 -8.2,-1.1 -2.7,-1.6 -2.9,0.4 -3.8,-0.2 -15.7,-11.7 -8.5,0 -4.2,-4.6 -0.1,-7.7 -6.4,-2.4 -8.1,9.1 -7.4,8.3 5.9,9.6 1.5,7 5.5,15.8 -4.4,10.1 -5.9,9.2 -3.5,5.6 0,0.7 2.9,5.2 -0.8,10.3 44.1,28.2 0.7,8 17.3,13.8 5,-4.6 2.5,-9.2 4,-5.5 1.9,-9.8 4.6,-1 3.1,-5.8 8.6,-5.5 -7.2,-11.4 -0.4,-50.4 10.5,-15.7 z"
                  style={{ fill: selectedCountry === 'KE' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('KE')} />
                <path

                  id="LR"
                  data-name="Liberia"
                  style={{ fill: selectedCountry === 'LR' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('LR')}
                  d="m 193.3,411 -3.4,-0.4 -2.6,5.6 -3.4,-0.1 -2.4,-2.9 0.9,-5.6 -5.1,-8.5 -3.2,1.6 -2.6,0.3 -5.7,6.5 -5.5,7.5 -0.7,4 -2.9,4.4 8.1,8.9 10.4,7.6 11,10.5 12.6,6.6 3.2,-0.1 1,-11.4 1.1,-1.7 -0.3,-5.5 -5.2,-5.8 -3.8,-0.9 -3.6,-3.8 2.7,-6.1 -1.2,-6.7 0.6,-4 z"
                />
                <path

                  id="LY"
                  data-name="Libya"

                  d="m 589.8,80.6 -3.1,-4.5 -11.7,-1.6 -3.9,-2.4 -4.4,0 -4.4,-6.2 -15.9,-2.8 -7.9,1.8 -7.9,6.5 -3.3,6.7 3.4,10.6 -5.3,6.3 -5.5,3.6 L 507,91.7 490.3,86 479.7,83.3 473.6,71 l -15.7,-6.1 -9.8,-2.3 -4.8,1.2 -13.8,-4.8 -0.3,10.6 -5.6,4 -3.4,4.4 -7.9,5.3 1.5,5.7 -0.9,5.8 -5.6,3.2 4.1,12.2 0.8,6.4 -1.8,11.3 1,6.3 -1.4,7.6 1.3,8.7 -4.6,5.8 7.2,10.1 0.6,5.9 4.3,7.7 5.5,-2.5 9.6,6.4 5.4,8.7 19,6 6.9,7.5 8.3,-5.1 11.9,-7.6 48.4,26.5 48.7,26.5 -0.1,-5.8 13.8,0 -1,-27.7 -2.2,-50.9 -2.9,-49.2 -4.2,-11.2 2.4,-8.5 -2.2,-5.9 3.7,-6.6 z"
                  style={{ fill: selectedCountry === 'LY' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('LY')} />
                <path

                  id="LS"
                  data-name="Lesotho"
                  style={{ fill: selectedCountry === 'LS' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('LS')}
                  d="m 625.3,939.9 2.5,-4.4 6.7,-2.2 2.4,-4.5 4.1,-6.7 -3.8,-4.2 -4.8,-4.2 -5.7,2.8 -6.8,5.4 -6.9,8.7 8,10.6 4.3,-1.3 z"
                />
                <path

                  id="MA"
                  data-name="Morocco"

                  d="m 271.2,30.7 -5,-0.1 -11.9,-3.1 -11,0.9 -6.8,-5.9 -8.5,-0.1 -3.8,8.6 -8,14.5 -8.7,5.7 -11.8,6.4 -7.7,9.3 -1.8,7.3 -4.8,11.8 2.5,17.2 -10.1,11.5 -6,3.7 -9.6,9.4 -11,1.6 -6.1,5.3 -0.2,0.2 -7.9,14.1 -8.1,5.1 -4.5,8.5 -0.5,7.4 -3.4,8.1 -4,2.2 -6.9,8.8 -4.4,9.8 0.7,4.6 -4.1,7.3 -4.7,3.7 -0.8,6.4 0.2,0.1 27,-1.1 1.6,-5 5,-6.2 4.4,-19.1 16.9,-15 6,-17.4 3.7,-1.1 4.2,-10.8 10,-1.4 4.2,1.8 5.4,0 3.9,-3.2 7.3,-0.4 -0.1,-7.5 0,0 1.8,0 0.2,-16.3 19.2,-10.2 11.8,-2.1 9.6,-3.7 4.6,-7 13.8,-5.4 0.6,-10.2 6.7,-1.2 5.4,-5.1 15.2,-2.3 2.2,-5.4 -3.1,-2.9 -3.9,-14.7 -0.7,-8.4 -4.2,-9 z"
                  style={{ fill: selectedCountry === 'MA' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MA')}
                />
                <path

                  id="MG"
                  data-name="Madagascar"
                  style={{ fill: selectedCountry === 'MG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MG')}
                  d="m 902.9,704.8 -2.5,-9.1 -3,-5.9 -3.9,-5.9 -4.3,6.2 -0.7,8.3 -7.1,9.6 -5.1,-1.7 1.3,6 -4,6.9 -10.4,8.5 -7.3,7.9 -5.4,0.2 -4.6,2.5 -6.9,2.8 -6,0.6 -2.2,8.7 -4.7,7.8 0.2,12.7 1.7,8.7 2.4,6.6 -1.7,8.8 -6.4,10.5 -0.3,4.6 -5.7,2.4 -2.8,10 0.4,9.9 3.4,11 -0.1,12.3 2.6,7.3 9.1,5 6.5,3.5 10.9,-5.8 9.9,-3.3 6.8,-16.1 6.1,-19.2 9.3,-26.2 7.3,-19.1 5.9,-16.1 1.6,-11.7 3.5,-3.2 1.5,-5.9 -1.7,-10.2 2.6,-4.1 3.5,8.1 2.4,-4.1 1.7,-6.6 -2.8,-6.5 -1,-16.7 z"
                />
                <path

                  id="MLI"
                  data-name="Mali"
                  d="m 347.4,252.3 -13.3,1.3 -0.2,-8.8 -5.5,-2.2 -7.5,-4 -2.9,-6.4 -40.4,-30.2 -40,-30.2 -18.2,0.2 5.1,59.7 5.4,59.7 2,1.8 -2.7,9.6 -48.5,0.2 -1.9,3.1 -4.6,-0.9 -6.9,2.7 -8.4,-3.8 -3.8,0.3 -2.2,8.2 -4.1,2.5 0.4,8.6 2.3,7.9 4.5,3.9 1,5.3 -0.6,4.4 0.6,5 2,0 3.2,-1.8 2,0.4 3.3,3.5 5.2,1.1 3.3,-3 4,-1.8 2.9,-1.9 2.4,0.3 2.7,3.1 1.4,3.8 5,5.8 -2.5,3.5 -0.6,4.5 2.6,-1.3 1.6,1.6 -0.7,4.1 3.7,4 1.6,-1.3 3.3,2.1 9.4,0.1 2.3,-4 2.1,0.3 3.5,-1.6 1.8,5.9 2.9,-1.7 5,-2.1 -0.8,-8 3.4,-5.9 -0.3,-4.7 9.7,-11.4 1.8,-9.5 3.4,-3.4 5.8,1.9 5.1,-2.8 1.7,-3.6 9.4,-6.2 2.3,-4.3 11.3,-5.8 6.7,-1.9 3,2.6 7.8,0 7.7,-0.6 4.5,-4.9 16.5,-1.2 10.7,-2.2 1,-8.5 6.6,-9.2 -0.3,-31.9 z"
                  style={{ fill: selectedCountry === 'MLI' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MLI')} />
                <path

                  id="MZ"
                  data-name="Mozambique"
                  style={{ fill: selectedCountry === 'MZ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MZ')}
                  d="m 788.2,666.2 -1.7,-6.2 0,0 0,0 -10,8.1 -13.4,5.3 -7.3,-0.2 -4.5,4.2 -8.4,0.3 -3.3,1.8 -14.4,-3.9 -4.7,0.5 -3.3,13.1 1.4,15.8 0.7,0 4.2,4.4 4.6,10 0.3,17.8 -5.4,3 -4.1,9.6 -7.5,-8.6 -0.5,-9.7 2.9,-6.5 -0.5,-5.5 -4.7,-3.5 -3.3,1.2 -6.8,-6.6 -37.1,11.4 0.8,9.9 0.6,5.1 10,-0.3 5.5,3 2.5,3.4 5.7,1 6.1,4.4 -0.8,17.5 -2.8,9.6 -1,10.4 1.7,4.1 -1.7,8.1 -1.9,1.3 -3.6,9.9 -13.4,15.7 4.7,19.5 2.5,9.9 -3,15.4 0.7,5 1.3,6.2 0.6,6.1 9,0.1 1.5,-7.3 -2.9,-0.9 -0.6,-5.8 5.5,-5.2 14.8,-7.5 10.1,-4.6 5.3,-5 2.1,-5.7 -2.7,-2.4 2.4,-6.4 1.1,-13.6 -2.2,0.7 0.1,-4.1 -1.9,-8.1 -5.2,-10.5 1.6,-9.9 5.1,-3.2 8.9,-9.8 4.7,-2.5 14.4,-14.9 14,-6.7 11.3,-5.3 8.1,-8.5 5.2,-9.6 4.1,-9.9 -1.8,-6.8 0.4,-21.6 -1,-12.2 0.9,-13.8 z"
                />
                <path

                  id="MR"
                  data-name="Mauritania"
                  style={{ fill: selectedCountry === 'MR' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MR')}
                  d="m 237.6,171.8 -44.1,-33.5 -0.5,20.9 -38.9,-0.7 -0.4,35.4 -11.2,1.3 -3.1,7.1 1.9,20 -46.9,-0.1 -2.7,4.6 6.1,6 3,6.5 -1.4,6.9 1.3,6.9 1,13.7 -1.8,13 -3.5,6.8 0.9,7.5 4.2,-4.5 6,1.2 5.9,-3 6.8,-0.1 5.7,4 7.9,3.7 7.2,10.2 7.8,9.5 4.1,-2.5 2.2,-8.2 3.8,-0.3 8.4,3.8 6.9,-2.7 4.6,0.9 1.9,-3.1 48.5,-0.2 2.7,-9.6 -2,-1.8 -5.4,-59.7 -5.1,-59.7 18.2,-0.2 z"
                />
                <path

                  id="MW"
                  data-name="Malawi"
                  style={{ fill: selectedCountry === 'MW' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('MW')}
                  d="m 714.6,711.7 0.3,-5.2 -2.7,-4.1 0.4,-6 -3.3,-10.2 3.7,-7.7 -0.2,-16.7 -4.1,-8.9 0.4,-1.5 0,0 -2.3,-3.8 -11.9,-2.6 5.6,6.2 2.8,11.7 -2.2,3.8 -2.7,11.2 2,11.5 -4,4.8 -4.1,12.8 6.2,3.6 6.8,6.6 3.3,-1.2 4.7,3.5 0.5,5.5 -2.9,6.5 0.5,9.7 7.5,8.6 4.1,-9.6 5.4,-3 -0.3,-17.8 -4.6,-10 -4.2,-4.4 -0.7,0 0.1,1.9 2.3,0.5 2.2,7.4 -0.4,1.7 -4.1,-5.3 -2.2,3.4 -1.9,-2.9 z"
                />
                <path

                  id="NA"
                  data-name="Namibia"
                  style={{ fill: selectedCountry === 'NA' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('NA')}
                  d="m 576,759.7 -22.4,5.7 -29.1,-2 -8.2,-6.6 -48.8,0.6 -1.9,1 -7.1,-6.3 -7.8,-0.4 -7.2,2.3 -5.9,2.7 0.6,10.6 9.5,13.5 2.5,8.7 6,16.6 5.9,11.4 4.6,5.7 1.3,7.6 -0.1,16.5 3.4,21.3 2.6,10.1 2.2,13.4 4.3,10.1 8.3,10.5 6,-6.8 4.5,3.7 1.7,6 5.2,1 7.3,2.6 6.4,-1 10.8,-7.1 2.2,-51.1 1.4,-40.4 11.8,-0.5 1.9,-49.3 9,-0.4 18.7,-4.9 4.4,5.7 7.9,-5.4 3.6,0 6.9,-3.1 0,-1.2 -4.7,-3.1 -7.8,-0.8 -9.9,3.1 z"
                />
                <path

                  id="NE"
                  data-name="Niger"

                  d="m 458.3,198.6 -19,-6 -40.5,26.4 -34.5,27.1 -16.9,6.2 0.3,31.9 -6.6,9.2 -1,8.5 -10.7,2.2 -16.5,1.2 -4.5,4.9 -7.7,0.6 -1,6.7 1.6,6.3 6.9,9 0.4,6.7 14,3.1 -0.3,9.5 4.1,-4 4.3,-0.1 9.3,8 0.8,-12.4 3.5,-5.5 1.6,-8 3.2,-3 13,-1.6 12.2,5.1 4.6,5.3 6.1,0.2 5.8,-3.4 14.7,7.1 6.2,-0.3 7.1,-5.9 7.1,0.4 3.5,-1.9 6.5,0.8 9.4,4 9.4,-7.7 2.9,0.6 8.4,15.1 2.2,-0.3 0.4,-4.4 3.4,-0.8 1.1,-6.5 -7.8,-0.3 -0.1,-8.9 -5.1,-5.2 4.9,-18.2 15.2,-13 0.2,-18 4,-28.1 2.5,-6 -5.1,-4.7 -0.3,-4.4 -4.6,-3.6 -3.4,-21.5 -8.3,5.1 -6.9,-7.5 z"
                  style={{ fill: selectedCountry === 'NE' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('NE')} />
                <path

                  id="NG"
                  data-name="Nigeria"

                  d="m 468.2,344.6 -2.2,0.3 -8.4,-15.1 -2.9,-0.6 -9.4,7.7 -9.4,-4 -6.5,-0.8 -3.5,1.9 -7.1,-0.4 -7.1,5.9 -6.2,0.3 -14.7,-7.1 -5.8,3.4 -6.1,-0.2 -4.6,-5.3 -12.2,-5.1 -13,1.6 -3.2,3 -1.6,8 -3.5,5.5 -0.8,12.4 -0.5,4.6 2.8,8.2 -2.4,5.6 1.3,3.7 -5.9,8.5 -3.7,4.3 -2.3,8.7 0.3,8.8 -0.6,22.3 10.7,0 9.2,-0.1 8.6,9.1 4.1,10 6.5,8.6 9.8,0.3 4.7,-3.1 4.6,0.8 12.7,-5 3.1,-9.8 5.7,-13.4 3.6,-0.1 7.2,-8.1 4.6,-0.2 6.9,5.7 8.3,-4.7 1.1,-5.7 2.7,-5.6 1.9,-7 6.4,-5.7 2.4,-9.7 2.6,-3.1 1.6,-7.2 3.1,-8.8 10.2,-10.7 0.5,-4.6 1.3,-2.5 -4.9,-5.5 z"
                  style={{ fill: selectedCountry === 'NG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('NG')} />
                <path

                  id="RW"
                  data-name="Rwanda"
                  style={{ fill: selectedCountry === 'RW' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('RW')}
                  d="m 667.9,533 -7.4,4.3 -2.9,-1.4 -3.5,3.8 -0.5,8.3 -1.7,1 -1.2,7.6 7.4,1.1 3.8,-7.9 6.5,0.9 0,0 3.5,-1.8 0.8,-8.1 -4.8,-7.8 z"
                />
                <path

                  id="EH"
                  data-name="W. Sahara"
                  style={{ fill: selectedCountry === 'EH' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('EH')}
                  d="m 193.8,134.6 -1.8,0 0,0 0.1,7.5 -7.3,0.4 -3.9,3.2 -5.4,0 -4.2,-1.8 -10,1.4 -4.2,10.8 -3.7,1.1 -6,17.4 -16.9,15 -4.4,19.1 -5,6.2 -1.6,5 -27,1.1 -0.2,-0.1 -0.6,5.9 2.7,-4.6 46.9,0.1 -1.9,-20 3.1,-7.1 11.2,-1.3 0.4,-35.4 38.9,0.7 0.5,-20.9 0.3,-2.7 0,-1 z"
                />
                <path

                  id="SD"
                  data-name="Sudan"

                  d="m 740,291.9 0.7,-9.2 3.6,-4.2 8.8,-2.3 5.7,-7.9 -6.9,-5.1 -4.8,-3.4 -5.3,-16.5 -2.5,-14.3 2.5,-2.5 -4.7,-13.6 -47.4,0 -46.4,0 -48.1,0 1,27.7 -13.8,0 0.1,5.8 2.4,54.9 -10.5,-0.9 -5.2,10.2 -3,8.5 2.6,3.2 -3.8,4.3 1.5,5.7 -3,5.8 -1.2,5 4.3,-0.8 2.6,5.4 0.3,8 4.6,4.1 -0.1,3.4 1.5,5.9 7.2,8.6 0.1,5.7 -1.9,5.7 0.9,4.3 4.2,4 1,0.7 3.8,-1.6 4.1,-2.6 2.9,-12.3 3.2,-6.4 8.8,-1.9 2.1,3.8 6.5,8 3.3,1.2 4.4,-2.3 8.7,0.4 1.8,2.9 12.1,0 0.3,-2.9 6.3,-2.6 1.1,-4 4.6,-2.9 10.4,8.1 6.2,-1.4 5.8,-10 6.5,-7.6 -1.3,-8.3 -3,-4 7.3,-0.8 0.7,-3 5.7,0.9 -1.2,10.2 1.7,10 6.5,5.5 1.5,4.7 0,6.9 1.7,0.3 -0.1,-1.7 3.3,-14.5 5.6,-3.8 1.1,-5.7 4.8,-10.6 7.1,-6.8 4.5,-13.6 1.4,-11.9 -1.5,-5.6 4.3,-20.3 z"
                  style={{ fill: selectedCountry === 'SD' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SD')} />
                <path

                  id="SS"
                  data-name="S. Sudan"
                  style={{ fill: selectedCountry === 'SS' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SS')}
                  d="m 707.8,379.2 -1.5,-4.7 -6.5,-5.5 -1.7,-10 1.2,-10.2 -5.7,-0.9 -0.7,3 -7.3,0.8 3,4 1.3,8.3 -6.5,7.6 -5.8,10 -6.2,1.4 -10.4,-8.1 -4.6,2.9 -1.1,4 -6.3,2.6 -0.3,2.9 -12.1,0 -1.8,-2.9 -8.7,-0.4 -4.4,2.3 -3.3,-1.2 -6.5,-8 -2.1,-3.8 -8.8,1.9 -3.2,6.4 -2.9,12.3 -4.1,2.6 -3.8,1.6 8.4,5.4 6.8,5.5 0.1,4.5 8.3,7.2 5.2,6 3.2,8.3 9.2,5.5 2,4.4 7.5,11.4 5.5,1.7 3.2,-2.3 5.7,0.9 6.8,-2.9 2.9,5.9 10.9,9.2 0,0 5,-3.8 7.8,3.1 9.8,-3.3 8.6,0.1 7.4,-6.4 7.4,-8.3 8.1,-9.1 -7.4,-15 -5.7,-3.2 -2.2,-5.6 -6.3,-6.7 -7.5,-1 4,-7.9 6.4,-0.3 1.8,-4.2 -0.4,-10.8 -1.7,-0.3 0,-6.9 z"
                />
                <path

                  id="SN"
                  data-name="Senegal"

                  d="m 148.8,315.1 -7.8,-9.5 -7.2,-10.2 -7.9,-3.7 -5.7,-4 -6.8,0.1 -5.9,3 -6,-1.2 -4.2,4.5 -3,7.1 -6.1,9.7 -5.4,2.6 6,4.9 4.8,10.8 13.2,-0.4 2.8,-3.3 3.8,-0.2 4.7,3.4 3.8,0.1 4,-2.3 2.4,4 -5.3,3.1 -5.2,-0.3 -5.2,-2.9 -4.5,3.2 -2.2,0.1 -3,1.9 -11,-0.2 1.8,10.6 6.5,-2.3 4,0.5 3.3,-1.6 22.4,0.6 5.8,0.1 8.7,3.4 2.7,-0.3 0.9,-1.6 6.6,1.1 1.8,-0.7 0.6,-4.4 -1,-5.3 -4.5,-3.9 -2.3,-7.9 -0.4,-8.6 z"
                  style={{ fill: selectedCountry === 'SN' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SN')} />
                <path

                  id="SL"
                  data-name="Sierra Leone"
                  style={{ fill: selectedCountry === 'SL' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SL')}
                  d="m 171.5,401 -3.3,0.8 0.1,-5.1 -1.9,-3.6 0.4,-4 -2.6,-5.8 -3.3,-5 -9.7,0 -2.9,2.6 -3.3,0.3 -2.1,3 -1.5,3.8 -6.5,6.1 1.4,10.3 2.1,5 6.3,7.4 8.7,5.6 3.3,1 2.9,-4.4 0.7,-4 5.5,-7.5 5.7,-6.5 z"
                />
                <path

                  id="SZ"
                  data-name="Swaziland"
                  style={{ fill: selectedCountry === 'SZ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SZ')}
                  d="m 674,874.9 -5.8,-2.6 -3.5,1 -1.4,4 -3.6,5.2 -0.2,4.8 6.6,7.5 7,-1.5 2.8,-6.1 -0.6,-6.1 -1.3,-6.2 z"
                />
                <path

                  id="TD"
                  data-name="Chad"
                  style={{ fill: selectedCountry === 'TD' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('TD')}
                  d="m 582.5,246.4 -48.7,-26.5 -48.4,-26.5 -11.9,7.6 3.4,21.5 4.6,3.6 0.3,4.4 5.1,4.7 -2.5,6 -4,28.1 -0.2,18 -15.2,13 -4.9,18.2 5.1,5.2 0.1,8.9 7.8,0.3 -1.1,6.5 4.9,8.9 1,9.1 -0.4,9.2 6.8,12.6 -6.8,-0.1 -3.4,0.9 -5.6,-1.3 -2.5,6.5 7.2,8.1 5.3,2.3 1.8,5.7 3.9,9.6 -1.8,3.7 10,-1 2.2,-3.6 2.1,0.3 3,3.1 15.3,-5.3 5.1,-5.4 6.3,-4.8 -1.2,-4.9 3.4,-1.2 11.8,0.8 11.3,-6.4 8.6,-15.1 6,-5.6 7.7,-2.3 0.1,-3.4 -4.6,-4.1 -0.3,-8 -2.6,-5.4 -4.3,0.8 1.2,-5 3,-5.8 -1.5,-5.7 3.8,-4.3 -2.6,-3.2 3,-8.5 5.2,-10.2 10.5,0.9 -2.4,-54.9 z"
                />
                <path

                  id="TG"
                  data-name="Togo"
                  style={{ fill: selectedCountry === 'TG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('TG')}
                  d="m 307.1,365.2 -10.7,-0.3 -0.9,4.3 5.1,7.1 0,10.1 1.2,10.9 3,5 -2.7,12.5 1,6.8 3.2,8.8 2.8,4.9 9.8,-3 -3,-9.5 0.5,-31.8 -2.5,-2.8 -0.4,-6.8 -4.3,-4.9 -3.7,-4.1 1.6,-7.2 z"
                />
                <path

                  id="TN"
                  data-name="Tunisia"
                  style={{ fill: selectedCountry === 'TN' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('TN')}
                  d="m 429.5,59 -4.5,-2.2 -3.2,-6.6 -6,-0.2 -2.4,-7.6 7.3,-7 1.1,-12.1 -4.1,-3.5 -0.2,-6.5 5.5,-7 -0.9,-2.7 -9.5,5.2 0.1,-7.1 -8.1,-1.7 -12.2,5.7 -2.2,7.2 2.3,13.4 -2.4,11.6 -7,7.8 1.3,10.4 9.7,8.3 0.2,3.3 7.3,5.6 5.7,24.7 5.6,-3.2 0.9,-5.8 -1.5,-5.7 7.9,-5.3 3.4,-4.4 5.6,-4 0.3,-10.6 z"
                />
                <path

                  id="TZ"
                  data-name="Tanzania"
                  style={{ fill: selectedCountry === 'TZ' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('TZ')}
                  d="m 672.2,531.3 -4.3,1.7 4.8,7.8 -0.8,8.1 -3.5,1.8 0,0 0.6,5.4 2.6,3.2 0.1,4.5 -3,2.9 -4.9,7.2 -4.5,5 -1.2,0.2 -0.7,5.9 2.3,2 -0.5,5.9 2.3,5.5 -2.9,5.3 9.7,9.4 0.8,8.5 5.9,14.2 0,0 0.6,0.4 4.8,2.3 7.7,2.4 6.8,4.1 11.9,2.6 2.3,3.8 0,0 0.8,-2.7 6.2,7.4 0.6,14.5 3.9,5.3 -0.1,0.2 4.7,-0.5 14.4,3.9 3.3,-1.8 8.4,-0.3 4.5,-4.2 7.3,0.2 13.4,-5.3 10,-8.1 0,0 -4.4,-3 -4.7,-13.6 -4,-8.7 1,-6.6 -0.6,-4.2 3.5,-8.4 -0.3,-3.6 -7.7,-5 -0.6,-7.8 5.9,-17.1 -17.3,-13.8 -0.7,-8 -44.1,-28.2 0,0 -6,6.1 -4.1,6.3 4.8,4.7 -7,3.4 -1.5,-1.6 -7.1,0.9 -5.5,3.1 -3.3,-5.4 2.3,-9.7 0.5,-8.3 0,0 0,0 -13.4,-0.2 z"
                />
                <path

                  id="UG"
                  data-name="Uganda"
                  style={{ fill: selectedCountry === 'UG' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('UG')}
                  d="m 711.3,458.5 -7.4,6.4 -8.6,-0.1 -9.8,3.3 -7.8,-3.1 -5,3.8 0,0 -0.6,16.1 4.9,1.9 -3.9,4.9 -4.7,3.7 -4.6,7.2 -2.6,6.4 -0.6,11.1 -2.9,5.3 -0.1,10.5 2.9,1.4 7.4,-4.3 4.3,-1.7 13.4,0.2 0,0 -0.7,-5.3 5.7,-8.1 7.7,-2 5.2,-3.3 6.3,2.7 0.6,1 0,-0.7 3.5,-5.6 5.9,-9.2 4.4,-10.1 -5.5,-15.8 -1.5,-7 -5.9,-9.6 z"
                />
                <path

                  id="ZA"
                  data-name="South Africa"
                  style={{ fill: selectedCountry === 'ZA' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('ZA')}
                  d="m 522.3,999 5.3,-0.3 7.5,-5.3 10,-2.2 12.3,-5.5 4.7,0.7 7.2,-1.7 12.3,2.7 5.9,-2.6 6.9,2 1.8,-3.8 6,-0.8 12.6,-5.3 9.3,-6.3 8.9,-8.3 14.4,-14.2 7.5,-9.9 3.9,-7.1 5.5,-7 2.5,-2 8.6,-7 3.5,-6.2 2.3,-11.5 3.7,-10.1 -9,-0.1 -2.8,6.1 -7,1.5 -6.6,-7.5 0.2,-4.8 3.6,-5.2 1.4,-4 3.5,-1 5.8,2.6 -0.7,-5 3,-15.4 -2.5,-9.9 -4.7,-19.5 -6.3,-1.3 -4.1,1.6 -5.7,-2.3 -4.9,-0.2 -17.3,10.2 -11.2,10.3 -4.4,9.3 -3.9,5.2 -6.5,1.1 -2.4,6.6 -1.4,4.3 -7.8,3.2 -9.6,-0.6 -5.5,-3.9 -4.9,-1.7 -6,3.2 -3.2,6.6 -5.8,4.2 -6.2,6.2 -8.5,1.4 -2.5,-4.9 1.5,-8.4 -6.5,-13.2 -3.2,-2 -2.2,51.1 -10.8,7.1 -6.4,1 -7.3,-2.6 -5.2,-1 -1.7,-6 -4.5,-3.7 -6,6.8 7.7,17.9 0,0.1 5.4,11.7 6.9,12.8 -0.2,10.6 -3.9,2.5 3.2,9.3 -0.5,8.1 1.3,3.8 0.7,-1.9 4.6,6.2 3.8,0.2 4.6,5 z m 103,-59.1 -4.3,1.3 -8,-10.6 6.9,-8.7 6.8,-5.4 5.7,-2.8 4.8,4.2 3.8,4.2 -4.1,6.7 -2.4,4.5 -6.7,2.2 -2.5,4.4 z"
                />
                <path

                  id="ZM"
                  data-name="Zambia"
                  style={{ fill: selectedCountry === 'ZM' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('ZM')}
                  d="m 671.3,636 -4.1,-1.1 0.7,-3 -2.1,-0.6 -16.4,2.3 -3.3,1.7 -3.6,8.8 2.6,6.1 -2.5,16.4 -1.9,13.9 3.2,2.4 8.4,5.4 3.4,-2.5 0.6,14.9 -9.3,-0.1 -4.8,-7.6 -4.3,-5.9 -9.2,-1.9 -2.6,-7.3 -7.5,4.4 -9.7,-2 -3.9,-6.2 -7.7,-1.3 -5.7,0.3 -0.6,-4.3 -4.2,-0.3 1.2,4.3 -1.5,6.7 2,6.5 -2,5.2 1,4.7 -25.3,-0.1 -1.6,44 7.8,11.3 7.6,8.6 9.9,-3.1 7.8,0.8 4.7,3.1 0,1.2 2.2,1 13.4,1.5 3.8,1.6 4.1,-0.3 7,-9 10.9,-11.4 4.4,-1 1.7,-4.8 7,-5.5 9.3,-1.9 -0.8,-9.9 37.1,-11.4 -6.2,-3.6 4.1,-12.8 4,-4.8 -2,-11.5 2.7,-11.2 2.2,-3.8 -2.8,-11.7 -5.6,-6.2 -6.8,-4.1 -7.7,-2.4 -4.8,-2.3 -0.6,-0.4 0,0 0.9,2.3 -2,0.8 -2.6,-2.9 z"
                />
                <path

                  id="ZW"
                  data-name="Zimbabwe"

                  d="m 669.1,825.1 13.4,-15.7 3.6,-9.9 1.9,-1.3 1.7,-8.1 -1.7,-4.1 1,-10.4 2.8,-9.6 0.8,-17.5 -6.1,-4.4 -5.7,-1 -2.5,-3.4 -5.5,-3 -10,0.3 -0.6,-5.1 -9.3,1.9 -7,5.5 -1.7,4.8 -4.4,1 -10.9,11.4 -7,9 -4.1,0.3 -3.8,-1.6 -13.4,-1.5 4.2,11.1 2.3,2.4 3.5,8 13,15.2 5.1,1.5 -0.2,4.9 3.1,8.8 9.2,2.1 7.3,6.2 4.9,0.2 5.7,2.3 4.1,-1.6 6.3,1.3 z"
                  style={{ fill: selectedCountry === 'ZW' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('ZW')} />
                <path

                  id="SO"
                  data-name="Somalia"
                  style={{ fill: selectedCountry === 'SO' ? '#000' : '#ddd382' }}
                  onClick={() => handleCountryClick('SO')}
                  d="m 832.6,372.8 -5.7,-5.8 -2.5,-5.7 -4.1,-2.6 -4.2,7.4 -2.5,4.9 4.8,7.7 4.6,6.6 4.8,5 40.3,16.4 10.3,-0.1 -33.5,41.5 -15.9,0.6 -10.7,9.8 -7.8,0.2 -3.3,4.4 -10.5,15.7 0.4,50.4 7.2,11.4 2.7,-3.3 2.9,-7.3 13.4,-16.7 11.4,-10.6 18.1,-13.7 12.1,-11.2 14.1,-18.9 10.1,-15.5 10,-20.2 7,-17.7 5.4,-15.5 2.9,-14.9 2.4,-5 -0.4,-7.3 0.8,-8 -0.5,-3.9 -4.6,0.1 -5.5,4.7 -6.4,1.4 -5.5,2.1 -3.9,0.2 0,0 -6.9,0.5 -4.2,2.6 -6,0.9 -10.5,4.3 -13.2,1.6 -11.3,3.5 -6.1,0 z"
                />

              </svg>
            </div>
          </div>
        </div>
      </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-craft"
            role="tabpanel"
            aria-labelledby="pills-craft-tab"
            tabindex="0"
          >
            <div className="crafting mb-50">
              <div className="col-12 ">
                <img
                  src={banner}
                  className="img-fluid h-100 w-100 position-absolute"
                />
                <div className="crafting-content position-relative p-5 mx-3 text-white">
                  <h1 className="mb-5">
                    Crafting Tomorrow's
                    <br /> Success Stories Today
                  </h1>
                  <p className="crafting-text mt-5">
                    <span className="crafing-head">-Human Captial:</span>{" "}
                    investing in Africa's human capital promises access to a
                    <br />
                    dynamic,rapidly growing workforce primed for innovation
                  </p>

                  <p className="crafting-text mt-5">
                    <span className="crafing-head">-Natural Resources:</span>{" "}
                    Africa's rich natural resources offer lucrative
                    <br />
                    opportunities for sustainable extraction and value-added
                    processing.
                  </p>

                  <p className="crafting-text mt-5">
                    <span className="crafing-head">-Finance:</span> Africa's
                    expanding financial sector presents unique investment
                    <br />
                    prospects in fintech and inclusive banking services.
                  </p>

                  <p className="crafting-text mt-5">
                    <span className="crafing-head">-Infrastructure:</span>{" "}
                    Investing in Africa's infrastructure development is key to
                    <br />
                    unlocking economic potential and ensuring high-yield
                    returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="success p-5 bg-blue mt-3">
              <div className="col-12 mt-3">
                <h1 className="mb-5 font-gold mt-5">Success Stories</h1>
              </div>

              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {successStories.map((story, i) => {
                    return (
                      <div className="carousel-item active">
                        <div className="item bg-cement rounded">
                          <div className="col-12 px-5 py-4">
                            <div className="row">
                              <div className="col-lg-2 col-sm-12">
                                <img src={propic} className="profile-pic" />
                              </div>
                              <div className="col-lg-2  col-sm-12 my-auto text-center">
                                <h4 className="mt-2 fw-bold">{story.name}</h4>
                                <p>
                                  {story.title} of {story.company}
                                </p>
                              </div>
                              <div className="col-lg-8  col-sm-12 my-auto">
                                <span>{story.testimonial_text}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="carousel-item active">
                    <div className="item bg-cement rounded">
                      <div className="col-12 px-5 py-4">
                        <div className="row">
                          <div className="col-lg-3 col-sm-12">
                            <img src={propic} className="profile-pic" />
                          </div>
                          <div className="col-lg-3 col-sm-12 my-auto text-center">
                            <h4 className="mt-2 fw-bold fs-sucess">John Doe</h4>
                            <p>CEO of Company</p>
                          </div>
                          <div className="col-lg-6  col-sm-12">
                            <div className="sucess-style">
                              <span className="fw-bold">
                                I found more than a continent; I discovered a
                                journey of opportunity. With perseverance, I
                                turned challenges into triumphs, building a
                                successful venture from the ground up. Africa's
                                dynamic landscape fueled my ambition, and today,
                                I stand as a testament to the boundless
                                possibilities this continent offers.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="item bg-cement rounded">
                      <div className="col-12 px-5 py-4">
                        <div className="row">
                          <div className="col-lg-2 col-sm-12">
                            <img src={propic} className="profile-pic" />
                          </div>
                          <div className="col-lg-2  col-sm-12 my-auto text-center">
                            <h4 className="mt-2 fw-bold">John Doe</h4>
                            <p>CEO of Company</p>
                          </div>
                          <div className="col-lg-8  col-sm-12 my-auto">
                            <span>
                              I found more than a continent; I discovered a
                              journey of opportunity. With perseverance, I
                              turned challenges into triumphs, building a
                              successful venture from the ground up. Africa's
                              dynamic landscape fueled my ambition, and today, I
                              stand as a testament to the boundless
                              possibilities this continent offers.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="item bg-cement rounded">
                      <div className="col-12 px-5 py-4">
                        <div className="row">
                          <div className="col-lg-2 col-sm-12">
                            <img src={propic} className="profile-pic" />
                          </div>
                          <div className="col-lg-2  col-sm-12 my-auto text-center">
                            <h4 className="mt-2 fw-bold">John Doe</h4>
                            <p>CEO of Company</p>
                          </div>
                          <div className="col-lg-8  col-sm-12 my-auto">
                            <span>
                              I found more than a continent; I discovered a
                              journey of opportunity. With perseverance, I
                              turned challenges into triumphs, building a
                              successful venture from the ground up. Africa's
                              dynamic landscape fueled my ambition, and today, I
                              stand as a testament to the boundless
                              possibilities this continent offers.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  *
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            {/* <div className="blog-section p-4 invest-container">
              <div className="col-12 mb-5 mt-2 invest-container">
                <h1 className="heading-style">Contact Us</h1>
              </div>
              <div className="col-12 invest-container">
                <div className="address text-secondary text-start">
                  <div className="mt-3">
                    <p>Adam Innovations Co., Ltd</p>
                    <p className="">Global IT Park1188-2, Urusa, Minami</p>

                    <p className="">UonumaNiigata 9497302 Japan</p>

                    <p className="">Tel: (+81)25-788-0665</p>

                    <p className="">Email:info@adam-i.jp</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
