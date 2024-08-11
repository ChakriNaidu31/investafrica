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
function Home() {
  return (
    <div>
      <main class="">
        <div class="p-4 text-body-emphasis bg-body-secondary banner">
          <div class="">
            <h1 class="text-white banner-head">INVEST IN AFRICA</h1>
            <p class="banner-text my-3 text-white">
              Shaping Tomorrow Together,
              <br /> Invest in Africa's Potential.
            </p>
          </div>
        </div>
      </main>

      <div className="col-12 bg-green p-3">
        <div className="row">
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
                <h5 class="card-title text-center">WORLD OF AFRICA</h5>
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

      <div className="blog-section p-3">
        <div className="col-12 my-5">
          <h1>Why invest in africa</h1>
        </div>
        <div className="col-12">
          <div className="row">
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
        <div className="col-12 sm-d-g">
          <div className="row">
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
        <div className="col-12">
          <div className="row">
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

      <div className="px-3 py-4 shadow-lg ">
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

      <div className="discoverafrica p-3">
        <div className="col-12">
          <div className="row">
            <div className="col-12 pb-4 bg-gold">
              <h1 className="text-white mt-4">Discover Africa</h1>
            </div>
            <div className="col-lg-5 col-sm-12 p-0 bg-gold py-auto">
              <div className="bg-white m-3 pb-3 rounded">
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
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con4} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con5} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con6} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con7} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con8} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con9} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con10} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con11} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
                  </div>

                  <div class="contain">
                    <img src={con12} alt="flag" id="flag" />
                    <p id="name">Nigeria</p>
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

      <div className="crafting d-none">
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

      <div className="success p-5 bg-blue">
        <div className="col-12 ">
          <h1 className="mb-5 font-gold">Success Stories</h1>
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
        <button className="btn btn-success mt-5 px-3 py-2">SIGN IN</button>
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
