import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import { useNavigate } from "react-router-dom";
function Footer() {
    const navigate = useNavigate();
    const navigatetoRegister = () => {
        navigate("/signup");
      };
      
    return (
        <div>
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
                <p><b>Adam Innovations Co., Ltd</b></p>
                <p className="">Global IT Park1188-2, Urusa, Minami</p>

                <p className="">UonumaNiigata 9497302 Japan</p>

                <p className="">Tel: (+81)25-788-0665</p>

                <p className=""><a className="text-white text-decoration-none" href="mailto:info@adam-i.jp">Email:info@adam-i.jp</a></p>

                <p className="copy mt-4">
                  Copyright ©2024 Invest Africa. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
     );
}

export default Footer;