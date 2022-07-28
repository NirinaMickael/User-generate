import { Routes, Route} from "react-router-dom";
import { Dashboard} from "../../Pages";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path='dashboard' element={ <Dashboard/>}/>
    </Routes>
  );
};
export default PrivateRoute;
