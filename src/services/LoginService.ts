import WrapPromise from "../Hooks/Use-fetch";
const url = "http://localhost:3001/";
class LoginService {
  static loginUser: any;
  async loginUser(data: any) {
    try {
      const response = await fetch(url + "login", {
        method: "POST",
        body: JSON.stringify(data)
      });
      return await response.json()
    } catch (error) {
      return error;
    }
  }
}

export default new LoginService();
