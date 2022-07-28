import { memo } from "react";
import { Register } from "../../Components";
const Signup = ()=>{
 return <div className="Login">
    <div>
        <Register/>
    </div>
 </div>
}

export default memo(Signup);