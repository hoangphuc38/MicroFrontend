import { useNavigate } from "react-router-dom";
import BannerImg from "../../src/asset/images/Banner.png";
import SportImg from "../../src/asset/images/darwin.jpg";
import WinterImg from "../../src/asset/images/winter-copy.png";
import '../pages/home.css'

export default function Home() {
  const navigate = useNavigate(); // Hook điều hướng

  return (
    <div className="container">
      {/* banner */}
      <div className="banner">
        <img src={BannerImg} className="bannerImg" alt="Banner" />
      </div>
      
      {/* 2 tab */}
      <div className="category_container">
        <h3>Choose your favor</h3>
       
        <div className="tab_container">
          {/* sport */}
          <div className="tabItem" onClick={() => navigate("/sport")}>
            <img className="tabImg" src={SportImg} alt="Sport" />
            <div className="sportTab">
              <p>Sport</p>
            </div>
          </div>
          
          {/* winter */}
          <div className="tabItem winterItem" onClick={() => navigate("/winter")}>
            <img className="tabImg" src={WinterImg} alt="Winter" />
            <div className="winterTab">
              <p>Winter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}