import "./root.component.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <div>Hello from React</div>
  )
}
