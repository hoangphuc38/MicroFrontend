import "./root.component.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sport from "./pages/sport";
import Winter from "./pages/winter";
import ProductDetail from "./pages/productDetailWinter";
import ProductDetailSport from "./pages/productDetailSport";

export default function Root(props) {
  // Uncomment và tạo các component cho các route
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/product/winterProduct/details/:id" element={<ProductDetail />} />
        <Route path="/product/sportProduct/details/:id" element={<ProductDetailSport />} />
      </Routes>
    </BrowserRouter>
  );
}
