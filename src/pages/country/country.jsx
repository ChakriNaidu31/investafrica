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
import React, { useState } from 'react';
import { PieChart, Pie, Tooltip } from "recharts";
import Footer from "../../component/footer";

function Country() {


    // TODO: Country background color not matching
    // TODO: Overview tab some inbetween lines are missing
    // TODO: Investment Support and Resources image missing and design not matching
    // (done) TODO: Can you move footer content to a separate component and use that component in both places?
    // TODO: Api integrations
    // TODO: Imports and Exports background image missing
    // TODO: Import Substitution background image missing
    // TODO: Nigeria's Commitment to Regional Trade design not matching with Figma
    // TODO: READY TO GET STARTED should be changed as per Figma design
    // TODO: Top search bar missing in Navbar


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
                                        <div className="col-sm-12 col-lg-6 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>Land Area</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>Nigeria offers a substantial land area of 923,769 square kilometers.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-6 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>Population</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>As of 2023, Nigeria’s population of 230.8 million promises a vast consumer base.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-6 p-5">
                                            <div className="country-overview-detail">
                                                <div className="country-overview-head">
                                                    <p>GDP</p>
                                                </div>
                                                <div className="country-overview-content mt-5">
                                                    <p>Nigeria’s GDP stood at $400 Billion USD in 2022, indicating a significant economic foorprint.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-6 p-5">
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
                                    <img src={nigeria} className="img-fluid" />
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
                    <div className="tab-pane fade" id="pills-economy" role="tabpanel" aria-labelledby="pills-economy-tab" tabIndex="0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <div className="bg-ce">
                                        <h1 className="country-eco-head mb-0 py-4">ECONOMY</h1>
                                    </div>
                                </div>

                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading ">Insights</h1>
                                </div>

                                <div className="col-12  rounded px-5">
                                    <OwlCarousel
                                        className="owl-theme country bg-ce p-2 rounded"
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
                                                items: 4.5, // Change the number of items displayed based on the screen width
                                            },
                                        }}
                                    >
                                        <div className="item">
                                            <div className="country-card">
                                                <img src={gdp} alt="Avatar" className="country-card-img" height={250} />
                                                <p className="text-center eco-card-text">GDP</p>

                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={gdp} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text">GDP Growth</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={gdpcapita} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text">GDP Per Capita</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={fdi} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text">FDI Net Inflow</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={fdi} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text">FDI Net Inflow</p>

                                            </div>
                                        </div>

                                    </OwlCarousel>
                                </div>

                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading  ">Distribution of GDP Across<br /> Economic Sectors</h1>
                                </div>
                                <div className="col-7">

                                    <PieChart width={1000} height={600}>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={data01}
                                            cx={400} // Adjusted x-coordinate for spacing
                                            cy={300} // Adjusted y-coordinate for spacing
                                            outerRadius={200} // Larger radius for bigger pie chart
                                            label
                                            labelLine={false} // Optionally hide label lines
                                        />

                                        <Tooltip
                                            formatter={(value, name, props) => [`${value}`, `${props.payload.name}`]}
                                        />
                                    </PieChart>


                                </div>
                                <div className="col-5 my-auto">
                                    <div>
                                        {data01.map((item) => (
                                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <div
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        backgroundColor: item.fill,
                                                        marginRight: '10px',
                                                    }}
                                                ></div>
                                                <span style={{ fontSize: '25px' }}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="p-5 bg-db">
                                        <h1 className="text-center text-white">Imports and Exports </h1>
                                        <h3 className="font-gold text-center fw-bold mt-4">Nigeria Robust Trade Growth</h3>
                                        <p className="country-inves text-center mt-4">In 2021, Nigeria's Intra-African trade surged hy 21.75 to US$9.65 billion, <br />
                                            elevatting its status as the 3rd largest Intra-African trading nation.<br />
                                            Despite crude oil dominating exports to African partners,only 3.3% of<br />
                                            nigeria's total imports came from the continent.</p>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-outline-white text-center mx-auto px-4 py-2">LEARN MORE</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading ">Major Imports</h1>
                                </div>

                                <div className="col-12 text-center px-5 my-4">
                                    <div className="text-center d-flex justify-content-center">
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 11.3 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Refined Petroleum</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 3.32 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Wheat</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 2.42 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Cars</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 972 M
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Packaged medicaments</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 934 M
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Broadcasting instuments</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-7">
                                    <PieChart width={1000} height={600}>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={data02}
                                            cx={400}
                                            cy={300}
                                            outerRadius={200}
                                            fill="#8884d8"
                                            label
                                        />

                                        <Tooltip />
                                    </PieChart>

                                </div>
                                <div className="col-5 my-auto">
                                    <div>
                                        {data02.map((item) => (
                                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <div
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        backgroundColor: item.fill,
                                                        marginRight: '10px',
                                                    }}
                                                ></div>
                                                <span style={{ fontSize: '25px' }}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="p-5 bg-db">
                                        <h1 className="text-center text-white">Import Substitution </h1>
                                        <h3 className="font-gold text-center fw-bold mt-4">Backward integration Option</h3>
                                        <p className="country-inves text-center mt-4">The Central Bank of Nigeria (CBN) in July 2019 rolled<br />
                                            out a new policy to encourage backward integration<br />
                                            for the local production of select items.<br /></p>
                                    </div>

                                </div>

                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading ">Major Exports</h1>
                                </div>

                                <div className="col-12 text-center">
                                    <div className="text-center d-flex justify-content-center">
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 41.8 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Crude Petroleum</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 8.52 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Petroleum Gas</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 1.25 B
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Special Purpose Ships</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 779 M
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Cocoa Beans</p>

                                        </div>
                                        <div className="col-2 text-center">
                                            <button className="country-circle ">
                                                $ 667 M
                                            </button>
                                            <p className="country-circle-content mt-3 px-5">Refined Petroleum</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-7">
                                    <PieChart width={1500} height={600}>

                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={data03}
                                            cx={400}
                                            cy={300}
                                            outerRadius={200}

                                            fill="#8884d8"
                                            label
                                        />
                                        <Tooltip />
                                    </PieChart>

                                </div>
                                <div className="col-5 my-auto">
                                    <div>
                                        {data03.map((item) => (
                                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <div
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        backgroundColor: item.fill,
                                                        marginRight: '10px',
                                                    }}
                                                ></div>
                                                <span style={{ fontSize: '25px' }}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <div className="pt-5 bg-db">
                                        <h1 className="text-start font-gold px-5">Nigeria's Commitment to <br />Regional Trade </h1>
                                        <div className="crafting-content  p-5 text-white">
                                            <h1 className="mb-5">
                                                Crafting Tomorrow's
                                                <br /> Success Stories Today
                                            </h1>
                                            <p className="crafting-text mt-5">
                                                <span className="crafing-head">-Nigeria's Diplomatic Alliances:</span> Nigeria is part of two Regional Economic Communities (RECs) -<br />
                                                the Economic Community of West Africa (ECOWAS) and the Community of Sahel-Saharan<br /> States (CEN-SAD). Nigeria deposited its instrument of ratification and schedule of tariff<br /> concessions, along with other ECOWAS member states.
                                            </p>

                                            <p className="crafting-text mt-5">
                                                <span className="crafing-head">-ECOWAS Trade Commitments:</span> As of 2020, the African Union recognizes 8 Regional Economic<br /> Communities, with Nigeria being a member of two: the Community of Sahel-Saharan States<br /> (CEN-SAD) and the Economic Community of West African States (ECOWAS). These<br /> communities foster regional trade through various agreements, with ECOWAS specifically<br /> having multiple trade instruments and engaging in multilateral, continental, and bilateral<br /> trade agreements at both regional and international levels.
                                            </p>

                                            <p className="crafting-text mt-5">
                                                <span className="crafing-head">-AFCFTA Barrier Resolution:</span> The African Continental Free Trade Area (AfCFTA) has<br /> implemented an online reporting, monitoring, and elimination mechanism for non-tariff<br /> barriers to trade (NTBS). Through the platform at https://tradebarriers.africa, individuals and<br /> businesses can report obstacles encountered during trade within Africa, such as delays, ad hoc<br /> fees, document requirements, and product standards. This mechanism is inclusive, welcoming<br /> participation from all sectors, including small, medium, and large companies, informal traders,<br /> as well as women and youth business operators. Watch an introductory video about the<br /> initiative at https://tradebarriers.africa/about.

                                            </p>

                                            <p className="crafting-text mt-5">
                                                <span className="crafing-head">-Trade Report:</span> Leading intra-African trading nation in 2021:
                                                <br />
                                                1. South Africa<br />
                                                2.DRC (laraest intra-African tradina nation in Central Africa)
                                            </p>


                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-connect" role="tabpanel" aria-labelledby="pills-connect-tab" tabIndex="0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <div className="bg-ce">
                                        <h1 className="country-eco-head py-4">Connectivity</h1>
                                    </div>
                                </div>
                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading ">Airports & Seaports</h1>
                                </div>
                                <div className="col-12 px-5 my-4 text-center">
                                    <img src={ship} className="img-fluid" />
                                </div>
                                <div className="col-12 px-5 my-4">
                                    <h1 className=" country-heading ">Nigeria’s standing in Africa</h1>
                                </div>


                                <div className="col-12  px-5 rounded  mb-5">
                                    <OwlCarousel
                                        className="owl-theme country  bg-ce p-2 rounded"
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
                                                items: 4.5, // Change the number of items displayed based on the screen width
                                            },
                                        }}
                                    >
                                        <div className="item">
                                            <div className="country-card">
                                                <img src={gdp} alt="Avatar" className="country-card-img" height={250} />
                                                <p className="text-center eco-card-text" id="cont">GDP Growth rate in African Countries in 2021</p>

                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={gdp} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text" id="cont">African Countries with highest GDPs, 2021</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={gdpcapita} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text" id="cont">Highest Per Capita GDPs in</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={fdi} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text" id="cont">FDI Net Inflow in Africa, 2022</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="country-card" >
                                                <img src={fdi} className="country-card-img" alt="..." height={250} />
                                                <p className="text-center eco-card-text" id="cont">FDI Net Inflow</p>

                                            </div>
                                        </div>

                                    </OwlCarousel>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Footer></Footer>
        </main>
    );
}

export default Country;

