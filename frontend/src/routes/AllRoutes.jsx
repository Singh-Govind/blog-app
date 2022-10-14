import { Route, Routes } from "react-router-dom";
// import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="admin" element={<Admin />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
