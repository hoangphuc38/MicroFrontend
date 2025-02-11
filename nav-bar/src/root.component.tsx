import "./root.component.css";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import logo from "../src/asset/images/Logo.png";
import logOut from "../src/asset/images/log-out.png";

export default function Root(props) {
  // const navigate = useNavigate();

  const handleOnClickProduct = () => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100); // Delay để đảm bảo trang đã load
  };

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link home-link">
          <img src={logo} className="link-icon"></img>
          <text>PKShop</text>
        </Link>
        <div className="link-container">
          <Link to={"/"} onClick={handleOnClickProduct} className="link">
            Product
          </Link>
          <Link to="/sales" className="link">
            Cart
          </Link>
        </div>
        <Link to="/auth/logout">
          <img src={logOut} className="log-out" />
        </Link>
      </nav>
    </BrowserRouter>
  );
}
