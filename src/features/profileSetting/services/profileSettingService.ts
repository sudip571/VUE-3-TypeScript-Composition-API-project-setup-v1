
import axios from "@/services/axiosService";
import { ClientSetting } from '../interface/profileSetting.interface';

async function getClientFormDataAsync()  { //:Promise<User |undefined> 
    try {
        const response = await axios.get<ClientSetting>("/profilesetting");        
        return response.data;
    } catch (err) {
        const error = err;
        throw error;
    }
}



export const profileSettingService = {
    getClientFormDataAsync
};