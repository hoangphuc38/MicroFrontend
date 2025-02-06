import "./root.component.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BannerImg from "../src/asset/images/Banner.png";
import SportImg from "../src/asset/images/darwin.jpg";

export default function Root(props) {
  // Uncomment và tạo các component cho các route
  //   return <>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/product/" element={<Layout />}>
  //         <Route element={<AuthGuardedRoute />}>
  //           <Route path="/product/list" element={<ProductList />} />
  //           <Route path="/product/details/:id" element={<ProductDetails />} />
  //           <Route index element={<ProductList />} />
  //         </Route>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </>;
  return (
    <div className="container">
      {/* banner */}
      <div className="banner">
        <img src={BannerImg} className="bannerImg"></img>
      </div>
      {/* 2 tab */}
      <div className="category_container">
        <h3>Choose your favor</h3>
        {/* sport */}
        <div className="tab_container">
          <div className="tabItem">
            <img className="tabImg" src={SportImg}></img>
            <div className="sportTab">
              <p>Sport</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
