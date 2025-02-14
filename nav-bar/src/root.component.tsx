import "./root.component.css";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../src/asset/images/Logo.png";
import user from "../src/asset/images/user.png";
import { useState } from "react";
import logout from "../src/asset/images/arrow-right-from-bracket-solid.svg";

export default function Root(props) {
  const [token, setToken] = useState(sessionStorage.getItem("name"));

  const handleLogOut = () => {
    sessionStorage.removeItem("auth-user");
    sessionStorage.removeItem('name')
    setToken(null);
  };

  const handleOnClickProduct = () => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link home-link">
          <img src={logo} className="link-icon"></img>
          <text>PKShoppp</text>
        </Link>
        <div className="link-container">
          <Link to={"/"} onClick={handleOnClickProduct} className="link">
            Product
          </Link>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
        {token ? (
          <div className="user-infor-container">
            <div>Hi, {token.toString().replace(/"/g, "")}</div>
            <Link onClick={handleLogOut} to={`/auth`}>
              <img className="log_out" src={logout}></img>
            </Link>
          </div>
        ) : (
          <Link className="nav-login" to="/auth">
            <img className="log-out" src={user}></img>
            Login
          </Link>
        )}
      </nav>
    </BrowserRouter>
  );
}
