import { useNavigate } from "react-router-dom";
import '../pages/sport.css'
import DropdownMenu from "../components/dropdownMenu";

export default function Sport() {
    const navigate = useNavigate(); // Hook điều hướng
  
    return (
      <div className="container">
        <div className="link_container">
            <nav>Home</nav>
            <span>{'>'}</span>
            <nav>Sport Products</nav>
        </div>
        <div className="filter_container">
            <h2>Sport Products</h2>
            <DropdownMenu/>
        </div>
      </div>
    );
}