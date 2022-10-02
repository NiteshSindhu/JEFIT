import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Singup";
import Checkout from "../Pages/Checkout";
import Blog from "./Blog";
import Exercise from "./Exercise";
import Elite from "./Elite";
export default function AllRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/Signup" element={<Signup />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Elite" element={<Elite />} />
        <Route path="/Pages/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
