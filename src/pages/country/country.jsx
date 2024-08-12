import "../country/country.css"
import countrymap from "../../assets/country/countrymap.png"
import manfacture from "../../assets/country/manfacture.png"
import agriculture from "../../assets/country/agriculture.png"
import retail from "../../assets/country/retail.png"
import services from "../../assets/country/services.png"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Country() {
    return (
        <main class="">
            <div class="p-4 text-body-emphasis bg-body-secondary country-banner">
                <div class="">
                    <h1 class="text-white country-banner-head mb-5">Nigeria</h1>
                    <p class="country-banner-text mt-5 text-white">
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
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab" tabindex="0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
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
                                <div className="col-sm-12 col-lg-6">
                                    <img src={countrymap} className="img-fluid w-100" />
                                </div>


                                <div className="col-12 pb-4 country-bg-green">
                                    <h1 className=" mt-4">LEADING SECTORS</h1>
                                </div>


                                <div className="col-12 bg-secondary p-3 rounded country">
                                    <OwlCarousel
                                        className="owl-theme"
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
                                            <div class="country-card card" >
                                                <img src={agriculture} class="card-img-top" alt="..." />
                                                <div class="country-card-body card-body">
                                                    <h5 class="country-card-title card-title">Agriculture</h5>
                                                    <p class="country-card-text card-text">Agriculture in Africa is the backbone of its economy, employing about 60% of the labor force and contributing significantly to GDP.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div class="country-card" >
                                                <img src={manfacture} class="card-img-top" alt="..." />
                                                <div class="country-card-body">
                                                    <h5 class="country-card-title">Manufacture</h5>
                                                    <p class="country-card-text">African manufacturing drives job growth and diversification in textiles, food processing, automotive, and electronics with infrastructure and tech investments.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div class="country-card" >
                                                <img src={services} class="card-img-top" alt="..." />
                                                <div class="country-card-body">
                                                    <h5 class="country-card-title">Services</h5>
                                                    <p class="country-card-text">Services thrive in finance, telecommunication, tourism, tech, supported by infrastructure, offering vast opportunities for growth.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div class="country-card" >
                                                <img src={retail} class="card-img-top" alt="..." />
                                                <div class="country-card-body">
                                                    <h5 class="country-card-title">Retail</h5>
                                                    <p class="country-card-text">African retail sector expands, offering growth in consumer goods, e-commerce, and brick-and-mortar stores, supported by infrastructure and digital advancements.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div class="country-card" >
                                                <img src={retail} class="card-img-top" alt="..." />
                                                <div class="country-card-body">
                                                    <h5 class="country-card-title">ICT</h5>
                                                    <p class="country-card-text">ICT in Africa is the backbone of its economy, employing about 60% of the labor force and contributing significantly to GDP.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </OwlCarousel>
                                </div>


                                <div className="col-12 pb-4 country-bg-green">
                                    <h1 className=" mt-4">WHY NIGERIA?</h1>
                                </div>


                                <div className="col-12 rounded country">
                                    <OwlCarousel
                                        className="owl-theme"
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

                                <div className="col-12">
                                    <h1>Investment Support </h1>
                                </div>
                            </div>
                        </div>








                    </div>
                    <div class="tab-pane fade" id="pills-economy" role="tabpanel" aria-labelledby="pills-economy-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="pills-connect" role="tabpanel" aria-labelledby="pills-connect-tab" tabindex="0">...</div>
                </div>
            </div>
        </main>
    );
}

export default Country;

