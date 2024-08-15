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
import discover from "../../assets/discover.png";
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
import propic from "../../assets/propic.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import x from "../../assets/x.png";
import youtube from "../../assets/youtube.png";
import OwlCarousel from "react-owl-carousel";
import React, { useEffect,useState } from 'react';
import "../home/home.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const [search, setSearch] = useState("");
    const [suggest, setSuggest] = useState(false);
    const [company, setCompany] = useState([]);
    const navigate = useNavigate();
    const navigatetoRegister = () => {
      navigate("/signup");
    };
    useEffect(() => {
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
    }, []);


  return (
    <div>
      <main class="">
        <div class="p-4 text-body-emphasis bg-body-secondary banner ">
          <div class="invest-container">
            <h1 class="text-white banner-head">INVEST IN AFRICA</h1>
            <p class="banner-text my-3 text-white">
              Shaping Tomorrow Together,
              <br /> Invest in Africa's Potential.
            </p>
            <div className="search">
         
            <div id="sticky">
            <table id="table">
                    <tbody>
                        <tr>
                            <td id="searchbar" className="w-130">
                              
                                <select className="form-select border-0" aria-label="Default select example">
                                    <option defaultValue>COUNTRIES</option>
                                    <option value="1">Industries</option>
                                    <option value="2">Technology</option>
                                    <option value="3">Countries</option>
                                </select>
                            </td>
                            <td id="searchbox" className="d-flex mt-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon-style" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                                <input type="text" id="input" placeholder="Search" value={search}  onFocus={()=>setSuggest(true)} onBlur={()=>setSuggest(false)}/>
                            </td>
                            <td id="button">
                                <button id="rbutton" onClick={()=>{console.log(search)}}> SEARCH</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
             
            </div>
            <div className="mt-3">
                <table id="suggest">
                    <tbody>
                        <tr>
                            <td>Frequently search:</td>
                        
                            <button type="button" class="btn btn-outline-secondary m-l-10">Agriculture</button>
                            <button type="button" class="btn btn-outline-secondary m-l-10">Infrastructure</button>
                            <button type="button" class="btn btn-outline-secondary m-l-10">Tourism</button>
                               
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
            
          </div>
        </div>
      </main>

      <div className="col-12 bg-green p-3 invest-container">
        <div className="row ">
          <div className="col-sm-6 col=-md-6 col-lg-3">
            <div class="card my-3">
              <div class="card-body position-relative">
                <h5 class="card-title text-center">WHY INVEST IN AFRICA?</h5>
                <p class="card-text">
                  Pro Business Youthful Population Growing Economies
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div class="card my-3">
              <div class="card-body position-relative">
                <h5 class="card-title text-center">WORLD OF <br></br> AFRICA</h5>
                <p class="card-text">
                  A continent of diversity and beauty where cultures collide,
                  nature flourishes, and business opportunities abound.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div class="card my-3">
              <div class="card-body position-relative">
                <h5 class="card-title text-center">
                  Crafting Tomorrow's Success
                </h5>
                <p class="card-text">
                  Human Capital Natural Resources Finance Infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div class="card my-3">
              <div class="card-body position-relative">
                <h5 class="card-title text-center">Contact Us</h5>
                <p class="card-text">
                  Join our business and be part of something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section p-3 invest-container">
        <div className="col-12 my-5 invest-container">
          <h1>Why invest in africa</h1>
        </div>
        <div className="col-12 invest-container">
          <div className="row invest-container">
            <div className="col-lg-4 col-sm-12">
              <img src={cp1} className="img-fluid mb-3" />
            </div>
            <div className="col-lg-8 col-sm-12 my-auto">
              <p className="content-text">
                Business-friendly environment with political stability,
                resilient economy, dynamic investor friendly environment and
                Government incentives.
              </p>
            </div>
          </div>
          <p></p>
        </div>
        <div className="col-12 sm-d-g invest-container">
          <div className="row invest-container">
            <div className="col-lg-8 col-sm-12 my-auto sm-o-2">
              <p className="content-text">
                Tap into a burgeoning youth market brimming with 1.46 billion
                potential consumers, a demographic primed for dynamic growth and
                innovation.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 text-end sm-o-1">
              <img src={cp2} className="img-fluid mb-3" />
            </div>
          </div>
          <p></p>
        </div>
        <div className="col-12 invest-container">
          <div className="row invest-container">
            <div className="col-lg-4 col-sm-12">
              <img src={cp3} className="img-fluid mb-3" />
            </div>
            <div className="col-lg-8 col-sm-12 my-auto">
              <p className="content-text">
                Leverage a robust economic landscape with a GDP of $108 billion,
                reflecting a flourishing market ripe for lucrative investment
                opportunities.
              </p>
            </div>
          </div>
          <p></p>
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

      <div className="discoverafrica mt-3">
        <div className="col-12">
          <div className="row">
            <div className="col-12 pb-4 bg-gold ">
              <h1 className="text-white mt-4 invest-container">Discover Africa</h1>
            </div>
            <div className="col-lg-5 col-sm-12 p-0 bg-gold py-auto invest-container">
              <div className="bg-white pb-3 rounded m-l-50">
                <form className="d-flex p-3" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>

                <div id="scroll">
                  <div class="contain">
                    <img src={con1} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con2} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con3} alt="flag" id="flag" />
                    <p id="name">Morocco</p>
                  </div>

                  <div class="contain">
                    <img src={con4} alt="flag" id="flag" />
                    <p id="name">Ghana</p>
                  </div>

                  <div class="contain">
                    <img src={con5} alt="flag" id="flag" />
                    <p id="name">Kenya</p>
                  </div>

                  <div class="contain">
                    <img src={con6} alt="flag" id="flag" />
                    <p id="name">Libya</p>
                  </div>

                  <div class="contain">
                    <img src={con7} alt="flag" id="flag" />
                    <p id="name">Mali</p>
                  </div>

                  <div class="contain">
                    <img src={con8} alt="flag" id="flag" />
                    <p id="name">Nigera</p>
                  </div>

                  <div class="contain">
                    <img src={con9} alt="flag" id="flag" />
                    <p id="name">Senegal</p>
                  </div>

                  <div class="contain">
                    <img src={con10} alt="flag" id="flag" />
                    <p id="name">Sudan</p>
                  </div>

                  <div class="contain">
                    <img src={con12} alt="flag" id="flag" />
                    <p id="name">Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 p-0 bg-gold">
              <img src={discover} className="img-fluid p-5 w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="crafting mb-50" >
        <div className="col-12 ">
          <img
            src={banner}
            className="img-fluid h-100 w-100 position-absolute"
          />
          <div className="crafting-content position-relative p-5 text-white">
            <h1 class="mb-5">
              Crafting Tomorrow's
              <br /> Success Stories Today
            </h1>
            <p className="crafting-text mt-5">
              <span className="crafing-head">-human Captial:</span> investing in
              Africa's human capital promises access to a<br />
              dynamic,rapidly growing workforce primed for innovation
            </p>

            <p className="crafting-text mt-5">
              <span className="crafing-head">-Natural Resources:</span> Africa's
              rich natural resources offer lucrative
              <br />
              opportunities for sustainable extraction and value-added
              processing.
            </p>

            <p className="crafting-text mt-5">
              <span className="crafing-head">-Finance:</span> Africa's expanding
              financial sector presents unique investment
              <br />
              prospects in fintech and inclusive banking services.
            </p>

            <p className="crafting-text mt-5">
              <span className="crafing-head">-Infrastructure:</span> Investing
              in Africa's infrastructure development is key to
              <br />
              unlocking economic potential and ensuring high-yield returns.
            </p>
          </div>
        </div>
      </div>

      <div className="success p-5 bg-blue mt-3">
        <div className="col-12 mt-3">
          <h1 className="mb-5 font-gold mt-5">Success Stories</h1>
        </div>

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
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
                        I found more than a continent; I discovered a journey of
                        opportunity. With perseverance, I turned challenges into
                        triumphs, building a successful venture from the ground
                        up. Africa's dynamic landscape fueled my ambition, and
                        today, I stand as a testament to the boundless
                        possibilities this continent offers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
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
                        I found more than a continent; I discovered a journey of
                        opportunity. With perseverance, I turned challenges into
                        triumphs, building a successful venture from the ground
                        up. Africa's dynamic landscape fueled my ambition, and
                        today, I stand as a testament to the boundless
                        possibilities this continent offers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
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
                        I found more than a continent; I discovered a journey of
                        opportunity. With perseverance, I turned challenges into
                        triumphs, building a successful venture from the ground
                        up. Africa's dynamic landscape fueled my ambition, and
                        today, I stand as a testament to the boundless
                        possibilities this continent offers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-12 ready text-center py-5">
        <h1 className="text-white fw-bold mt-5">READY TO GET STARTED?</h1>
        <p className="text-white mt-4">
          Invest in the future of Africa by signing up today!
        </p>
        <button className="btn btn-success mt-5 px-3 py-2 footer-btn" onClick={navigatetoRegister}>SIGN UP</button>
      </div>

      <div className="col-12 p-4 bg-green">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div className="social text-white">
              <div className="media mt-3">
                <img src={fb} className="social-media-img me-3" />
                <span>Facebook</span>
              </div>
              <div className="media mt-3">
                <img src={insta} className="social-media-img me-3" />
                <span>Instagram</span>
              </div>
              <div className="media mt-3">
                <img src={x} className="social-media-img me-3" />
                <span>X</span>
              </div>
              <div className="media mt-3">
                <img src={youtube} className="social-media-img me-3" />
                <span>Youtube</span>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12 my-auto">
            <div className="address float-end ">
              <div className="mt-3">
                <p className="mt-4">Global IT Park1188-2, Urusa, Minami</p>

                <p className="mt-4">UonumaNiigata 9497302 Japan</p>

                <p className="mt-4">Tel: (+81)25-788-0665</p>

                <p className="mt-4">Email:info@adam-i.jp</p>

                <p className="copy mt-4">
                  Copyright ©2023 Invest Africa. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
