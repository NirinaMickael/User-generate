import http from "../Api/http.common"
import WrapPromise from "../Hooks/Use-fetch";

class LoginService{
    static loginUser: any;
    loginUser () {
        const promise = http.get<any>("/todos/1").then(
            res=>res.data
        )
        return WrapPromise(promise);
    }
}

export default new LoginService();