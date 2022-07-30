import { Routes, Route ,Navigate} from "react-router-dom";
import { Loading } from "../../Components";
import { Login, Register } from "../../Pages";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to="/login"/> }/>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register/>}/>
      <Route path="loading" element={<Loading value={0}/>}/>
    </Routes>
  );
};
export default PublicRoute;
