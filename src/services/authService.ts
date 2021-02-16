import axios from "@/services/axiosService";
import { User ,UserLogIn } from "@/interfaces/auth.interface";
import { AxiosError } from 'axios';
import { Status } from '@/interfaces/response.interface';


//const user:User  = JSON.parse(localStorage.getItem('user') || new User());

function getUser (): User | null {    
    const storedUser = localStorage.getItem('user');
    if(storedUser != null){
       const user = JSON.parse(storedUser) as  User;
        return user;
    }
    return null;
}

async function loginAsync(loginModel:UserLogIn)  { //:Promise<User |undefined> 
    try {
        const response = await axios.post<User>("/authenticate/user",loginModel);
        console.log(response.data);
        const user= response.data;
        localStorage.setItem('user', JSON.stringify(user));        
        
    } catch (err) {
        const error = err;
          throw err;
    }
}

async function logoutAsync() {
    localStorage.removeItem('user');
}

export const authService = {
    getUser,loginAsync ,logoutAsync
};