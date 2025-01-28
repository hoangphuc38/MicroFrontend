import "./root.component.css";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../src/asset/images/Logo.png";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link home-link">
          <img src={logo} className="link-icon"></img>
          <text>PKShop</text>
        </Link>
        <div>
          <Link to="/product" className="link">
            Product
          </Link>
          <Link to="/sales" className="link">
            Cart
          </Link>
        </div>
        <Link to="/auth/logout" className="link">
          Logout
        </Link>
      </nav>
    </BrowserRouter>
  );
}
