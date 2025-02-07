import "./root.component.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sport from "./pages/sport";
import Winter from "./pages/winter";

export default function Root(props) {
  // Uncomment và tạo các component cho các route
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/winter" element={<Winter />} />
      </Routes>
    </BrowserRouter>
    )
}
