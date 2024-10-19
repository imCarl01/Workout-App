import axios from "axios";
import Constants from 'expo-constants';

const { BASE_URL_ExceriseDB, MY_API_KEY } = Constants.expoConfig?.extra || {};

const headers = {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': MY_API_KEY,
}

export const fetchExecerise = async () => {
    try {
        const response = await axios.get(`${BASE_URL_ExceriseDB}/exercises`,{headers})
        return response.data
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error; 
    }
}

export const fetchExeceriseByTarget = async(target)=>{
    try{
        const response = await axios.get(`${BASE_URL_ExceriseDB}/exercises/target/${target}`, {headers})
        return response.data
    }catch(error){
        console.error('Error fetching exercises:', error);
        throw error;
    }
}
