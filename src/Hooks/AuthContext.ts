import { createContext } from "react";
interface IAuthContext {
    auth:boolean;
    setAuth :any;
}
const AuthContext = createContext<IAuthContext>({auth:false,setAuth:()=>{}});

export default AuthContext;