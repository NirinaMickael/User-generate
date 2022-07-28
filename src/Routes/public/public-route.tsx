import { Routes, Route ,Navigate} from "react-router-dom";
import { Login, Register } from "../../Pages";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to="/login"/> }/>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register/>}/>
    </Routes>
  );
};
export default PublicRoute;
