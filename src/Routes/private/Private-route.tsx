import { Navigate} from "react-router-dom";
export type  ProtectedRouteProps = {
  isAuthenticated : boolean,
  authenticationPath:string,
  outlet : JSX.Element;
} 

const PrivateRoute = (
  {isAuthenticated,authenticationPath,outlet}:ProtectedRouteProps
)=>{
  if(isAuthenticated){
    return outlet;
  }else{
    return <Navigate to={authenticationPath}/>
  }
}


export default PrivateRoute;
