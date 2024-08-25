import "../Agriculture/Agriculture.css"
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
import agimg from "../../assets/agri/ag.png";
import con12 from "../../assets/country12.jpg";
import bt from "../../assets/industry/bt.png"
import React, { useState, useEffect } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Agriculture() {
   


    // (done)TODO: Top heading not matching with Figma
    // (done)TODO: subheading missing
    // (done)TODO: last view profile button on page is not clickable because "Go to top" button is overlapping

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); 
      const toggleVisibility = () => {
        if (window.pageYOffset > 800) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };


    return (
        <main class="">
            <div class="p-4 text-start ag-banner">
                <div class="">
                    <h1 class="text-white country-banner-head mb-5">Agriculture</h1>
                    <p className="banner-text my-3 text-white">
                    Agriculture is the backbone of<br/> Africa's economy and development
            </p>
                </div>
            </div>

            <div className="col-12 mt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="px-3 py-4 shadow-lg invest-caro" >
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
                                        items: 3, // Change the number of items displayed based on the screen width
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
                    <div className="col-6">
                        <div className="px-3 py-4 shadow-lg invest-caro mb-50" s >
                            <div className="col-12 mb-4">
                                <h1>Top Countries</h1>
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
                                        items: 3, // Change the number of items displayed based on the screen width
                                    },
                                }}
                            >
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con1} className="img-fluid industry-img" />
                                        <p className="mt-2">Nigeria</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con2} className="img-fluid industry-img" />
                                        <p className="mt-2">Morocco</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con3} className="img-fluid industry-img" />
                                        <p className="mt-2">Egypt </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con4} className="img-fluid industry-img" />
                                        <p className="mt-2">Ghana</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con5} className="img-fluid industry-img" />
                                        <p className="mt-2">Kenya</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con6} className="img-fluid industry-img" />
                                        <p className="mt-2">Libya</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con7} className="img-fluid industry-img" />
                                        <p className="mt-2">Mali</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con8} className="img-fluid industry-img" />
                                        <p className="mt-2">Nigera</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con9} className="img-fluid industry-img" />
                                        <p className="mt-2">Senegal</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con10} className="img-fluid industry-img" />
                                        <p className="mt-2">Sudan</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="industry text-center">
                                        <img src={con12} className="img-fluid industry-img" />
                                        <p className="mt-2">Ethiopia</p>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 p-5">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <p className="text-center filter">Filter</p>
                        </div>
                        <div className="countries-con border p-3 rounded">
                            <p className="text-center">COUNTRIES</p>
                            <div>
                                <div class="d-flex w-100 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon-style" id="bise" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>
                                    <input type="text" className="w-100 px-5 py-2 " id="input" placeholder="Search" value="" />
                                </div>
                                <div className="scroll-min">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Nigera</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                                        <label class="form-check-label" for="exampleCheck2">Keyna</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck3" />
                                        <label class="form-check-label" for="exampleCheck3">Morocco</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck4" />
                                        <label class="form-check-label" for="exampleCheck4">Mali</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck5" />
                                        <label class="form-check-label" for="exampleCheck5">Sudan</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck6" />
                                        <label class="form-check-label" for="exampleCheck6">Ghana</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck7" />
                                        <label class="form-check-label" for="exampleCheck7">Zambia</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck8" />
                                        <label class="form-check-label" for="exampleCheck8">Zimbabwe</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck9" />
                                        <label class="form-check-label" for="exampleCheck9">Togo</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck10" />
                                        <label class="form-check-label" for="exampleCheck10">Uganda</label>
                                    </div>
                                    <div className="text-center">
                                        <p className="btn mb-0 text-center text-primary"><small>View more</small></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="countries-con border p-3 rounded mt-4">
                            <p className="text-center">SUB CATEGORIES</p>
                            <div>
                                <div class="d-flex w-100 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon-style" id="bise" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>
                                    <input type="text" className="w-100 px-5 py-2 " id="input" placeholder="Search" value="" />
                                </div>
                                <div className="scroll-min">
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck11" />
                                        <label class="form-check-label" for="exampleCheck11">Crop Production</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck12" />
                                        <label class="form-check-label" for="exampleCheck12">Fisheries </label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck13" />
                                        <label class="form-check-label" for="exampleCheck13">Forestry</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck14" />
                                        <label class="form-check-label" for="exampleCheck14">Livestock</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck15" />
                                        <label class="form-check-label" for="exampleCheck15">Services</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck16" />
                                        <label class="form-check-label" for="exampleCheck16">Machinery and Equipment</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck17" />
                                        <label class="form-check-label" for="exampleCheck17">Sub category</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck18" />
                                        <label class="form-check-label" for="exampleCheck18">Sub category</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck19" />
                                        <label class="form-check-label" for="exampleCheck19">Sub category</label>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck20" />
                                        <label class="form-check-label" for="exampleCheck20">Sub category</label>
                                    </div>
                                    <div className="text-center">
                                        <p className="btn mb-0 text-center text-primary"><small>View more</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="countries-con border p-3 rounded mt-4">
                            <p className="text-center">COMPANY SIZE</p>
                            <div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck21" />
                                    <label class="form-check-label" for="exampleCheck21">Small</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck22" />
                                    <label class="form-check-label" for="exampleCheck22">Medium </label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck23" />
                                    <label class="form-check-label" for="exampleCheck23">Large</label>
                                </div>
                            </div>
                        </div>

                        <div className="countries-con border p-3 rounded mt-4">
                            <p className="text-center">NUMBER OF EMPLOYEES</p>
                            <div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck24" />
                                    <label class="form-check-label" for="exampleCheck24">0~50</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck25" />
                                    <label class="form-check-label" for="exampleCheck25">50~100 </label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck26" />
                                    <label class="form-check-label" for="exampleCheck26">100~250</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck27" />
                                    <label class="form-check-label" for="exampleCheck27">250~500</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck28" />
                                    <label class="form-check-label" for="exampleCheck28">500~1000 </label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck29" />
                                    <label class="form-check-label" for="exampleCheck29">1000~2000</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck30" />
                                    <label class="form-check-label" for="exampleCheck30">2000+</label>
                                </div>
                            </div>
                        </div>

                        <div className="countries-con border p-3 rounded mt-4">
                            <p className="text-center">YEAR ESTABLISHED</p>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-2 my-auto">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck31" />
                                    </div>
                                    <div className="col-5">
                                        <label for="exampleInputEmail1" class="form-label mb-2">From</label>
                                        <input type="number" class="form-control" />
                                    </div>
                                    <div className="col-5">
                                        <label for="exampleInputEmail1" class="form-label mb-2">To</label>
                                        <input type="number" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="countries-con border p-3 rounded mt-4">
                            <p className="text-center">OTHER INDUSTRIES</p>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-2 my-auto">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    </div>
                                    <div className="col-10">
                                        ....
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-9 mb-5">
                        <div className="ag-card border rounded">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ag-card border rounded mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <img src={agimg} className="img-fluid h-100"/>
                                </div>
                                <div className="col-6 my-auto">
                                    <div className="ag-details">
                                        <p className="fw-bold">Company Name</p>
                                        <p className="mt-4">This is a Company description box to describe the company. This is a Company description box to describe the company. This is a Company description box to describe the company.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="ag-details pt-4 pe-4">
                                        <p className="text-end fw-semibold">Country<br/>
                                            Company Address 123<br/>
                                            Other important information<br/>
                                            Other important information<br/>
                                            Other important information</p>
                                        <div className="text-end">
                                            <button className="btn view-btn mb-3 mt-2">View profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
      {isVisible && (
        <button onClick={scrollToTop} className="backToTopButton">
         <img src={bt} className="img-fluid" height={45}/>
        </button>
      )}
    </div>

        </main>
    );
}

export default Agriculture;