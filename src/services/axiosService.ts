
import axios from "axios";
import { User } from "@/interfaces/auth.interface";


const backEndApi = process.env.VUE_APP_BACK_END_API; //"http://localhost:8080/api"

function getUserFromStorage (): User | null {    
  const storedUser = localStorage.getItem('user');
  if(storedUser != null){
     const user = JSON.parse(storedUser) as  User;
      return user;
  }
  return null;
};

function authHeader() {
    const user = getUserFromStorage();
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
      } else {
        return {};
      }
    
};


export default axios.create({
  baseURL: backEndApi,
  headers: {
    ...authHeader(),
    "Content-type": "application/json"
  }
});