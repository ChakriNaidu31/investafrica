import "../country/country.css"
import manfacture from "../../assets/country/manfacture.png"
import agriculture from "../../assets/country/agriculture.png"
import retail from "../../assets/country/retail.png"
import { useNavigate } from "react-router-dom";
import gdp from "../../assets/country/gdp.png"
import fdi from "../../assets/country/fdi.png"
import gdpcapita from "../../assets/country/gdpcapita.png"
import services from "../../assets/country/services.png"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import x from "../../assets/x.png";
import ship from "../../assets/industry/ship.png";
import nigeria from "../../assets/africacountries/nigeria.svg";
import youtube from "../../assets/youtube.png";
import React, { useState,useEffect } from 'react';
import { PieChart, Pie, Tooltip } from "recharts";
import Footer from "../../component/footer";

function Country() {


    // (done)TODO: Country background color not matching
    // (done)TODO: Overview tab some inbetween lines are missing
    // (unable to take img)TODO: Investment Support and Resources image missing and design not matching
    // (done)TODO: Can you move footer content to a separate component and use that component in both places?
    // TODO: Api integrations
    // (unable to take img)TODO: Imports and Exports background image missing
    // (unable to take img)TODO: Import Substitution background image missing
    // (done)TODO: Nigeria's Commitment to Regional Trade design not matching with Figma
    // (done)TODO: READY TO GET STARTED should be changed as per Figma design
    // TODO: Top search bar missing in Navbar

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
      }, []);


    const data01 = [
        { value: 44.4, name: 'Agriculture', fill: '#006401' },
        { value: 31.9, name: 'Industry', fill: '#fe6347' },
        { value: 23.7, name: 'Service', fill: '#87ceea' },
    ];

    // Data for the second pie chart with 10 entries
    const data02 = [
        { value: 38.4, name: 'China', fill: '#ff9999' },
        { value: 14.3, name: 'Belgium', fill: '#66b2ff' },
        { value: 10.0, name: 'India', fill: '#99ff99' },
        { value: 9.7, name: 'Netherlands', fill: '#ffcc99' },
        { value: 7.9, name: 'United States', fill: '#ffd700' },
        { value: 5.7, name: 'Norway', fill: '#ff69b4' },
        { value: 4.5, name: 'Ukraine', fill: '#7fffd4' },
        { value: 3.2, name: 'France', fill: '#b0e0e6' },
        { value: 3.2, name: 'Germany', fill: '#ff6347' },
        { value: 3.1, name: 'Brazil', fill: '#00fa9a' }
    ];

    // Data for the third pie chart with 10 entries (different values)
    const data03 = [
        { value: 19.40, name: 'Spain', fill: '#7fff00' },
        { value: 21.49, name: 'India', fill: '#ff6347' },
        { value: 5.43, name: 'Canada', fill: '#00ffff' },
        { value: 5.51, name: 'United States', fill: '#ffa07a' },
        { value: 5.99, name: 'China', fill: '#dda0dd' },
        { value: 6.19, name: 'South Africa', fill: '#ffff66' },
        { value: 6.52, name: 'Namibia', fill: '#ffa07a' },
        { value: 7.08, name: 'Indosea', fill: '#87cefa' },
        { value: 10.46, name: 'Netherland', fill: '#ff69b4' },
        { value: 11.93, name: 'France', fill: '#ffd700' }
    ];



    const navigate = useNavigate();
    const navigatetoRegister = () => {
        navigate("/signup");
    };



    return (
        <main className="">
            <div className="p-4 text-body-emphasis bg-body-secondary country-banner">
                <div className="">
                    <h1 className="text-white country-banner-head mb-5">Nigeria</h1>
                    <p className="country-banner-text mt-5 text-white">
                        Unlocking Opportunities in
                        <br /> Africa’s Largest Economy
                    </p>
                </div>
            </div>
            <div className="col-12">
                <ul className="nav country-nav-pills mb-3" id="pills-tab" role="tablist" style={{ width: '100%', display: 'flex' }}>
                    <li className="country-nav-item" role="presentation" style={{ width: '33.33%', textAlign: 'center' }}>
                        <button
                            className="country-nav-link active"
                            id="pills-overview-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-overview"
                            type="button"
                            role="tab"
                            aria-controls="pills-overview"
                            aria-selected="true"
                            style={{ width: '100%' }}
                        >
                            Overview
                        </button>
                    </li>
                    <li className="country-nav-item" role="presentation" style={{ width: '33.33%', textAlign: 'center' }}>
                        <button
                            className="country-nav-link"
                            id="pills-economy-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-economy"
                            type="button"
                            role="tab"
                            aria-controls="pills-economy"
                            aria-selected="false"
                            style={{ width: '100%' }}
                        >
                            Economy
                        </button>
                    </li>
                    <li className="country-nav-item" role="presentation" style={{ width: '33.33%', textAlign: 'center' }}>
                        <button
                            className="country-nav-link"
                            id="pills-connect-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-connect"
                            type="button"
                            role="tab"
                            aria-controls="pills-connect"
                            aria-selected="false"
                            style={{ width: '100%' }}
                        >
                            Connectivity
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab" tabIndex="0">
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-sm-12 col-lg-6 p-4 pt-0">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>Land Area</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>Nigeria offers a substantial land area of 923,769 square kilometers.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 my-auto text-center">
                                            <div className="line border">c</div>
                                        </div>
                                        <div className="col-sm-12 col-lg-5 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>Population</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>As of 2023, Nigeria’s population of 230.8 million promises a vast consumer base.</p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-sm-12 col-lg-5 px-5">
                                        <div className="line hr border">c</div>
                                        </div>
                                        <div className="col-lg-2 my-auto text-center">
                                            {/* <div className="line border">c</div> */}
                                        </div>
                                        <div className="col-sm-12 col-lg-5 px-5">
                                        <div className="line hr border">c</div>
                                        </div>







                                        <div className="col-sm-12 col-lg-5 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>GDP</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>Nigeria’s GDP stood at $400 Billion USD in 2022, indicating a significant economic foorprint.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 my-auto text-center">
                                            <div className="line border">c</div>
                                        </div>
                                        <div className="col-sm-12 col-lg-5 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>Labor Force</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>With a labor force of 126 million in 2022, Nigeria boasts a substantial workforce.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 p-4 my-auto pt-0">
                                    <img src={nigeria} className="img-fluid bg-f" />
                                </div>


                                <div className="col-12 px-5">
                                    <h1 className=" my-4 country-heading">LEADING SECTORS</h1>
                                </div>


                                <div className="col-12 bg p-5 py-4 rounded ">
                                    <div className="bg-ce p-3 rounded">
                                        <OwlCarousel
                                            className="owl-theme country bg-ce"
                                            loop
                                            margin={10}
                                            nav
                                            dots={false}
                                            items={6} // Show 6 items at a time
                                            responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                600: {
                                                    items: 2,
                                                },
                                                1000: {
                                                    items: 4, // Change the number of items displayed based on the screen width
                                                },
                                            }}
                                        >
                                            <div className="item">
                                                <div className="country-card">
                                                    <img src={agriculture} alt="Avatar" className="country-card-img" />
                                                    <div className="country-card-container">
                                                        <h5 className="country-card-title">Agriculture</h5>
                                                        <p className="country-card-text mt-2">Agriculture in Africa is the backbone of its economy, employing about 60% of the labor force and contributing significantly to GDP.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <div className="country-card" >
                                                    <img src={manfacture} className="country-card-img" alt="..." />
                                                    <div className="country-card-container">
                                                        <h5 className="country-card-title">Manufacture</h5>
                                                        <p className="country-card-text">African manufacturing drives job growth and diversification in textiles, food processing, automotive, and electronics with infrastructure and tech investments.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="country-card" >
                                                    <img src={services} className="country-card-img" alt="..." />
                                                    <div className="country-card-container">
                                                        <h5 className="country-card-title">Services</h5>
                                                        <p className="country-card-text">Services thrive in finance, telecommunication, tourism, tech, supported by infrastructure, offering vast opportunities for growth.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="country-card" >
                                                    <img src={retail} className="country-card-img" alt="..." />
                                                    <div className="country-card-container">
                                                        <h5 className="country-card-title">Retail</h5>
                                                        <p className="country-card-text">African retail sector expands, offering growth in consumer goods, e-commerce, and brick-and-mortar stores, supported by infrastructure and digital advancements.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="country-card" >
                                                    <img src={retail} className="country-card-img" alt="..." />
                                                    <div className="country-card-container">
                                                        <h5 className="country-card-title">ICT</h5>
                                                        <p className="country-card-text">ICT in Africa is the backbone of its economy, employing about 60% of the labor force and contributing significantly to GDP.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </OwlCarousel>
                                    </div>

                                </div>


                                <div className="col-12 px-5 my-5">
                                    <h1 className=" country-heading ">WHY NIGERIA?</h1>
                                </div>


                                <div className="col-12 rounded px-5">
                                    <OwlCarousel
                                        className="owl-theme country"
                                        loop
                                        margin={10}
                                        nav
                                        dots={false}
                                        items={6} // Show 6 items at a time
                                        responsive={{
                                            0: {
                                                items: 1,
                                            },
                                            600: {
                                                items: 2,
                                            },
                                            1000: {
                                                items: 4, // Change the number of items displayed based on the screen width
                                            },
                                        }}
                                    >
                                        <div className="item text-center">
                                            <button className="country-circle ">
                                                LARGE CONSUMER MARKET
                                            </button>
                                            <p className="country-circle-content mt-5 px-5">Largest population in Africa. The burgeoning middle class is driving demands for a wide array of products and services.</p>

                                        </div>
                                        <div className="item text-center">
                                            <button className="country-circle ">
                                                ECONOMIC SIZE
                                            </button>
                                            <p className="country-circle-content mt-5 px-5">Largest economy in Africa, Nigeria offers a substantial market for businesses looking to expand.</p>

                                        </div>
                                        <div className="item text-center">
                                            <button className="country-circle ">
                                                NATURAL RESOURCES
                                            </button>
                                            <p className="country-circle-content mt-5 px-5">The country’s economy thrives on oil and gas, but holds untapped potential in agriculture, minerals, and renewable energy.</p>

                                        </div>
                                        <div className="item text-center">
                                            <button className="country-circle ">
                                                STRATEGIC LOCATION
                                            </button>
                                            <p className="country-circle-content mt-5 px-5">Situated in the West African coast, Nigeria can serve as an entry point to the African continent and a hub for regional trade.</p>

                                        </div>
                                        <div className="item text-center">
                                            <button className="country-circle ">
                                                LARGE CONSUMER MARKET
                                            </button>
                                            <p className="country-circle-content mt-5 px-5">Largest population in Africa. The burgeoning middle class is driving demands for a wide array of products and services.</p>

                                        </div>

                                    </OwlCarousel>
                                </div>

                                <div className="col-12 p-0">
                                    <div className="py-5 bg-db">
                                        <h1 className="text-center font-gold">Investment Support and Resources </h1>
                                        <p className="country-inves mt-4">Nigerian Investment Promotion Commission (NIPC): <br />
                                            The NIPC serves as your guide to investing in Nigeria.<br />
                                            They offer valuable insights,facilitate business<br />
                                            registration,and provide investment incentive.</p>
                                    </div>

                                </div>
                            </div>
                        </div>








                    </div>
              
                </div>
            </div>
            <div>
            <div className="col-12 ready text-center py-5">
        <h1 className="text-white fw-bold mt-5">CONTACT US</h1>
        <p className="text-white mt-4">
        Partner with us to build Prosperity for Nigeria.
        </p>
        <button className="btn btn-success mt-5 px-3 py-2 footer-btn con" onClick={navigatetoRegister}>CONTACT</button>
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
                  Copyright ©2024 Invest Africa. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        </main>
    );
}

export default Country;

