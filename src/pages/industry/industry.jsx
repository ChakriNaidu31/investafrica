import "../industry/industry.css"
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
import inds1 from "../../assets/industry/ind1.png"
import inds2 from "../../assets/industry/ind2.png"
import inds3 from "../../assets/industry/ind3.png"
import inds4 from "../../assets/industry/ind4.png"
import inds5 from "../../assets/industry/ind5.png"
import inds6 from "../../assets/industry/ind6.png"
import bt from "../../assets/industry/bt.png"
import React, { useState, useEffect } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function Industry() {

  // (done) TODO: Top search bar missing in Navbar
  // (done) TODO: Investing in Tomorrow design not matching

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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

      <div class="p-4 text-center  industry-banner">
        <div class="">
          <h1 class="text-white country-banner-head mb-5">Industries</h1>

        </div>
      </div>

      <div className="px-3 py-4 shadow-lg invest-caro" id="f-owl">
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


      <div className="px-3 py-4 shadow-lg invest-caro mb-50" id="s-owl" >
        <div className="col-12 mb-4">
          <h1>Search by Countries</h1>
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
              <img src={con11} className="img-fluid industry-img" />
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
      <div className="col-12">
        <div className="p-5 inv-tmr text-center">
          <h1 className="text-center text-white my-5 indust-title">Investing in Tomorrow </h1>
          <div className="indust-margin">
          <p className="country-inves text-start mt-5 mb-5 mx-5 px-5 indust-text">The future of Africa's industries looks promising, with ongoing investments in infrastructure, technology, and education. These investments are expected to drive further growth and development, positioning Africa as a significant player in the global economy.</p>
          </div>
          
        </div>

      </div>
      <div className="col-12 p-5 mt-5 mb-5">
        <div className="row">
          <div className="col-4 ">
            <div className="br rounded">
              <img src={inds1} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head">Construction</p>
                <p className="ind-des mb-0">Africa's construction sector is rapidly expanding, fueling infrastructure development.</p>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="br rounded">
              <img src={inds2} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head">Transportation</p>
                <p className="ind-des mb-0">Africa's transportation industry is rapidly evolving, boosting connectivity and trade.</p>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="br rounded">
              <img src={inds3} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head">Renewable Energy</p>
                <p className="ind-des mb-0">Africa's renewable energy sector is growing quickly, driving sustainable development.</p>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4 ">
            <div className="br rounded">
              <img src={inds4} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head">Healthcare</p>
                <p className="ind-des mb-0">Africa's healthcare industry is expanding, improving access and quality of medical services.</p>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4 ">
            <div className="br rounded">
              <img src={inds5} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head ">Education</p>
                <p className="ind-des mb-0">Africa's education sector is progressing, enhancing opportunities for learning and development.</p>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4 ">
            <div className="br rounded">
              <img src={inds6} className="w-100" />
              <div className="p-3 inds-card">
                <p className="ind-head">Retail</p>
                <p className="ind-des mb-0">Africa's retail industry is thriving, meeting diverse consumer needs and driving economic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isVisible && (
          <button onClick={scrollToTop} className="backToTopButton">
            <img src={bt} className="img-fluid" height={45} />
          </button>
        )}
      </div>
    </main>

  );
}

export default Industry;