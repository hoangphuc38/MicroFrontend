import { useNavigate } from "react-router-dom";
import '../pages/winter.css'
import DropdownMenu from "../components/dropdownMenu";
import ProductCard from "../components/productCard";
import imgTest from '../asset/images/liverpool.jpg'

export default function Winter() {
    const navigate = useNavigate(); // Hook điều hướng
  
    return (
      <div className="winter_container">
        <div className="link_container">
            <nav>Home</nav>
            <span>{'>'}</span>
            <nav>Sport Products</nav>
        </div>
        <div className="filter_container">
            <h2>Sport Products</h2>
            <DropdownMenu/>
        </div>
        <div className="product-list">
            <ProductCard imgSrc={imgTest} name="Liverpool Kit 2024" price={500000}/>
        </div>
      </div>
    );
}