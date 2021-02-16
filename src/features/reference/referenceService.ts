
import axios from "@/services/axiosService";
import { ReferenceModel } from './reference.interface';
async function getAllAsync()  { //:Promise<User |undefined> 
    try {
        const response = await axios.get<Array<ReferenceModel>>("/reference");        
        return response.data;
    } catch (err) {
        const error = err;
        throw error;
    }
}



export const referenceService = {
    getAllAsync
};