import { Routes, Route } from "react-router-dom";
import { Login } from "../../Pages";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};
export default PublicRoute;
