import WrapPromise from "../Hooks/Use-fetch";
const url = "http://localhost:3002/";
class AuthService {
  static loginUser: any;
  async loginUser(data: any) {
    try {
      const response = await fetch(url + "login", {
        method: "POST",
        body: JSON.stringify(data)
      });
      return await response.json()
    } catch (error) {
      throw error;
    }
  }
  async registerUser (data :any){
    try {
      const response = await fetch(url+"register",{
        method:"POST",
        body:JSON.stringify(data)
      })
      return  await response.json()
    } catch (error) {
      throw error;
    }
  }
  allUser(token:string){
    const promise = fetch(url+"alluser",{
      method:"POST",
      body:token
    }).then(
      res=>res.json()
    );
    return promise;
  }
}

export default new AuthService();
